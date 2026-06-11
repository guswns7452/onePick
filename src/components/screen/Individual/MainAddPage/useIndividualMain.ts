import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Member } from '../../../interface/member';
import { RootStackParamList } from '../../../navigation/StackNavigator';

export type IndividualMainNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type IndividualMainRouteProp = RouteProp<
  RootStackParamList,
  'IndividualMainV1' | 'IndividualMainV2' | 'IndividualMainV3' | 'IndividualMainV4' | 'IndividualMainV5'
>;

export type IndividualMainProps = {
  navigation: IndividualMainNavigationProp;
  route: IndividualMainRouteProp;
};

export function useIndividualMain({ navigation, route }: IndividualMainProps) {
  const member = route.params.member;

  return {
    member,
    goFundingList: () => navigation.navigate('ProductFundingList', {}),
    goFundingListByCategory: (category: string, categoryLabel: string) =>
      navigation.navigate('ProductFundingList', { category, categoryLabel }),
    goProductDetail: (productId: number) =>
      navigation.navigate('ProductFundingDetail', { productId }),
    goMyFundings: () => navigation.navigate('MyFundingList'),
    goNewProposal: () => navigation.navigate('NewProposal'),
    goMyProposals: () => navigation.navigate('MyProposalList'),
    goMyPage: () => navigation.navigate('MyPage', { member }),
    goRecommend: () => navigation.navigate('RecommendScreen'),
  };
}
