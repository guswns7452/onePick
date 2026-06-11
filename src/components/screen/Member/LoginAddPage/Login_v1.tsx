import React from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../navigation/StackNavigator';
import OnePickLogo from '../../../brand/OnePickLogo';
import SafeScreen from '../../../common/SafeScreen';
import { styles } from './LoginStyle_v1';
import { useLogin } from '../useLogin';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function Login_v1({ navigation }: Props) {
  const { fulfilled, phoneNumber, setPhoneNumber, handleLogin } = useLogin(navigation);

  return (
    <SafeScreen style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.topAccent} />

      <View style={styles.content}>
        <View style={styles.logoWrap}>
          <OnePickLogo symbolSize={80} wordmarkSize={32} />
        </View>

        <Text style={styles.slogan}>함께 사면,{'\n'}더 좋은 선택</Text>
        <Text style={styles.subSlogan}>판매자와 구매자를 연결하는 공동구매 플랫폼</Text>

        <View style={styles.card}>
          <Text style={styles.inputLabel}>휴대폰번호</Text>
          <TextInput
            style={styles.input}
            placeholder="01012345678"
            placeholderTextColor="#9AA8B8"
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
    </SafeScreen>
  );
}
