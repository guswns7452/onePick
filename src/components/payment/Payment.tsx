import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native'
import PaymentSelect from './PaymentSelect'
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
            <PaymentSelect />
        </View>
        <View style={styles.footer}>
            <Text style={text.headerText}>FOOTER</Text>
        </View>
    </View>
  );
}
