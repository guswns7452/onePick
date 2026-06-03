import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { styles, text } from './PostListStyle'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator'

import { getProducts } from '../../api/getProducts';

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const productList = [
    {
        id: 1,
        name: '상품 1',
        seller: '판매자 1',
        price: 5000,
        img_source: require('../../public/assets/bank-account.png'),
    },
    {
        id: 2,
        name: '상품 2',
        seller: '판매자 2',
        price: 10000,
        img_source: require('../../public/assets/credit-card.png'),
    },
    {
        id: 3,
        name: '상품 3',
        seller: '판매자 3',
        price: 20000,
        img_source: require('../../public/assets/bank-account.png'),
    },
    {
        id: 4,
        name: '상품 4',
        seller: '판매자 4',
        price: 1500,
        img_source: require('../../public/assets/credit-card.png'),
    },
    {
        id: 5,
        name: '상품 5',
        seller: '판매자 5',
        price: 50000,
        img_source: require('../../public/assets/bank-account.png'),
    },
    {
        id: 6,
        name: '상품 6',
        seller: '판매자 6',
        price: 15000,
        img_source: require('../../public/assets/credit-card.png'),
    },
]

export default function PostList({ navigation }: Props) {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetchPosts();
    }, []);
    
    const fetchPosts = async () => {
        try {
            const data = await getProducts();
    
            console.log(data);
            setPosts(data);
    
        } catch (error) {
            console.log(error);
        }
    };

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
            <Text style={text.headerText}>POST LIST</Text>
            </View>
        </View>

        <View style={styles.main}>
            <ScrollView style={styles.scrollView}>

                {productList.map((product: any) => (
                    <TouchableOpacity
                        key={product.id} style={styles.mainContainer}
                        onPress={() =>
                            navigation.navigate('ProductDetail', {
                                id: product.id,
                                name: product.name,
                                seller: product.seller,
                                price: product.price,
                                img_source: product.img_source,
                            })}
                    >
                        <View style={styles.upperBox}>
                            <View style={styles.upperImageBox}>
                                <Image
                                    source={product.img_source}
                                    style={styles.productImage}
                                />
                            </View>
                            <View style={styles.upperTextBox}>
                                <Text style={text.productText}>{product.name}</Text>
                                <Text style={text.productText}>{product.seller}</Text>
                            </View>
                        </View>
                        <View style={styles.lowerBox}>
                            <Text style={text.productText}>{product.price}</Text>
                            <Text style={text.productText}>원</Text>
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