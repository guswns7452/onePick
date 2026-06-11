import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeScreen from '../../../common/SafeScreen';
import { FUNDING_CATEGORIES } from './fundingCategories';
import { IndividualMainProps, useIndividualMain } from './useIndividualMain';
import { styles } from './MainStyle_v4';

const BANNERS = [
  {
    title: '함께 사면,\n더 좋은 선택',
    sub: '공동구매로 더 저렴하게',
    badge: 'WELCOME',
    amount: 'onepick',
  },
  {
    title: '원하는 상품이\n없다면?',
    sub: '주문제작으로 직접 요청하세요',
    badge: 'REQUEST',
    amount: '주문제작',
  },
];

export default function Main_v4({ navigation, route }: IndividualMainProps) {
  const {
    member,
    goFundingList,
    goFundingListByCategory,
    goMyFundings,
    goNewProposal,
    goMyProposals,
    goMyPage,
  } = useIndividualMain({ navigation, route });
  const insets = useSafeAreaInsets();
  const [bannerIndex, setBannerIndex] = useState(0);
  const banner = BANNERS[bannerIndex];

  const handleCategoryPress = (item: (typeof FUNDING_CATEGORIES)[number]) => {
    if (item.type === 'action') {
      if (item.key === 'ALL') {
        goFundingList();
      } else {
        goNewProposal();
      }
      return;
    }

    goFundingListByCategory(item.key, item.label);
  };

  const handleBannerPress = () => {
    if (bannerIndex === 1) {
      goNewProposal();
      return;
    }
    goFundingList();
  };

  const cycleBanner = () => {
    setBannerIndex(prev => (prev + 1) % BANNERS.length);
  };

  return (
    <SafeScreen style={styles.container} edges={['left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 8 },
        ]}
      >
        <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
          <View style={styles.headerRow}>
            <Text style={styles.logoText}>onepick</Text>
          </View>
        </View>

        <View style={styles.categorySection}>
          <View style={styles.categoryGrid}>
            {FUNDING_CATEGORIES.map(item => (
              <TouchableOpacity
                key={item.key}
                style={styles.categoryItem}
                onPress={() => handleCategoryPress(item)}
                activeOpacity={0.75}
              >
                <View style={[styles.categoryIconWrap, { backgroundColor: item.bg }]}>
                  <MaterialCommunityIcons name={item.icon} size={28} color={item.iconColor} />
                </View>
                <Text style={styles.categoryLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.bannerSection}>
          <TouchableOpacity style={styles.banner} onPress={handleBannerPress} activeOpacity={0.92}>
            <View style={styles.bannerGradientLeft} />
            <View style={styles.bannerGradientRight} />
            <View style={styles.bannerContent}>
              <View style={styles.bannerTextWrap}>
                <Text style={styles.bannerTitle}>{banner.title}</Text>
                <Text style={styles.bannerSub}>{banner.sub}</Text>
              </View>
              <View style={styles.bannerBadge}>
                <Text style={styles.bannerBadgeText}>{banner.badge}</Text>
                <Text style={styles.bannerBadgeAmount}>{banner.amount}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bannerIndicator} onPress={cycleBanner}>
              <Text style={styles.bannerIndicatorText}>
                {bannerIndex + 1} | {BANNERS.length} ›
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View style={styles.promoRow}>
          <TouchableOpacity
            style={[styles.promoCard, { backgroundColor: '#E0F2FE' }]}
            onPress={goMyFundings}
            activeOpacity={0.85}
          >
            <Text style={styles.promoTitle}>참여한{'\n'}펀딩</Text>
            <View style={styles.promoIconWrap}>
              <MaterialCommunityIcons name="clipboard-check-outline" size={24} color="#0284C7" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.promoCard, { backgroundColor: '#FCE7F3' }]}
            onPress={goFundingList}
            activeOpacity={0.85}
          >
            <Text style={styles.promoTitle}>진행중{'\n'}공구</Text>
            <View style={styles.promoIconWrap}>
              <Text style={{ fontSize: 13, fontWeight: '800', color: '#DB2777' }}>HOT</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.promoCard, { backgroundColor: '#FEF3C7' }]}
            onPress={goNewProposal}
            activeOpacity={0.85}
          >
            <Text style={styles.promoTitle}>주문제작{'\n'}요청</Text>
            <View style={styles.promoIconWrap}>
              <MaterialCommunityIcons name="gift-outline" size={24} color="#D97706" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>{member.nickname}님의 활동</Text>
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

      <View style={[styles.bottomNav, { paddingBottom: insets.bottom + 6 }]}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <MaterialCommunityIcons name="home" size={22} color="#0077C8" />
          <Text style={[styles.bottomNavLabel, styles.bottomNavLabelActive]}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={goFundingList}>
          <MaterialCommunityIcons name="cart-outline" size={22} color="#9CA3AF" />
          <Text style={styles.bottomNavLabel}>펀딩</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={goMyFundings}>
          <MaterialCommunityIcons name="heart-outline" size={22} color="#9CA3AF" />
          <Text style={styles.bottomNavLabel}>내 참여</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={goNewProposal}>
          <MaterialCommunityIcons name="pencil-outline" size={22} color="#9CA3AF" />
          <Text style={styles.bottomNavLabel}>주문제작</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={goMyPage}>
          <MaterialCommunityIcons name="account-outline" size={22} color="#9CA3AF" />
          <Text style={styles.bottomNavLabel}>마이</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}
