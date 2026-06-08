// NewProposal.tsx
// (개인) 구매 요청 글 작성
// 카드 클릭 시 ProductFundingDetail로 이동 ???(개발필요)


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
    Alert,
    Text,
    Image,
    TouchableOpacity,
    View,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-element-dropdown';


import {
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { RootStackParamList }
from '../../../navigation/StackNavigator';

import { styles } from './NewProposalStyle';

import { postProposal } from '../../../api/Proposal/postProposal';


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

export default function NewProposal({ navigation }: Props) {

    const [fulfilled, setFulfilled] = useState(false);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [deadlineDays, setDeadlineDays] = useState('');
    const [imageMetas, setImageMetas] = useState<any[]>([]);

    useEffect(() => {
        const isFilled =
            title.trim() !== '' &&
            content.trim() !== '' &&
            category.trim() !== '' &&
            maxPrice.trim() !== '' &&
            deadlineDays.trim() !== ''
            ;
            //&& imageMetas.length !== 0;

        setFulfilled(isFilled);
    }, [
        title,
        content,
        category,
        maxPrice,
        deadlineDays,
        imageMetas,
    ]);

    const handleSubmit = async () => {

        try {
            const body = {
                title,
                content,
                category,
                maxPrice: Number(maxPrice),
                deadlineDays: Number(deadlineDays),
                imageMetas,
            };

            console.log(body);

            const result = await postProposal(body);
            console.log(result);
            Alert.alert(
                '등록 완료',
                '구매 요청이 성공적으로 등록되었습니다.'
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

    const handlePickImage = async () => {

        const result = await ImagePicker.launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 5,
        });

        if (result.didCancel) {
            return;
        }

        if (result.assets) {

            const newImages = result.assets.map((asset) => ({
                uri: asset.uri,
                name: asset.fileName,
                type: asset.type,
            }));

            setImageMetas((prev) => [
                ...prev,
                ...newImages,
            ]);
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
                        🛒 구매 요청 글 작성
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

                    {/* IMAGE UPLOAD */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputLabel}>
                            상품 이미지
                        </Text>

                    <TouchableOpacity
                        style={styles.imageUploadBox}
                        onPress={handlePickImage}
                    >
                        <Text style={styles.imageUploadIcon}>
                            📷
                        </Text>

                        <Text style={styles.imageUploadText}>
                            이미지 업로드
                        </Text>

                        <Text style={styles.imageUploadSub}>
                            최대 5장까지 업로드 가능
                        </Text>
                    </TouchableOpacity>

                    {imageMetas.length > 0 && (

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.previewRow}
                        >

                            {imageMetas.map((image, index) => (

                                <View
                                    key={index}
                                    style={styles.previewBox}
                                >

                                    <Image
                                        source={{ uri: image.uri }}
                                        style={styles.previewImage}
                                    />

                                    <TouchableOpacity
                                        style={styles.removeBtn}
                                        onPress={() => {

                                            setImageMetas(
                                                imageMetas.filter(
                                                    (_, i) => i !== index
                                                )
                                            );
                                        }}
                                    >
                                        <Text style={styles.removeBtnText}>
                                            ✕
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            ))}

                        </ScrollView>

                        )}

                    </View>

                    <InputField
                        label="가격"
                        placeholder="최대 가격 입력"
                        value={maxPrice}
                        onChangeText={setMaxPrice}
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