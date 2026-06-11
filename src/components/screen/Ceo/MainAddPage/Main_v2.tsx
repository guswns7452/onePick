import React from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainIcon from '../../../common/MainIcon';
import { CeoMainProps, useCeoMain } from './useCeoMain';
import { styles } from './MainStyle_v2';

export default function Main_v2({ navigation, route }: CeoMainProps) {
  const { member, goNewProduct, goMyProducts, goProposalFunding, goMyPage } = useCeoMain({
    navigation,
    route,
  });
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
          <Text style={styles.badgeText}>기업회원</Text>
        </View>
        <Text style={styles.userName}>{member.nickname}님,{'\n'}무엇을 도와드릴까요?</Text>
        <Text style={styles.heroSub}>함께 사면, 더 좋은 선택</Text>
      </View>

      <ScrollView
        style={styles.body}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.actionCard} onPress={goNewProduct}>
          <View style={styles.actionIcon}>
            <MainIcon name="newProduct" size={26} />
          </View>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>공동구매 모집</Text>
            <Text style={styles.actionDesc}>새로운 공동구매 상품 등록하기</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard} onPress={goMyProducts}>
          <View style={styles.actionIcon}>
            <MainIcon name="myProducts" size={26} />
          </View>
          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>모집 상품 관리</Text>
            <Text style={styles.actionDesc}>등록한 공동구매 현황 보기</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.quickLinks}>
          <TouchableOpacity style={styles.quickLink} onPress={goMyProducts}>
            <Text style={styles.quickLinkText}>모집한 공구</Text>
            <Text style={styles.quickLinkArrow}>›</Text>
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.quickLink} onPress={goProposalFunding}>
            <Text style={styles.quickLinkText}>주문제작 입찰</Text>
            <Text style={styles.quickLinkArrow}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
