// NewProduct.tsx
// (기업) 새로운 펀딩 모집 글 작성 화면
// ~


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Alert,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import { Dropdown } from 'react-native-element-dropdown';


import {
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { RootStackParamList }
from '../../../navigation/StackNavigator';

import { styles } from '../../product/NewProductStyle';

import { postProduct } from '../../../api/Product/postProduct';


type HomeScreenNavigationProp =
    NativeStackNavigationProp<RootStackParamList>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

const categories = [
    { label: '음식', value: 'FOOD' },
    { label: '가구', value: 'FURNITURE' },
    { label: '전자기기', value: 'DIGITAL' },
    { label: '의류/패션', value: 'FASHION' },
    { label: '미용', value: 'BEAUTY' },
    { label: '기타', value: 'ETC' },
];

export default function NewPost({
    navigation,
}: Props) {

    const [fulfilled, setFulfilled] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [price, setPrice] = useState('');
    const [minPeople, setMinPeople] = useState('');
    const [deadlineDays, setDeadlineDays] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        const isFilled =
            title.trim() !== '' &&
            content.trim() !== '' &&
            price.trim() !== '' &&
            minPeople.trim() !== '' &&
            deadlineDays.trim() !== '' &&
            category.trim() !== '';

        setFulfilled(isFilled);
    }, [
        title,
        content,
        price,
        minPeople,
        deadlineDays,
        category,
    ]);

    const handleSubmit = async () => {

        try {
            const body = {
                title,
                content,
                price: Number(price),
                minPeople: Number(minPeople),
                deadlineDays: Number(deadlineDays),
                category,
            };

            console.log(body);

            const result = await postProduct(body);
            console.log(result);
            Alert.alert(
                '등록 완료',
                '상품이 성공적으로 등록되었습니다.'
            );

            navigation.goBack();

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error);
                
                Alert.alert(
                    '에러 발생',
                    JSON.stringify(error.response?.data)
                    || error.message
                );

            } else {
                Alert.alert(
                    '에러 발생',
                    '알 수 없는 오류',
                );
            }
        }
    };


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={
                Platform.OS === 'ios'
                    ? 'padding'
                    : undefined
            }
        >

            <ScrollView
                contentContainerStyle={styles.scroll}
            >

                {/* HEADER */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        🛒 공동구매 글 작성
                    </Text>

                    <Text style={styles.headerSub}>
                        상품 정보를 입력해 주세요
                    </Text>
                </View>

                {/* CARD */}
                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>
                        📦 상품 정보
                    </Text>

                    <InputField
                        label="제목"
                        placeholder="제목 입력"
                        value={title}
                        onChangeText={setTitle}
                    />

                    <InputField
                        label="상품 설명"
                        placeholder="상품 설명 입력"
                        value={content}
                        onChangeText={setContent}
                        multiline
                    />

                    <InputField
                        label="가격"
                        placeholder="가격 입력"
                        value={price}
                        onChangeText={setPrice}
                        keyboardType="numeric"
                    />

                    <InputField
                        label="최소 인원"
                        placeholder="최소 인원 입력"
                        value={minPeople}
                        onChangeText={setMinPeople}
                        keyboardType="numeric"
                    />

                    <InputField
                        label="마감 기한"
                        placeholder="일 단위 입력"
                        value={deadlineDays}
                        onChangeText={setDeadlineDays}
                        keyboardType="numeric"
                    />

                    {/* Dropdown */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>
                            카테고리
                        </Text>

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

                            onChange={item => {
                                setCategory(item.value);
                            }}
                        />
                    </View>

                </View>

                {/* BUTTON */}
                <TouchableOpacity
                    disabled={!fulfilled}
                    style={[
                        styles.button,
                        !fulfilled &&
                        styles.buttonDisabled,
                    ]}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>
                        완료
                    </Text>
                </TouchableOpacity>

            </ScrollView>

        </KeyboardAvoidingView>
    );
}

function InputField({
    label,
    placeholder,
    value,
    onChangeText,
    keyboardType,
    multiline,
}: any) {

    return (
        <View style={styles.inputGroup}>

            <Text style={styles.inputLabel}>
                {label}
            </Text>

            <TextInput
                style={[
                    styles.input,
                    multiline && {
                        height: 100,
                        textAlignVertical: 'top',
                    },
                ]}
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