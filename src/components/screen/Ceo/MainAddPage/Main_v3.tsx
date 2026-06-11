import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainIcon from '../../../common/MainIcon';
import SafeScreen from '../../../common/SafeScreen';
import { CeoMainProps, useCeoMain } from './useCeoMain';
import { styles } from './MainStyle_v3';

export default function Main_v3({ navigation, route }: CeoMainProps) {
  const { member, goNewProduct, goMyProducts, goProposalFunding, goMyPage } = useCeoMain({
    navigation,
    route,
  });
  const insets = useSafeAreaInsets();

  return (
    <SafeScreen style={styles.container} edges={['left', 'right', 'bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#EEF3F9" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
      >
        <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
          <View style={styles.topRow}>
            <Text style={styles.logoText}>onepick</Text>
            <TouchableOpacity style={styles.profileButton} onPress={goMyPage}>
              <Text style={styles.profileText}>{member.nickname}님</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.welcome}>함께 사면,{'\n'}더 좋은 선택</Text>
          <Text style={styles.welcomeSub}>공동구매 모집과 판매를 한곳에서</Text>
        </View>

        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridItem} onPress={goNewProduct}>
            <View style={styles.gridIconWrap}>
              <MainIcon name="newProduct" size={30} />
            </View>
            <Text style={styles.gridTitle}>공동구매 모집</Text>
            <Text style={styles.gridDesc}>새 상품 등록</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={goMyProducts}>
            <View style={styles.gridIconWrap}>
              <MainIcon name="myProducts" size={30} />
            </View>
            <Text style={styles.gridTitle}>모집 상품</Text>
            <Text style={styles.gridDesc}>등록 현황 보기</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, styles.gridItemWide]} onPress={goProposalFunding}>
            <View style={styles.gridIconWrap}>
              <MainIcon name="proposalFunding" size={30} />
            </View>
            <Text style={styles.gridTitle}>주문제작 입찰 관리</Text>
            <Text style={styles.gridDesc}>구매자 요청에 입찰하기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>내 활동 바로가기</Text>
          <TouchableOpacity style={styles.activityRow} onPress={goMyProducts}>
            <Text style={styles.activityLabel}>모집한 공구</Text>
            <Text style={styles.activityValue}>보러가기 ›</Text>
          </TouchableOpacity>
          <View style={styles.activityDivider} />
          <TouchableOpacity style={styles.activityRow} onPress={goProposalFunding}>
            <Text style={styles.activityLabel}>주문제작 입찰</Text>
            <Text style={styles.activityValue}>보러가기 ›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}
