import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainIcon from '../../../common/MainIcon';
import SafeScreen from '../../../common/SafeScreen';
import { IndividualMainProps, useIndividualMain } from './useIndividualMain';
import { styles } from './MainStyle_v3';

export default function Main_v3({ navigation, route }: IndividualMainProps) {
  const {
    member,
    goFundingList,
    goMyFundings,
    goNewProposal,
    goMyProposals,
    goMyPage,
  } = useIndividualMain({ navigation, route });
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
          <Text style={styles.welcomeSub}>펀딩 참여와 주문제작을 한곳에서</Text>
        </View>

        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridItem} onPress={goFundingList}>
            <View style={styles.gridIconWrap}>
              <MainIcon name="funding" size={30} />
            </View>
            <Text style={styles.gridTitle}>펀딩 참여</Text>
            <Text style={styles.gridDesc}>공동구매 둘러보기</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={goNewProposal}>
            <View style={styles.gridIconWrap}>
              <MainIcon name="proposal" size={30} />
            </View>
            <Text style={styles.gridTitle}>주문제작</Text>
            <Text style={styles.gridDesc}>상품 직접 요청</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, styles.gridItemWide]} onPress={goMyFundings}>
            <View style={styles.gridIconWrap}>
              <MainIcon name="list" size={30} />
            </View>
            <Text style={styles.gridTitle}>참여한 펀딩 보기</Text>
            <Text style={styles.gridDesc}>내가 참여 중인 공동구매 확인</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activityCard}>
          <Text style={styles.activityTitle}>내 활동 바로가기</Text>
          <TouchableOpacity style={styles.activityRow} onPress={goMyFundings}>
            <Text style={styles.activityLabel}>참여한 펀딩</Text>
            <Text style={styles.activityValue}>보러가기 ›</Text>
          </TouchableOpacity>
          <View style={styles.activityDivider} />
          <TouchableOpacity style={styles.activityRow} onPress={goMyProposals}>
            <Text style={styles.activityLabel}>요청한 주문제작</Text>
            <Text style={styles.activityValue}>보러가기 ›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}
