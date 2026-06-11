import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { brand } from '../../public/style/colors';

type Props = {
  symbolSize?: number;
};

export default function OnePickLogo({ symbolSize = 112 }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/brand/logo-symbol.png')}
        style={[styles.symbol, { width: symbolSize, height: symbolSize }]}
        resizeMode="contain"
      />
      <Text style={styles.wordmark}>onepick</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  symbol: {
    marginBottom: 12,
  },
  wordmark: {
    fontSize: 42,
    fontWeight: '800',
    letterSpacing: -1.5,
    color: brand.ibkDeepBlue,
    textTransform: 'lowercase',
  },
});
