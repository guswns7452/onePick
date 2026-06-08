import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { styles, text } from './MyPageStyle'

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
            <Text style={text.headerText}>INDIVIDUAL MAIN</Text>
            </View>
        </View>

        <View style={styles.main}>
            <View style={styles.mainView}>
                <View style={styles.mainContainer}>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('ProductFundingList')}
                    >
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>모집 중인 전체 펀딩 글</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('NewProduct')}
                    >
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>새로운 펀딩 모집</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('NewProposal')}
                    >
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>새로운 구매 요청</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('MyProductList')}
                    >
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>사장이 쓴 모집 글 목록</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('MyFundingList')}
                    >
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>내가 펀딩 참여한 목록</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.optionContainer}
                        onPress={() => navigation.navigate('MyProposalList')}
                    >
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>내가 구매 요청한 목록</Text>
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
