import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Login from '../components/screen/Member/Login'
import Login_v1 from '../components/screen/Member/LoginAddPage/Login_v1'
import Login_v2 from '../components/screen/Member/LoginAddPage/Login_v2'
import Login_v3 from '../components/screen/Member/LoginAddPage/Login_v3'
import MyPage from '../components/screen/Member/MyPage'

import Main_v1 from '../components/screen/Individual/MainAddPage/Main_v1'
import Main_v2 from '../components/screen/Individual/MainAddPage/Main_v2'
import Main_v3 from '../components/screen/Individual/MainAddPage/Main_v3'
import Main_v4 from '../components/screen/Individual/MainAddPage/Main_v4'
import Main_v5 from '../components/screen/Individual/MainAddPage/Main_v5'
import NewProposal from '../components/screen/Individual/NewProposal'
import ProductFundingList from '../components/screen/Individual/ProductFundingList'
import ProductFundingDetail from '../components/screen/Individual/ProductFundingDetail'
import MyFundingList from '../components/screen/Individual/MyFundingList'
import MyProposalList from '../components/screen/Individual/MyProposalList'
import MyProposalDetail from '../components/screen/Individual/MyProposalDetail'

import NewProduct from '../components/screen/Ceo/NewProduct'
import MyProductList from '../components/screen/Ceo/MyProductList'
import MyProposalFundingList from '../components/screen/Ceo/MyProposalFundingList'
import CeoMain_v1 from '../components/screen/Ceo/MainAddPage/Main_v1'
import CeoMain_v2 from '../components/screen/Ceo/MainAddPage/Main_v2'
import CeoMain_v3 from '../components/screen/Ceo/MainAddPage/Main_v3'

import Payment from '../components/screen/Payment'

import GongguAIScreen from '../components/screen/Ai/GongguAIScreen'
import OrderParserScreen from '../components/screen/Ai/OrderParserScreen'
import RecommendScreen from '../components/screen/Ai/RecommendScreen'
import Sketch2ProductScreen from '../components/screen/Ai/Sketch2ProductScreen'
import SplashScreen from '../components/screen/SplashScreen'

import { Member } from '../interface/member'


export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  LoginV1: undefined;
  LoginV2: undefined;
  LoginV3: undefined;
  MyPage: {
    member: Member;
  };

  IndividualMainV1: { member: Member };
  IndividualMainV2: { member: Member };
  IndividualMainV3: { member: Member };
  IndividualMainV4: { member: Member };
  IndividualMainV5: { member: Member };

  CeoMainV1: { member: Member };
  CeoMainV2: { member: Member };
  CeoMainV3: { member: Member };

  Payment: {
    productId: number;
    content: string;
    price: number;
  };

  NewProposal: undefined;
  ProductFundingList: {
    category?: string;
    categoryLabel?: string;
  };
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

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="LoginV1"
        component={Login_v1}
      />
      <Stack.Screen
        name="LoginV2"
        component={Login_v2}
      />
      <Stack.Screen
        name="LoginV3"
        component={Login_v3}
      />
      <Stack.Screen
        name="MyPage"
        component={MyPage}
      />
      <Stack.Screen
        name="IndividualMainV1"
        component={Main_v1}
      />
      <Stack.Screen
        name="IndividualMainV2"
        component={Main_v2}
      />
      <Stack.Screen
        name="IndividualMainV3"
        component={Main_v3}
      />
      <Stack.Screen
        name="IndividualMainV4"
        component={Main_v4}
      />
      <Stack.Screen
        name="IndividualMainV5"
        component={Main_v5}
      />

      <Stack.Screen
        name="CeoMainV1"
        component={CeoMain_v1}
      />
      <Stack.Screen
        name="CeoMainV2"
        component={CeoMain_v2}
      />
      <Stack.Screen
        name="CeoMainV3"
        component={CeoMain_v3}
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

    </Stack.Navigator>
  );
}