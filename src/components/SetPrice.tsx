/**
 * App.tsx — onePick 메인 앱
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import GongguAIScreen from './ai/GongguAIScreen';

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/StackNavigator'

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};



export default function PostProduct({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <GongguAIScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
});