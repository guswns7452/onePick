import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { Bar } from 'react-native-progress'
import { styles, text } from './ProductDetailStyle'


export default function ProductDetail() {

    const [finished, setFinished] = useState(false)

    return (
        <View style={styles.flex}>
        <View style={styles.header}>
            <View style={styles.headerContainer}>
            <TouchableOpacity /*onPress={() => {navigation.goBack()}}*/>
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
                            source={require('../../public/assets/bank-account.png')}
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
                        <Text style={text.nameText}>상품 이름입니다.</Text>
                    </View>
                </View>
                <View style={styles.barContainer}>
                    <Bar progress={0.7} width={340} color={'#0076F0'} />
                </View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    /* onPress */
                >
                    <Text style={text.buttonText}>상 세</Text>
                </TouchableOpacity>
                <View style={styles.mainContainer}>
                    <Text style={text.contentText}>content입니다.</Text>
                </View>
                <View style={styles.mainContainer}>
                    <Text style={text.contentText}>??입니다.</Text>
                </View>
            </ScrollView>
        </View>
        <View style={styles.footer}>
            <Text style={text.headerText}>FOOTER</Text>
        </View>
    </View>
  );
}
