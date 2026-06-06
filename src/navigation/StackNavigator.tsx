import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from '../components/main/Main'
import ProductFundingList from '../components/screen/Individual/ProductFundingList'
import ProductFundingDetail from '../components/screen/Individual/ProductFundingDetail'
import Login from '../components/main/Login'
import SetPrice from '../components/SetPrice'
import IndMain from '../components/main/IndMain'
import CorMain from '../components/main/CorMain'
import MyPage from '../components/main/MyPage'
import NewPost from '../components/product/NewPost'
import NewProduct from '../components/product/NewProduct'
import ProductList from '../components/board/ProductList'
import MyList from '../components/funding/MyList'
import MyFundingList from '../components/funding/MyFundingList'
import PostBoardDetail from '../components/board/PostBoardDetail'
import ProductDetail from '../components/board/ProductDetail'
import Payment from '../components/payment/Payment'

export type RootStackParamList = {
  Main: undefined;
  ProductFundingList: undefined;
  ProductFundingDetail: {
    productId: number,
  };
  Login: undefined;
  SetPrice: undefined;
  IndMain: undefined;
  CorMain: undefined;
  MyPage: undefined;
  NewProduct: undefined;
  NewPost: undefined;
  MyList: undefined;
  MyFundingList: undefined;
  ProductList: undefined;
  PostBoardDetail: undefined;
  ProductDetail: {
    title: string,
    price: string,
    minPeople: number,
    status: string,
    category: string;
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
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="ProductFundingList"
        component={ProductFundingList}
      />
      <Stack.Screen
        name="ProductFundingDetail"
        component={ProductFundingDetail}
      />
      <Stack.Screen
        name="Main"
        component={Main}
      />
      <Stack.Screen
        name="SetPrice"
        component={SetPrice}
      />
      <Stack.Screen
        name="IndMain"
        component={IndMain}
      />
      <Stack.Screen
        name="CorMain"
        component={CorMain}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPage}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPost}
      />
      <Stack.Screen
        name="NewProduct"
        component={NewProduct}
      />
      <Stack.Screen
        name="ProductList"
        component={ProductList}
      />
      <Stack.Screen
        name="MyList"
        component={MyList}
      />
      <Stack.Screen
        name="MyFundingList"
        component={MyFundingList}
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