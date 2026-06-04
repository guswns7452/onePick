import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyPage from '../components/main/MyPage'
import NewProduct from '../components/product/NewProduct'
import PostList from '../components/board/PostList'
import FundingList from '../components/funding/FundingList'
import PostBoardDetail from '../components/board/PostBoardDetail'
import ProductDetail from '../components/board/ProductDetail'
import Payment from '../components/payment/Payment'

export type RootStackParamList = {
  MyPage: undefined;
  NewProduct: undefined;
  FundingList: undefined;
  PostList: undefined;
  PostBoardDetail: undefined;
  ProductDetail: {
    id: number;
    name: string;
    seller: string;
    price: number;
    img_source: any;
  };
  Payment: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MyPage"
        component={MyPage}
      />
      <Stack.Screen
        name="NewProduct"
        component={NewProduct}
      />
      <Stack.Screen
        name="PostList"
        component={PostList}
      />
      <Stack.Screen
        name="FundingList"
        component={FundingList}
      />
      <Stack.Screen
        name="PostBoardDetail"
        component={PostBoardDetail}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
      />

    </Stack.Navigator>
  );
}