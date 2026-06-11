import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainIcon from '../../../common/MainIcon';
import { IndividualMainProps, useIndividualMain } from './useIndividualMain';
import { styles } from './MainStyle_v2';

export default function Main_v2({ navigation, route }: IndividualMainProps) {
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
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#002266" />

      <View style={[styles.hero, { paddingTop: insets.top + 12 }]}>
        <TouchableOpacity
          style={[styles.profileButton, { top: insets.top + 12 }]}
          onPress={goMyPage}
        >
          <Text style={styles.profileInitial}>{member.nickname.charAt(0)}</Text>
        </TouchableOpacity>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>개인회원</Text>
        </View>
        <Text style={styles.userName}>{member.nickname}님,{'\n'}무엇을 도와드릴까요?</Text>
        <Text style={styles.heroSub}>함께 사면, 더 좋은 선택</Text>
      </View>

      <ScrollView
        style={styles.body}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.actionCard} onPress={goFundingList}>
          <View style={styles.actionIcon}>
            <MainIcon name="funding" size={26} />
          </View>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>펀딩 참여</Text>
            <Text style={styles.actionDesc}>진행 중인 공동구매 둘러보기</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} onPress={goNewProposal}>
          <View style={styles.actionIcon}>
            <MainIcon name="proposal" size={26} />
          </View>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>주문제작 요청</Text>
            <Text style={styles.actionDesc}>원하는 상품을 직접 요청하기</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.quickLink} onPress={goMyFundings}>
            <Text style={styles.quickLinkText}>참여한 펀딩</Text>
            <Text style={styles.quickLinkArrow}>›</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.quickLink} onPress={goMyProposals}>
            <Text style={styles.quickLinkText}>내가 요청한 주문제작</Text>
            <Text style={styles.quickLinkArrow}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
