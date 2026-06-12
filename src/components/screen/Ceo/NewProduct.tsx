// NewProduct.tsx
// (기업) 새로운 펀딩 모집 글 작성 화면
// AI 적정가격 + 설명글 자동생성 기능 추가

import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import {
    Alert, Text, TouchableOpacity, View, ScrollView,
    TextInput, KeyboardAvoidingView, Platform,
    ActivityIndicator, StyleSheet,
} from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import { styles } from './NewProductStyle';
import { postProduct } from '../../../api/Product/postProduct';
import { postProductPriceJob, getProductPriceJob } from '../../../api/ProductPrice/productPriceApi';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
};

const categories = [
    { label: '음식',      value: 'FOOD' },
    { label: '가구',      value: 'FURNITURE' },
    { label: '전자기기',  value: 'DIGITAL' },
    { label: '의류/패션', value: 'FASHION' },
    { label: '미용',      value: 'BEAUTY' },
    { label: '기타',      value: 'ETC' },
];

export default function NewProduct({ navigation }: Props) {

    const pollingRef = useRef<any>(null);

    // 기본 입력 필드
    const [title, setTitle]             = useState('');
    const [content, setContent]         = useState('');
    const [price, setPrice]             = useState('');
    const [minPeople, setMinPeople]     = useState('');
    const [deadlineDays, setDeadlineDays] = useState('');
    const [category, setCategory]       = useState('');

    // AI 입력 필드
    const [cost, setCost]           = useState('');
    const [design, setDesign]       = useState('');
    const [materials, setMaterials] = useState('');
    const [usage, setUsage]         = useState('');

    // AI 결과
    const [aiLoading, setAiLoading]     = useState(false);
    const [aiPrice, setAiPrice]         = useState<number | null>(null);
    const [aiDescription, setAiDescription] = useState<string | null>(null);
    const [aiProductId, setAiProductId] = useState<number | null>(null);

    const [fulfilled, setFulfilled] = useState(false);

    useEffect(() => {
        const isFilled =
            title.trim() !== '' &&
            content.trim() !== '' &&
            price.trim() !== '' &&
            minPeople.trim() !== '' &&
            deadlineDays.trim() !== '' &&
            category.trim() !== '';
        setFulfilled(isFilled);
    }, [title, content, price, minPeople, deadlineDays, category]);

    // 컴포넌트 언마운트 시 polling 중지
    useEffect(() => {
        return () => {
            if (pollingRef.current) clearInterval(pollingRef.current);
        };
    }, []);

    // ── AI 가격 책정 요청 ──────────────────────────────────
    const handleAiAnalyze = async () => {
        console.log('=== AI 분석 버튼 클릭 ===');  // ← 추가
        console.log('title:', title, 'cost:', cost);  // ← 추가
        if (!title || !cost) {
            Alert.alert('입력 오류', '제목과 원가는 필수 입력이에요.');
            return;
        }
        if (isNaN(Number(cost))) {
            Alert.alert('입력 오류', '원가는 숫자로 입력해 주세요.');
            return;
        }

        setAiLoading(true);
        setAiPrice(null);
        setAiDescription(null);

        try {
            // 1. AI 추론 요청
            const job = await postProductPriceJob({
                name:      title,
                cost:      Number(cost),
                design:    design || '기본 디자인',
                materials: materials || '일반 소재',
                usage:     usage || '일반 사용',
            });

            console.log('AI 작업 접수:', job);

            // 2. polling 시작 (3초마다)
            pollingRef.current = setInterval(async () => {
                try {
                    const result = await getProductPriceJob(job.jobId);
                    console.log('polling 결과:', JSON.stringify(result));

                    if (result.status === 'SUCCESS') {
                        clearInterval(pollingRef.current);
                        setAiLoading(false);
                        setAiPrice(result.result?.price);
                        setAiDescription(result.result?.description);
                        setAiProductId(result.productId);
                        if (result.result?.price) setPrice(String(result.result.price));
                        if (result.result?.description) {
                            const cleanDesc = result.result.description
                                .replace(/\uFFFD/g, '')  // 깨진 문자 제거
                                .replace(/\(상품 정보\)/g, '')  // 불필요한 텍스트 제거
                                .replace(/\(원문 설명\)/g, '')
                                .trim();
                            setContent(cleanDesc);
                            setAiDescription(cleanDesc);
                        }

                    } else if (result.status === 'FAILED') {
                        clearInterval(pollingRef.current);
                        setAiLoading(false);
                        Alert.alert('AI 분석 실패', 'AI 가격 분석에 실패했어요. 다시 시도해 주세요.');
                    }
                } catch (e) {
                    console.log('polling 오류:', e);
                }
            }, 3000);

        } catch (error) {
            setAiLoading(false);
            if (axios.isAxiosError(error)) {
                Alert.alert('에러 발생', JSON.stringify(error.response?.data) || error.message);
            } else {
                Alert.alert('에러 발생', '알 수 없는 오류');
            }
        }
    };

    // ── 상품 등록 ──────────────────────────────────────────
    const handleSubmit = async () => {
        try {
            const body = {
                title,
                content,
                price:        Number(price),
                minPeople:    Number(minPeople),
                deadlineDays: Number(deadlineDays),
                category,
                // ✅ AI로 생성된 productId가 있으면 포함
                ...(aiProductId ? { productId: aiProductId } : {}),
            };

            console.log(body);
            const result = await postProduct(body);
            console.log(result);

            Alert.alert('등록 완료', '상품이 성공적으로 등록되었습니다.');
            navigation.goBack();

        } catch (error) {
            if (axios.isAxiosError(error)) {
                Alert.alert('에러 발생', JSON.stringify(error.response?.data) || error.message);
            } else {
                Alert.alert('에러 발생', '알 수 없는 오류');
            }
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView contentContainerStyle={styles.scroll}>

                {/* HEADER */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>🛒 공동구매 글 작성</Text>
                    <Text style={styles.headerSub}>상품 정보를 입력해 주세요</Text>
                </View>

                {/* 기본 상품 정보 */}
                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>📦 상품 정보</Text>

                    <InputField label="제목"      placeholder="제목 입력"      value={title}        onChangeText={setTitle} />
                    <InputField label="상품 설명" placeholder="상품 설명 입력" value={content}      onChangeText={setContent} multiline />
                    <InputField label="가격"      placeholder="가격 입력"      value={price}        onChangeText={setPrice} keyboardType="numeric" />
                    <InputField label="최소 인원" placeholder="최소 인원 입력" value={minPeople}    onChangeText={setMinPeople} keyboardType="numeric" />
                    <InputField label="마감 기한" placeholder="일 단위 입력"   value={deadlineDays} onChangeText={setDeadlineDays} keyboardType="numeric" />

                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>카테고리</Text>
                        <Dropdown
                            style={styles.dropdown}
                            containerStyle={styles.dropdownContainer}
                            placeholderStyle={styles.dropdownPlaceholder}
                            selectedTextStyle={styles.dropdownSelectedText}
                            itemTextStyle={styles.dropdownItemText}
                            data={categories}
                            labelField="label"
                            valueField="value"
                            placeholder="카테고리를 선택하세요"
                            value={category}
                            onChange={item => setCategory(item.value)}
                        />
                    </View>
                </View>

                {/* AI 가격 책정 */}
                <View style={aiStyles.card}>
                    <Text style={aiStyles.cardTitle}>🤖 AI 적정가격 분석</Text>
                    <Text style={aiStyles.cardSub}>상품 정보를 입력하면 AI가 적정 판매가를 분석해 드려요</Text>

                    <InputField label="원가 (원)"  placeholder="예: 7800"              value={cost}      onChangeText={setCost} keyboardType="numeric" />
                    <InputField label="디자인"     placeholder="예: 무광 블랙, 심플 모던" value={design}    onChangeText={setDesign} />
                    <InputField label="원재료"     placeholder="예: 스테인리스, 실리콘"  value={materials} onChangeText={setMaterials} />
                    <InputField label="사용처"     placeholder="예: 사무실, 캠핑, 등산"  value={usage}     onChangeText={setUsage} />

                    <TouchableOpacity
                        style={[aiStyles.aiBtn, aiLoading && aiStyles.aiBtnDisabled]}
                        onPress={handleAiAnalyze}
                        disabled={aiLoading}
                    >
                        {aiLoading ? (
                            <View style={aiStyles.loadingRow}>
                                <ActivityIndicator color="#fff" size="small" />
                                <Text style={aiStyles.aiBtnText}>AI 분석 중...</Text>
                            </View>
                        ) : (
                            <Text style={aiStyles.aiBtnText}>✨ AI 가격 분석하기</Text>
                        )}
                    </TouchableOpacity>

                    {/* AI 결과 */}
                    {aiPrice !== null && (
                        <View style={aiStyles.resultBox}>
                            <Text style={aiStyles.resultTitle}>✅ AI 분석 결과</Text>
                            <View style={aiStyles.priceBox}>
                                <Text style={aiStyles.priceLabel}>적정 판매가</Text>
                                <Text style={aiStyles.priceValue}>{aiPrice?.toLocaleString()}원</Text>
                            </View>
                            {aiDescription && (
                                <>
                                    <Text style={aiStyles.descTitle}>📝 AI 생성 설명</Text>
                                    <Text style={aiStyles.descText}>{aiDescription}</Text>
                                </>
                            )}
                            <Text style={aiStyles.applyHint}>
                                ✓ 가격과 설명이 자동으로 입력됐어요
                            </Text>
                        </View>
                    )}
                </View>

                {/* 등록 버튼 */}
                <TouchableOpacity
                    disabled={!fulfilled}
                    style={[styles.button, !fulfilled && styles.buttonDisabled]}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>완료</Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

function InputField({ label, placeholder, value, onChangeText, keyboardType, multiline }: any) {
    return (
        <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                style={[styles.input, multiline && { height: 100, textAlignVertical: 'top' }]}
                placeholder={placeholder}
                placeholderTextColor="#aaa"
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                multiline={multiline}
            />
        </View>
    );
}

const aiStyles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1.5,
        borderColor: '#4f46e5',
        shadowColor: '#4f46e5',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    cardTitle: { fontSize: 16, fontWeight: '700', color: '#4f46e5', marginBottom: 4 },
    cardSub:   { fontSize: 13, color: '#888', marginBottom: 16 },

    aiBtn: {
        backgroundColor: '#4f46e5', borderRadius: 12,
        paddingVertical: 14, alignItems: 'center', marginTop: 8,
    },
    aiBtnDisabled: { backgroundColor: '#a5b4fc' },
    aiBtnText:     { color: '#fff', fontSize: 15, fontWeight: '700' },
    loadingRow:    { flexDirection: 'row', alignItems: 'center', gap: 8 },

    resultBox: {
        backgroundColor: '#f0f0ff', borderRadius: 12,
        padding: 16, marginTop: 16,
    },
    resultTitle: { fontSize: 14, fontWeight: '700', color: '#1a1a2e', marginBottom: 12 },
    priceBox:    { backgroundColor: '#fff', borderRadius: 10, padding: 14, alignItems: 'center', marginBottom: 12 },
    priceLabel:  { fontSize: 12, color: '#888', marginBottom: 4 },
    priceValue:  { fontSize: 28, fontWeight: 'bold', color: '#4f46e5' },
    descTitle:   { fontSize: 13, fontWeight: '700', color: '#333', marginBottom: 6 },
    descText:    { fontSize: 13, color: '#555', lineHeight: 20, marginBottom: 8 },
    applyHint:   { fontSize: 12, color: '#4f46e5', fontWeight: '600' },
});
