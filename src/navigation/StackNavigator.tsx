import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from '../components/main/Main'

import Login from '../components/screen/Member/Login'
import MyPage from '../components/screen/Member/MyPage'

import Payment from '../components/screen/Payment'


import NewProposal from '../components/screen/Individual/NewProposal'
import ProductFundingList from '../components/screen/Individual/ProductFundingList'
import ProductFundingDetail from '../components/screen/Individual/ProductFundingDetail'
import MyFundingList from '../components/screen/Individual/MyFundingList'
import MyProposalList from '../components/screen/Individual/MyProposalList'
import MyProposalDetail from '../components/screen/Individual/MyProposalDetail'

import NewProduct from '../components/screen/Ceo/NewProduct'
import MyProductList from '../components/screen/Ceo/MyProductList'
import MyProposalFundingList from '../components/screen/Ceo/MyProposalFundingList'


import GongguAIScreen from '../components/screen/Ai/GongguAIScreen'
import OrderParserScreen from '../components/screen/Ai/OrderParserScreen'
import RecommendScreen from '../components/screen/Ai/RecommendScreen'
import Sketch2ProductScreen from '../components/screen/Ai/Sketch2ProductScreen'


import SetPrice from '../components/SetPrice'
import IndMain from '../components/main/IndMain'
import CorMain from '../components/main/CorMain'

import ProductList from '../components/board/ProductList'
import MyList from '../components/funding/MyList'
import PostBoardDetail from '../components/board/PostBoardDetail'
import ProductDetail from '../components/board/ProductDetail'



import { Member } from '../interface/member'


export type RootStackParamList = {
  Main: undefined;



  Login: undefined;
  MyPage: {
    member: Member;
  };

  Payment: {
    productId: number;
    content: string;
    price: number;
  };


  
  NewProposal: undefined;
  ProductFundingList: undefined;
  ProductFundingDetail: {
    productId: number,
  };
  MyFundingList: undefined;
  MyProposalList: undefined;
  MyProposalDetail: {
    proposalId: number,
  };


  
  NewProduct: undefined;
  MyProductList: undefined;
  MyProposalFundingList: undefined;

  GongguAIScreen: undefined;
  OrderParserScreen: undefined;
  RecommendScreen: undefined;
  Sketch2ProductScreen: undefined;


  SetPrice: undefined;
  IndMain: undefined;
  CorMain: undefined;
  
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
        name="MyPage"
        component={MyPage}
      />


      <Stack.Screen
        name="Payment"
        component={Payment}
      />



      <Stack.Screen
        name="NewProposal"
        component={NewProposal}
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
        name="MyFundingList"
        component={MyFundingList}
      />
      <Stack.Screen
        name="MyProposalList"
        component={MyProposalList}
      />
      <Stack.Screen
        name="MyProposalDetail"
        component={MyProposalDetail}
      />


      <Stack.Screen
        name="NewProduct"
        component={NewProduct}
      />
      <Stack.Screen
        name="MyProductList"
        component={MyProductList}
      />
      <Stack.Screen
        name="MyProposalFundingList"
        component={MyProposalFundingList}
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

    </Stack.Navigator>
  );
}