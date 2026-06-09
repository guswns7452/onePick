import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { styles, text } from './MyPageScreenStyle'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator'

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function MyPage({ navigation }: Props) {
    
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
            <Text style={text.headerText}>MYPAGE</Text>
            </View>
        </View>

        <View style={styles.main}>
            <View style={styles.mainView}>
                <View style={styles.mainContainer}>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('FundingList')}
                    >
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                source={require('../../public/assets/credit-card.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>FUNDINGLIST</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('Payment')}
                    >
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                source={require('../../public/assets/bank-account.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>PAYMENT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('PostList')}
                    >
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                source={require('../../public/assets/credit-card.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>POSTLIST</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('PostBoardDetail')}
                    >
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                source={require('../../public/assets/bank-account.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>BOARDDETAIL</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('NewProduct')}
                    >
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                source={require('../../public/assets/bank-account.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>NEWPRODUCT</Text>
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
