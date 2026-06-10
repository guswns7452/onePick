// Payment.tsx

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import {
    Alert,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import {
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { RootStackParamList }
from '../../navigation/StackNavigator';
import { RouteProp } from '@react-navigation/native';

import { postApplyFunding } from '../../api/Product/postApplyFunding';
import { getMyAccounts } from '../../api/Member/getMyAccounts';

import { styles } from './PaymentStyle';

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type PaymentRouteProp =
    RouteProp<
        RootStackParamList,
        'Payment'
    >;

type Props = {
  navigation: HomeScreenNavigationProp;
    route: PaymentRouteProp;
};



type Account = {
    id: number;
    accountNumber: string;
    balance: number;
    accountType: string;
};

type Card = {
    id: number;
    cardNumber: string;
    cardExpirationDate: string;
    cardType: any;
};




export default function Payment({ navigation, route }: Props) {

    const request = route.params;

    const [selectedAccount, setSelectedAccount]
        = useState<number | null>(null);

    const [selectedCard, setSelectedCard]
        = useState<number | null>(null);


    const [accounts, setAccounts] = useState<Account[]>([]);
    const [cards, setCards] = useState<Card[]>([]);


    const fetchPayment = async () => {
        try {
            const data = await getMyAccounts();
            console.log(JSON.stringify(data, null, 2));

            setAccounts(data.data.accounts);
            setCards(data.data.cards);

            console.log(accounts);
            console.log(cards);


        } catch (error) {
            console.log(error);
        }
    };
      
    fetchPayment();

    


    const handleApply = async () => {
        try {
            const body = {
                content: request.content,
                price: Number(request.price),
        }

        const result = await postApplyFunding(request.productId, body);
        console.log(result);
        
        Alert.alert(
            '✅ 입찰 완료',
            '입찰이 성공적으로 완료됐어요!');
        

        navigation.navigate('ProductFundingList');

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error);
                
            Alert.alert(
                '에러 발생',
                JSON.stringify(error.response?.data)
                || error.message
            );

        } else {
            Alert.alert(
                '에러 발생',
                '알 수 없는 오류',
            );
        }
    }
}


    return (

        <View style={styles.container}>

            <ScrollView
                contentContainerStyle={styles.scroll}
                showsVerticalScrollIndicator={false}
            >

                {/* HEADER */}
                <View style={styles.header}>

                    <Text style={styles.headerTitle}>
                        💳 결제 수단 선택
                    </Text>

                    <Text style={styles.headerSub}>
                        사용할 결제 수단을 선택하세요
                    </Text>

                </View>

                {/* BANK SECTION */}
                <View style={styles.card}>

                    <View style={styles.sectionHeader}>

                        <Text style={styles.sectionEmoji}>
                            🏦
                        </Text>

                        <Text style={styles.sectionTitle}>
                            통장에서 결제
                        </Text>

                    </View>

                    {
                        accounts.map(account => (

                            <TouchableOpacity
                                key={account.id}
                                style={[
                                    styles.paymentItem,

                                    selectedAccount === account.id &&
                                    styles.paymentItemSelected,
                                ]}
                                onPress={() => {
                                    setSelectedAccount(account.id);
                                    setSelectedCard(null);

                                }}
                            >

                                <View>

                                    <Text style={styles.paymentName}>
                                        {account.accountNumber}
                                    </Text>

                                    <Text style={styles.paymentSub}>
                                        잔액 {account.balance} 원
                                    </Text>

                                </View>

                                {
                                    selectedAccount === account.id && (
                                        <Text style={styles.check}>
                                            ✓
                                        </Text>
                                    )
                                }

                            </TouchableOpacity>

                        ))
                    }

                </View>

                {/* CARD SECTION */}
                <View style={styles.card}>

                    <View style={styles.sectionHeader}>

                        <Text style={styles.sectionEmoji}>
                            💳
                        </Text>

                        <Text style={styles.sectionTitle}>
                            카드로 결제
                        </Text>

                    </View>

                    {
                        cards.map(card => (

                            <TouchableOpacity
                                key={card.id}
                                style={[
                                    styles.paymentItem,

                                    selectedCard === card.id &&
                                    styles.paymentItemSelected,
                                ]}
                                onPress={() => {

                                    setSelectedCard(card.id);
                                    setSelectedAccount(null);

                                }}
                            >

                                <View>

                                    <Text style={styles.paymentName}>
                                        {card.cardNumber}
                                    </Text>

                                    <Text style={styles.paymentSub}>
                                        {card.cardType}
                                    </Text>

                                </View>

                                {
                                    selectedCard === card.id && (
                                        <Text style={styles.check}>
                                            ✓
                                        </Text>
                                    )
                                }

                            </TouchableOpacity>

                        ))
                    }

                </View>

                {/* BUTTON */}
                <TouchableOpacity
                    disabled={selectedAccount == null && selectedCard == null}
                    style={[
                        styles.button,
                        (selectedAccount == null && selectedCard == null) &&
                        styles.buttonDisabled,
                    ]}
                    onPress={() => handleApply()}
                >

                    <Text style={styles.buttonText}>
                        결제하기
                    </Text>

                </TouchableOpacity>

            </ScrollView>

        </View>
    );
}