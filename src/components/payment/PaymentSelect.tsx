import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles, text } from './PaymentSelectStyle'

const options = [
    { id: 'bank-account', label: '통장에서 결제', source: require('../../public/assets/bank-account.png') },
    { id: 'credit-card', label: '카드로 결제', source: require('../../public/assets/credit-card.png') },
]

export default function PaymentSelect() {

    const [selected, setSelected] = useState('bank-account')

    return (
        <View style={styles.scrollView}>
            {options.map(item => (
                <TouchableOpacity
                    key={item.id}
                    style={selected === item.id ? styles.activeBox : styles.inactiveBox}
                    onPress={() => setSelected(item.id)}
                >
                    <View style={styles.textBox}>
                        <Text
                            style={selected === item.id ? text.activeText : text.inactiveText}
                        >{item.label}</Text>
                    </View>
                    {selected === item.id ?
                        (<View style={styles.imageBox}>
                            <Image
                                source={item.source}
                                style={styles.icon}
                            />
                        </View>)
                        :
                        (<></>)
                    }
                </TouchableOpacity>
            ))}
        </View>
    );
}
