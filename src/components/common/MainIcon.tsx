import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { brand } from '../../public/style/colors';

export type MainIconName =
  | 'funding'
  | 'proposal'
  | 'list'
  | 'newProduct'
  | 'myProducts'
  | 'proposalFunding';

const ICON_MAP = {
  funding: 'cart-outline',
  proposal: 'pencil-outline',
  list: 'clipboard-list-outline',
  newProduct: 'plus-box-outline',
  myProducts: 'package-variant-closed',
  proposalFunding: 'handshake-outline',
} as const satisfies Record<MainIconName, string>;

type Props = {
  name: MainIconName;
  size?: number;
  color?: string;
};

export default function MainIcon({ name, size = 28, color = brand.ibkBlue }: Props) {
  return <MaterialCommunityIcons name={ICON_MAP[name]} size={size} color={color} />;
}
