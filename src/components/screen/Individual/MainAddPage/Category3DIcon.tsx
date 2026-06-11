import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
  source: ImageSourcePropType;
  size?: number;
};

export default function Category3DIcon({ source, size = 44 }: Props) {
  return (
    <Image
      source={source}
      style={[styles.image, { width: size, height: size }]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'transparent',
  },
});
