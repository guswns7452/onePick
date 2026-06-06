import React, { useState, useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { styles, text } from './MyListStyle'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator'

import { getMyProducts } from '../../api/Product/getMyProducts';
import { deleteProduct } from '../../api/Product/deleteProduct';
import { patchFunding } from '../../api/Product/patchFunding';

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


export default function MyList({ navigation }: Props) {

    const [products, setProducts] = useState<any[]>([]);
    
    useEffect(() => {
        fetchProducts();
    }, []);
    
    const fetchProducts = async () => {
        try {
            const data = await getMyProducts();
            console.log(JSON.stringify(data, null, 2));
            
            if (Array.isArray(data)) {
                setProducts(data);
            } else if (Array.isArray(data.data)) {
                setProducts(data.data);
            } else {
                setProducts([]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (productId: number) => {
        Alert.alert(
            '삭제 확인',
            '정말 삭제하시겠습니까?',
            [
                {
                    text: '취소',
                    style: 'cancel',
                },
                {
                    text: '삭제',
                    style: 'destructive',

                    onPress: async () => {

                        try {
                            const result = await deleteProduct(productId);
                            console.log(result);
                            console.log('삭제 성공!');
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
            ]
        );
    }

    const handleFinish = async (productId: number) => {
        Alert.alert(
            '조기종료 확인',
            '정말 조기종료하시겠습니까?',
            [
                {
                    text: '취소',
                    style: 'cancel',
                },
                {
                    text: '삭제',
                    style: 'destructive',

                    onPress: async () => {

                        try {
                            const result = await patchFunding(productId);
                            console.log(result);
                            console.log('조기종료 성공!');
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
            ]
        );
    }

    

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

                {products.map((product: any) => (
                    <TouchableOpacity
                        key={product.productId}
                        style={styles.contentContainer}
                        /*onPress={() => console.log(fundings)}*/
                    >
                        <View style={styles.upperBox}>
                            <Text style={text.productText}>{product.title}</Text>
                            <Text style={text.productText}>{product.category}</Text>
                            <Text style={text.priceText}>{product.price}</Text>
                            <Text style={text.priceUnitText}>원</Text>
                        </View>
                        <View style={styles.lowerBox}>
                            <View style={styles.lowerImageBox}>

                                <TouchableOpacity
                                    style={[styles.smallButton, { backgroundColor: 'red' }]}
                                    onPress={() => handleDelete(product.productId)}
                                >
                                    <Text>삭제</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.smallButton, { backgroundColor: 'green' }]}
                                    onPress={() => handleFinish(product.productId)}
                                >
                                    <Text>조기종료</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={styles.lowerTextBox}>
                                <Text style={text.sellerText}>{product.minPeople}</Text>
                                <Text style={text.sellerText}>{product.status}</Text>
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
