import React from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../navigation/StackNavigator';
import SafeScreen from '../../../common/SafeScreen';
import { styles } from './LoginStyle_v3';
import { useLogin } from '../useLogin';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function Login_v3({ navigation }: Props) {
  const { fulfilled, phoneNumber, setPhoneNumber, handleLogin } = useLogin(navigation);

  return (
    <SafeScreen style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#EEF3F9" />

      <View style={styles.card}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>onepick</Text>
        </View>

        <Text style={styles.title}>함께 사면,{'\n'}더 좋은 선택</Text>
        <Text style={styles.subTitle}>판매자와 구매자를 연결하는 공동구매 플랫폼</Text>

        <View style={styles.divider} />

        <Text style={styles.inputLabel}>휴대폰번호</Text>
        <TextInput
          style={styles.input}
          placeholder="01012345678"
          placeholderTextColor="#9AA8B8"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <TouchableOpacity
          disabled={!fulfilled}
          style={[styles.button, !fulfilled && styles.buttonDisabled]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>공동구매로 더 합리적인 선택을 시작해 보세요.</Text>
      </View>
    </SafeScreen>
  );
}
