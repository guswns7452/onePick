import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { styles, text } from './MainStyle'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator'

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Main({ navigation }: Props) {
    
    return (
        <View style={styles.flex}>
        <View style={styles.header}>
            <View style={styles.headerContainer}>
            <Text style={text.headerText}>MAIN</Text>
            </View>
        </View>

        <View style={styles.main}>
            <View style={styles.mainView}>
                <View style={styles.mainContainer}>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('IndMain')}
                    >
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                /*source={require('../../public/assets/credit-card.png')}*/
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>개인회원</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('CorMain')}
                    >
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                /*source={require('../../public/assets/bank-account.png')}*/
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>기업회원</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={text.headerText}>FOOTER</Text>
        </View>
    </View>
  );
}
