import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { Bar } from 'react-native-progress'
import { styles, text } from './ProductDetailStyle'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator'
import { RouteProp } from '@react-navigation/native';


type ProductDetailNavigationProp =
    NativeStackNavigationProp<
        RootStackParamList,
        'ProductDetail'
    >;

type ProductDetailRouteProp =
    RouteProp<
        RootStackParamList,
        'ProductDetail'
    >;

type Props = {
    navigation: ProductDetailNavigationProp;
    route: ProductDetailRouteProp;
};


export default function ProductDetail({ navigation, route }: Props) {

    const [finished, setFinished] = useState(false);
    const {
        id,
        name,
        seller,
        price,
        img_source,
    } = route.params;

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
            <Text style={text.headerText}>PRODUCT DETAILS</Text>
            </View>
        </View>

        <View style={styles.main}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.mainContainer}>
                    <View style={styles.imageBox}>
                        <Image
                            source={img_source}
                            style={styles.productImage}
                        />
                    </View>
                    <View>
                        <View style={styles.titleBox}>
                            <View style={[styles.statusBox, finished ? { backgroundColor: '#555555' } : { backgroundColor: '#1654D1' }]}>
                                <Text style={text.statusText}>
                                    {finished ? '종료' : '진행'}
                                </Text>
                            </View>
                            <Text style={text.timeText}>4 : 02 : 55</Text>
                        </View>
                        <Text style={text.nameText}>{name}</Text>
                    </View>
                </View>

                <View style={styles.barContainer}>
                    <View style={styles.graphicBox}>
                        <Bar progress={0.7} width={340} color={'#C85000'} />
                    </View>
                    <View style={styles.numericBox}>
                        <Text style={[text.numericText, { right: 125 }]}>0%</Text>
                        <Text style={text.numericText}>50%</Text>
                        <Text style={[text.numericText, { left: 125 }]}>100%</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    /* onPress */
                >
                    <Text style={text.buttonText}>상 세</Text>
                </TouchableOpacity>
                <View style={styles.contentContainer}>
                    <Text style={text.contentText}>{seller}</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={text.contentText}>{price}</Text>
                </View>
            </ScrollView>
        </View>
        <View style={styles.footer}>
            <Text style={text.headerText}>FOOTER</Text>
        </View>
    </View>
  );
}
