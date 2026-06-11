// Login.tsx


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View, TextInput } from 'react-native';
import CookieManager from '@react-native-cookies/cookies';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/StackNavigator.tsx';
import { postLogin } from '../../../api/Member/postLogin.ts';
import { styles } from './LoginStyle';

const BASE_URL = 'http://13.209.73.31:8080';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type Props = { navigation: HomeScreenNavigationProp; };

export default function Login({ navigation }: Props) {
    const [fulfilled, setFulfilled]     = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        setFulfilled(phoneNumber.trim() !== '');
    }, [phoneNumber]);

    const handleLogin = async () => {
        try {
            // ✅ fetch로 로그인 — 응답 헤더에서 JSESSIONID 추출 후 저장
            const response = await fetch(`${BASE_URL}/api/v1/member/login`, {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify({ phoneNumber }),
            });

            const cookies = await CookieManager.getAll();
            console.log('모든 쿠키:', JSON.stringify(cookies));

            const result = await response.json();
            console.log(result);
            console.log(`${result.data.type === 'CEO' ? '기업' : '개인'}회원 ${result.data.nickname} 님 로그인 성공 !`);

            if (result.data.type === 'CEO') {
                navigation.replace('CeoMainV3', { member: result.data });
            } else {
                navigation.replace('IndividualMainV1', { member: result.data });
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {
                Alert.alert('에러 발생', error.response?.data?.message || '로그인 실패');
            } else {
                Alert.alert('에러 발생', '알 수 없는 오류');
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>
                        함께 사면{"\n"}
                        더 저렴하게
                    </Text>
                    <Text style={styles.subTitle}>
                        공동구매를 시작해 보세요
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.inputLabel}>휴대폰번호</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="휴대폰번호 입력"
                        placeholderTextColor="#aaa"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
            </View>
            <TouchableOpacity
                disabled={!fulfilled}
                style={[styles.button, !fulfilled && styles.buttonDisabled]}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
        </View>
    );
}
