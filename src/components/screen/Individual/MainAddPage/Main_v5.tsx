import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeScreen from '../../../common/SafeScreen';
import Category3DIcon from './Category3DIcon';
import { CATEGORY_3D_ICONS, PROMO_3D_ICONS } from './category3dIcons';
import { FUNDING_CATEGORIES } from './fundingCategories';
import { IndividualMainProps, useIndividualMain } from './useIndividualMain';
import { styles } from './MainStyle_v5';

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

export default function Main_v5({ navigation, route }: IndividualMainProps) {
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
      <StatusBar barStyle="dark-content" backgroundColor="#F3F4F7" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 8 },
        ]}
      >
        <View style={[styles.header, { paddingTop: insets.top + 12 }]}>
          <View style={styles.headerRow}>
            <Text style={styles.logoText}>onepick</Text>
          </View>
          <Text style={styles.heroTitle}>어떤 펀딩을{'\n'}찾으세요?</Text>
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
                <View style={styles.categoryCard}>
                  <Category3DIcon source={CATEGORY_3D_ICONS[item.key]} size={48} />
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
          <TouchableOpacity style={styles.promoCard} onPress={goMyFundings} activeOpacity={0.85}>
            <Text style={styles.promoTitle}>참여한{'\n'}펀딩</Text>
            <Category3DIcon source={PROMO_3D_ICONS.funding} size={40} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.promoCard} onPress={goFundingList} activeOpacity={0.85}>
            <Text style={styles.promoTitle}>진행중{'\n'}공구</Text>
            <Category3DIcon source={PROMO_3D_ICONS.hot} size={40} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.promoCard} onPress={goNewProposal} activeOpacity={0.85}>
            <Text style={styles.promoTitle}>주문제작{'\n'}요청</Text>
            <Category3DIcon source={PROMO_3D_ICONS.proposal} size={40} />
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
          <Text style={[styles.bottomNavIcon, styles.bottomNavIconActive]}>⌂</Text>
          <Text style={[styles.bottomNavLabel, styles.bottomNavLabelActive]}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={goFundingList}>
          <Category3DIcon source={CATEGORY_3D_ICONS.ALL} size={20} />
          <Text style={styles.bottomNavLabel}>펀딩</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={goMyFundings}>
          <Text style={styles.bottomNavIcon}>♥</Text>
          <Text style={styles.bottomNavLabel}>내 참여</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={goNewProposal}>
          <Text style={styles.bottomNavIcon}>✎</Text>
          <Text style={styles.bottomNavLabel}>주문제작</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem} onPress={goMyPage}>
          <Text style={styles.bottomNavIcon}>☺</Text>
          <Text style={styles.bottomNavLabel}>마이</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}
