import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native'
import PaymentSelect from './PaymentSelect'
import { styles, text } from './PaymentStyle'
import { buttonStyle, buttonText }  from '../../public/style/button.ts'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator'

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList, 'MyPage'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Payment({ navigation }: Props) {

    return (
        <View style={styles.flex}>
        <View style={styles.header}>
            <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Image
                    source={require('../../public/assets/back.png')}
                    style={styles.iconBack}
                />
            </TouchableOpacity>
            <Text style={text.headerText}>PAYMENT</Text>
            </View>
        </View>

        <View style={styles.main}>
            <PaymentSelect />
        </View>

        <TouchableOpacity
        activeOpacity={0.7}
            style={buttonStyle.active}
            /* onPress */
        >
            <Text style={buttonText.active}>다음</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
            <Text style={text.headerText}>FOOTER</Text>
        </View>
    </View>
  );
}
