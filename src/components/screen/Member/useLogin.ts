import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import CookieManager from '@react-native-cookies/cookies';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';

const BASE_URL = 'http://13.209.73.31:8080';

type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function useLogin(navigation: LoginNavigationProp) {
  const [fulfilled, setFulfilled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    setFulfilled(phoneNumber.trim() !== '');
  }, [phoneNumber]);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/member/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber }),
      });

      const cookies = await CookieManager.getAll();
      console.log('모든 쿠키:', JSON.stringify(cookies));

      const result = await response.json();
      console.log(result);
      console.log(
        `${result.data.type === 'CEO' ? '기업' : '개인'}회원 ${result.data.nickname} 님 로그인 성공 !`,
      );

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

  return { fulfilled, phoneNumber, setPhoneNumber, handleLogin };
}
