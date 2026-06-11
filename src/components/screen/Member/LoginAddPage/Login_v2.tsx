import React from 'react';
import { Image, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../navigation/StackNavigator';
import { styles } from './LoginStyle_v2';
import { useLogin } from '../useLogin';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function Login_v2({ navigation }: Props) {
  const { fulfilled, phoneNumber, setPhoneNumber, handleLogin } = useLogin(navigation);
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#002266" />

      <View style={[styles.hero, { paddingTop: insets.top + 16 }]}>
        <Image
          source={require('../../../../assets/brand/logo-symbol.png')}
          style={{ width: 56, height: 56 }}
          resizeMode="contain"
        />
        <Text style={styles.heroSlogan}>함께 사면,{'\n'}더 좋은 선택</Text>
        <Text style={styles.heroSub}>판매자와 구매자를 연결하는 공동구매 플랫폼</Text>
      </View>

      <View style={[styles.body, { paddingBottom: insets.bottom + 16 }]}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>로그인</Text>
          <Text style={styles.inputLabel}>휴대폰번호</Text>
          <TextInput
            style={styles.input}
            placeholder="01012345678"
            placeholderTextColor="#9AA8B8"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Text style={styles.hint}>등록된 휴대폰번호로 바로 로그인할 수 있어요.</Text>
        </View>

        <TouchableOpacity
          disabled={!fulfilled}
          style={[styles.button, !fulfilled && styles.buttonDisabled]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
