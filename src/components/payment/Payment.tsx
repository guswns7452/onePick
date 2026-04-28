import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { styles, text } from './PaymentStyle'


export default function Payment() {

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
            <Text style={text.headerText}>PAYMENT</Text>
            </View>
        </View>

        <View style={styles.main}>
            <View style={styles.scrollView}>
                <Text style={text.mainText}>통장에서 결제</Text>
                <View style={styles.mainContainer}>
                    <Text>MAIN1 컨테이너입니다.</Text>
                </View>

                <Text style={text.mainText}>카드로 결제</Text>
                <View style={styles.mainContainer}>
                    <Text>MAIN2 컨테이너입니다.</Text>
                </View>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={text.headerText}>FOOTER</Text>
        </View>
    </View>
  );
}
