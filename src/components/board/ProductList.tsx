import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { styles, text } from './ProductListStyle'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator'

import { getProducts } from '../../api/Product/getProducts';

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};



export default function ProductList({ navigation }: Props) {

    const [products, setProducts] = useState<any[]>([]);
    
    useEffect(() => {
        fetchProducts();
    }, []);
    
    const fetchProducts = async () => {
        try {
            const data = await getProducts();
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
            <Text style={text.headerText}>PRODUCT LIST</Text>
            </View>
        </View>

        <View style={styles.main}>
            <ScrollView style={styles.scrollView}>

                {products?.map((product: any) => (
                    <TouchableOpacity
                        key={product.productId} style={styles.mainContainer}
                        onPress={() =>
                            navigation.navigate('ProductDetail', {
                                title: product.title,
                                price: product.price,
                                minPeople: product.minPeople,
                                status: product.status,
                                category: product.category,
                            })}
                    >
                        <View style={styles.upperBox}>
                            <View style={styles.upperTextBox}>
                                <Text style={text.productText}>{product.title}</Text>
                                <Text style={text.productText}>{product.price}</Text>
                                <Text style={text.productText}>{product.status}</Text>
                            </View>
                        </View>
                        <View style={styles.lowerBox}>
                                <Text style={text.productText}>{product.category}</Text>
                                <Text style={text.productText}>{product.minPeople}</Text>
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