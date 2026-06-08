import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from '../components/main/Main'

import ProductFundingList from '../components/screen/Individual/ProductFundingList'
import ProductFundingDetail from '../components/screen/Individual/ProductFundingDetail'
import MyFundingList from '../components/screen/Individual/MyFundingList'

import MyProductList from '../components/screen/Corporation/MyProductList'

import NewProposal from '../components/screen/Individual/NewProposal'

import GongguAIScreen from '../components/screen/Ai/GongguAIScreen'
import OrderParserScreen from '../components/screen/Ai/OrderParserScreen'
import RecommendScreen from '../components/screen/Ai/RecommendScreen'
import Sketch2ProductScreen from '../components/screen/Ai/Sketch2ProductScreen'


import Login from '../components/main/Login'
import SetPrice from '../components/SetPrice'
import IndMain from '../components/main/IndMain'
import CorMain from '../components/main/CorMain'
import MyPage from '../components/main/MyPage'
import NewPost from '../components/product/NewPost'
import NewProduct from '../components/product/NewProduct'
import ProductList from '../components/board/ProductList'
import MyList from '../components/funding/MyList'
import PostBoardDetail from '../components/board/PostBoardDetail'
import ProductDetail from '../components/board/ProductDetail'
import Payment from '../components/payment/Payment'

export type RootStackParamList = {
  Main: undefined;
  ProductFundingList: undefined;
  ProductFundingDetail: {
    productId: number,
  };
  MyProductList: undefined;
  MyFundingList: undefined;

  NewProposal: undefined;

  GongguAIScreen: undefined;
  OrderParserScreen: undefined;
  RecommendScreen: undefined;
  Sketch2ProductScreen: undefined;


  Login: undefined;
  SetPrice: undefined;
  IndMain: undefined;
  CorMain: undefined;
  MyPage: undefined;
  NewProduct: undefined;
  NewPost: undefined;
  MyList: undefined;
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
        name="MyProductList"
        component={MyProductList}
      />


      <Stack.Screen
        name="NewProposal"
        component={NewProposal}
      />


      <Stack.Screen
        name="GongguAIScreen"
        component={GongguAIScreen}
      />
      <Stack.Screen
        name="OrderParserScreen"
        component={OrderParserScreen}
      />
      <Stack.Screen
        name="RecommendScreen"
        component={RecommendScreen}
      />
      <Stack.Screen
        name="Sketch2ProductScreen"
        component={Sketch2ProductScreen}
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