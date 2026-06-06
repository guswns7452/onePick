import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { styles, text } from './LoginStyle.ts'
import { buttonStyle, buttonText }  from '../../public/style/button.ts'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator.tsx'

import { postLogin } from '../../api/Member/postLogin.ts'

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


export default function Login({ navigation }: Props) {

    const [fulfilled, setFulfilled] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState('')


    useEffect(() => {
        const isFilled = phoneNumber.trim() !== '';
        setFulfilled(isFilled);
    }, [phoneNumber]);

    const handleSubmit = async () => {
        try {
            const body = {
                phoneNumber
            };

            console.log(body);

            const result = await postLogin(body);
            console.log(result);

            navigation.navigate('ProductFundingList');

        } catch (error) {

            if (axios.isAxiosError(error)) {

                Alert.alert(
                    '에러 발생',
                    error.response?.data?.message
                    || '로그인 실패',
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
        <View style={styles.flex}>
            <View style={styles.header}>
            </View>

            <View style={styles.main}>
                <View style={styles.mainContainer}>
                    <TextInput
                        style={text.placeholderText}
                        placeholder='휴대폰번호'
                        maxLength={20}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}/>

                </View>
                <View style={styles.footer}>
                    {/* BUTTON */}
                                    <TouchableOpacity
                                        disabled={!fulfilled}
                                        style={[
                                            buttonStyle.active,
                                            !fulfilled &&
                                            buttonStyle.inactive,
                                        ]}
                                        onPress={handleSubmit}
                                    >
                                        <Text style={buttonText.active}>
                                            완료
                                        </Text>
                                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
