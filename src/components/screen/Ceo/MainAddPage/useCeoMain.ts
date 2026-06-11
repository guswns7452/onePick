import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Member } from '../../../interface/member';
import { RootStackParamList } from '../../../navigation/StackNavigator';

export type CeoMainNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type CeoMainRouteProp = RouteProp<
  RootStackParamList,
  'CeoMainV1' | 'CeoMainV2' | 'CeoMainV3'
>;

export type CeoMainProps = {
  navigation: CeoMainNavigationProp;
  route: CeoMainRouteProp;
};

export function useCeoMain({ navigation, route }: CeoMainProps) {
  const member = route.params.member;

  return {
    member,
    goNewProduct: () => navigation.navigate('NewProduct'),
    goMyProducts: () => navigation.navigate('MyProductList'),
    goMyFundingList: () => navigation.navigate('MyFundingList'),
    goProposalFunding: () => navigation.navigate('MyProposalFundingList'),
    goMyPage: () => navigation.navigate('MyPage', { member }),
  };
}
