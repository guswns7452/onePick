import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyPage from '../components/main/MyPage'
import NewPost from '../components/board/NewPost'
import PostList from '../components/board/PostList'
import PostBoard from '../components/board/PostBoard'
import PostBoardDetail from '../components/board/PostBoardDetail'
import ProductDetail from '../components/board/ProductDetail'
import Payment from '../components/payment/Payment'

export type RootStackParamList = {
  MyPage: undefined;
  NewPost: undefined;
  PostList: undefined;
  PostBoard: undefined;
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
        name="NewPost"
        component={NewPost}
      />
      <Stack.Screen
        name="PostList"
        component={PostList}
      />
      <Stack.Screen
        name="PostBoard"
        component={PostBoard}
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