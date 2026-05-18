import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { styles, text } from './PostBoardStyle'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator'

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList, 'MyPage'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const productList = [
    {
        id: 1,
        name: '상품 1',
        seller: '판매자 1',
        price: 5000,
        img_source: require('../../public/assets/bank-account.png')
    },
    {
        id: 2,
        name: '상품 2',
        seller: '판매자 2',
        price: 10000,
        img_source: require('../../public/assets/credit-card.png')
    },
    {
        id: 3,
        name: '상품 3',
        seller: '판매자 3',
        price: 20000,
        img_source: require('../../public/assets/bank-account.png')
    },
    {
        id: 4,
        name: '상품 4',
        seller: '판매자 4',
        price: 1500,
        img_source: require('../../public/assets/credit-card.png')
    },
]

export default function PostBoard({ navigation }: Props) {

    // const [finished, setFinished] = useState(false)

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
            <Text style={text.headerText}>PRODUCT BOARD</Text>
            </View>
        </View>

        <View style={styles.main}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.messageContainer}>
                    <Text style={[text.messageText, { left: -6 }]}>총 000개의 상품이 있고,</Text>
                    <Text style={[text.messageText, { right: -6 }]}>그 중 최저가는 000원입니다. </Text>
                </View>

                {productList.map((product: any) => (
                    <TouchableOpacity key={product.id} style={styles.contentContainer}>
                        <View style={styles.upperBox}>
                            <Text style={text.priceText}>{product.price}</Text>
                            <Text style={text.priceUnitText}>원</Text>
                        </View>
                        <View style={styles.lowerBox}>
                            <View style={styles.lowerImageBox}>
                                <Image
                                    source={product.img_source}
                                    style={styles.productImage}
                                />
                            </View>
                            <View style={styles.lowerTextBox}>
                                <Text style={text.productText}>{product.name}</Text>
                                <Text style={text.sellerText}>{product.seller}</Text>
                            </View>
                    </View>

                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
        <View style={styles.footer}>
            <Text style={text.headerText}>FOOTER</Text>
        </View>
    </View>
  );
}
