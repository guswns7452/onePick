import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import MainIcon from '../../../common/MainIcon';
import SafeScreen from '../../../common/SafeScreen';
import { brand } from '../../../../public/style/colors';
import { CeoMainProps, useCeoMain } from './useCeoMain';
import { styles } from './MainStyle_v1';

export default function Main_v1({ navigation, route }: CeoMainProps) {
  const { member, goNewProduct, goMyProducts, goMyFundingList, goProposalFunding, goMyPage } = useCeoMain({
    navigation,
    route,
  });

  return (
    <SafeScreen style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.topAccent} />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>안녕하세요</Text>
            <Text style={styles.userName}>{member.nickname}님</Text>
          </View>
          <TouchableOpacity style={styles.profileButton} onPress={goMyPage}>
            <Text style={styles.profileInitial}>{member.nickname.charAt(0)}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.slogan}>
          함께 사면, 더 좋은 선택{'\n'}공동구매를 모집하고 판매를 시작해 보세요.
        </Text>

        <TouchableOpacity style={[styles.mainCard, styles.mainCardPrimary]} onPress={goNewProduct}>
          <View style={styles.mainCardIconWrap}>
            <MainIcon name="newProduct" size={32} color={brand.white} />
          </View>
          <Text style={[styles.mainCardTitle, styles.mainCardTitleLight]}>펀딩 모집하기</Text>
          <Text style={[styles.mainCardDesc, styles.mainCardDescLight]}>
            새로운 펀딩 상품을 등록하고{'\n'}구매자를 모집해 보세요.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.mainCard, styles.mainCardSecondary]} onPress={goMyFundingList}>
          <View style={styles.mainCardIconWrap}>
            <MainIcon name="proposalFunding" size={32} />
          </View>
          <Text style={[styles.mainCardTitle, styles.mainCardTitleDark]}>주문 제작 입찰</Text>
          <Text style={[styles.mainCardDesc, styles.mainCardDescDark]}>
            구매자의 주문제작 요청에{'\n'}입찰해 보세요.
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>내 활동</Text>

        <TouchableOpacity style={styles.linkRow} onPress={goMyProducts}>
          <Text style={styles.linkText}>모집한 공구</Text>
          <Text style={styles.linkArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkRow} onPress={goProposalFunding}>
          <Text style={styles.linkText}>주문제작 입찰</Text>
          <Text style={styles.linkArrow}>›</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeScreen>
  );
}
