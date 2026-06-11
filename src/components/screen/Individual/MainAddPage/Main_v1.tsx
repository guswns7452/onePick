import { useEffect, useState } from 'react';
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { getProducts } from '../../../../api/Product/getProducts';
import MainIcon from '../../../common/MainIcon';
import SafeScreen from '../../../common/SafeScreen';
import { brand } from '../../../../public/style/colors';
import { IndividualMainProps, useIndividualMain } from './useIndividualMain';
import { styles } from './MainStyle_v1';

type UrgentProduct = {
  productId: number;
  title: string;
  price: number;
  remainingDeadlineDays: number;
  status: string;
};

function parseProducts(data: unknown): UrgentProduct[] {
  if (Array.isArray(data)) {
    return data;
  }
  if (data && typeof data === 'object' && Array.isArray((data as { data?: unknown }).data)) {
    return (data as { data: UrgentProduct[] }).data;
  }
  return [];
}

function formatRemainingDays(days: number) {
  if (days <= 0) {
    return '오늘 마감';
  }
  if (days === 1) {
    return '1일 남음';
  }
  return `${days}일 남음`;
}

export default function Main_v1({ navigation, route }: IndividualMainProps) {
  const {
    member,
    goFundingList,
    goNewProposal,
    goMyProposals,
    goMyFundings,
    goMyPage,
    goProductDetail,
  } = useIndividualMain({ navigation, route });
  const [urgentProducts, setUrgentProducts] = useState<UrgentProduct[]>([]);

  useEffect(() => {
    const fetchUrgentProducts = async () => {
      try {
        const data = await getProducts();
        const urgent = parseProducts(data)
          .filter(
            product =>
              product.status === 'PENDING' &&
              typeof product.remainingDeadlineDays === 'number' &&
              product.remainingDeadlineDays >= 0 &&
              product.remainingDeadlineDays <= 2,
          )
          .sort((a, b) => a.remainingDeadlineDays - b.remainingDeadlineDays)
          .slice(0, 3);

        setUrgentProducts(urgent);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUrgentProducts();
  }, []);

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

        <Text style={styles.slogan}>함께 사면, 더 좋은 선택{'\n'}원하는 상품을 찾거나 직접 요청해 보세요.</Text>

        <TouchableOpacity style={[styles.mainCard, styles.mainCardPrimary]} onPress={goFundingList}>
          <View style={styles.mainCardIconWrap}>
            <MainIcon name="funding" size={32} color={brand.white} />
          </View>
          <Text style={[styles.mainCardTitle, styles.mainCardTitleLight]}>펀딩 참여하기</Text>
          <Text style={[styles.mainCardDesc, styles.mainCardDescLight]}>
            진행 중인 공동구매에 참여하고{'\n'}더 저렴하게 구매해 보세요.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.mainCard, styles.mainCardSecondary]} onPress={goNewProposal}>
          <View style={styles.mainCardIconWrap}>
            <MainIcon name="proposal" size={32} />
          </View>
          <Text style={[styles.mainCardTitle, styles.mainCardTitleDark]}>주문제작 요청</Text>
          <Text style={[styles.mainCardDesc, styles.mainCardDescDark]}>
            원하는 상품을 직접 요청하고{'\n'}판매자의 입찰을 받아보세요.
          </Text>
        </TouchableOpacity>

        <View style={styles.urgentSection}>
          <View style={styles.urgentHeaderRow}>
            <Text style={styles.sectionTitle}>마감 임박 펀딩</Text>
            <TouchableOpacity onPress={goFundingList}>
              <Text style={styles.urgentMore}>전체보기</Text>
            </TouchableOpacity>
          </View>

          {urgentProducts.length === 0 ? (
            <Text style={styles.urgentEmpty}>2일 이내 마감 펀딩이 없어요.</Text>
          ) : (
            urgentProducts.map(product => (
              <TouchableOpacity
                key={product.productId}
                style={styles.urgentCard}
                onPress={() => goProductDetail(product.productId)}
                activeOpacity={0.85}
              >
                <View style={styles.urgentCardTop}>
                  <Text style={styles.urgentTitle} numberOfLines={1}>
                    {product.title}
                  </Text>
                  <View style={styles.urgentBadge}>
                    <Text style={styles.urgentBadgeText}>
                      {formatRemainingDays(product.remainingDeadlineDays)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.urgentMeta}>{product.price.toLocaleString()}원</Text>
              </TouchableOpacity>
            ))
          )}
        </View>

        <Text style={[styles.sectionTitle, styles.activitySectionTitle]}>내 활동</Text>

        <TouchableOpacity style={styles.linkRow} onPress={goMyFundings}>
          <Text style={styles.linkText}>참여한 펀딩</Text>
          <Text style={styles.linkArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkRow} onPress={goMyProposals}>
          <Text style={styles.linkText}>내가 요청한 주문제작</Text>
          <Text style={styles.linkArrow}>›</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeScreen>
  );
}
