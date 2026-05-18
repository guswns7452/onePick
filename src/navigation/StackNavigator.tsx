import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyPage from '../components/main/MyPage'
import NewPost from '../components/board/NewPost'
import PostBoard from '../components/board/PostBoard'
import PostDetail from '../components/board/PostDetail'
import Payment from '../components/payment/Payment'

export type RootStackParamList = {
  MyPage: undefined;
  NewPost: undefined;
  PostBoard: undefined;
  PostDetail: undefined;
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
        name="PostBoard"
        component={PostBoard}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
      />

    </Stack.Navigator>
  );
}