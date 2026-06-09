// MyProductList.tsx
// (기업) 사장이 올린 펀딩 모집 글 목록 화면
// 카드 클릭 시 ProductFundingDetail로 이동 ???(개발필요)

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';

import { getMyProducts } from '../../../api/Product/getMyProducts';
import { patchFunding } from '../../../api/Product/patchFunding';
import { deleteProduct } from '../../../api/Product/deleteProduct';

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


// ── 타입 정의 ──────────────────────────────────────────────
type BidStatus = 'PENDING' | 'FINISHED' | 'CANCELED';

interface Bid {
  productId: number;
  title: string;
  price: number;
  minPeople: number;
  status: BidStatus;
  category: string;
}


  
// ── 탭 설정 ────────────────────────────────────────────────
const TABS: { key: BidStatus; label: string; color: string }[] = [
  { key: 'PENDING',    label: '진행중', color: '#4f46e5' },
  { key: 'FINISHED', label: '종료',   color: '#10b981' },
  { key: 'CANCELED', label: '취소',   color: '#ef4444' },
];






// ── 남은 시간 계산 ─────────────────────────────────────────
function getRemainingTime(endDate: string): string {
  const now  = new Date();
  const end  = new Date(endDate);
  const diff = end.getTime() - now.getTime();

  if (diff <= 0) return '마감';

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0)  return `${days}일 ${hours}시간 남음`;
  if (hours > 0) return `${hours}시간 ${minutes}분 남음`;
  return `${minutes}분 남음`;
}


// ── 상태 뱃지 ──────────────────────────────────────────────
function StatusBadge({ status }: { status: BidStatus }) {
  const config = {
    PENDING:    { label: '진행중', bg: '#eef2ff', color: '#4f46e5' },
    FINISHED: { label: '종료',   bg: '#d1fae5', color: '#065f46' },
    CANCELED: { label: '취소',   bg: '#fee2e2', color: '#991b1b' },
  }[status];

  return (
    <View style={styles.badgeView}>
      <View style={[styles.badge, { backgroundColor: config.bg }]}>
        <Text style={[styles.badgeText, { color: config.color }]}>{config.label}</Text>
      </View>
    </View>
    );
}



// ── 입찰 카드 ──────────────────────────────────────────────
function BidCard({ bid }: { bid: Bid }) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  /*const remaining  = getRemainingTime(bid.endDate);*/
  const isPending   = bid.status === 'PENDING';
  /*const isUrgent   = isActive && remaining.includes('시간') && !remaining.includes('일');*/



  const finishMyProduct = async (productId: number) => {

    Alert.alert(
      '조기 종료',
      '정말 펀딩을 종료하시겠습니까?',
      [
        {
          text: '아니오',
          style: 'cancel',
        },
        {
          text: '종료하기',
          style: 'destructive',

          onPress: async () => {
            try {
                
              const result = await patchFunding(productId);
              console.log(result);

              Alert.alert(
                '종료 완료',
                '펀딩이 종료되었습니다.',
              );

              navigation.goBack();

            } catch (error) {
                
              if (axios.isAxiosError(error)) {
                console.log(error);

                Alert.alert(
                  '에러 발생',
                  JSON.stringify(error.response?.data,) || error.message,);

              } else {
                  
                Alert.alert(
                  '에러 발생',
                  '알 수 없는 오류',
                );
              }
            }
          },
        },
      ],
    );
  };


  const deleteMyProduct = async (productId: number) => {

    Alert.alert(
      '펀딩 취소',
      '정말 펀딩을 취소하시겠습니까?',
      [
        {
          text: '아니오',
          style: 'cancel',
        },
        {
          text: '취소하기',
          style: 'destructive',

          onPress: async () => {
            try {
                
              const result = await deleteProduct(productId);
              console.log(result);

              Alert.alert(
                '취소 완료',
                '펀딩이 취소되었습니다.',
              );

              navigation.goBack();

            } catch (error) {
                
              if (axios.isAxiosError(error)) {
                console.log(error);

                Alert.alert(
                  '에러 발생',
                  JSON.stringify(error.response?.data,) || error.message,);

              } else {
                  
                Alert.alert(
                  '에러 발생',
                  '알 수 없는 오류',
                );
              }
            }
          },
        },
      ],
    );
  };


  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      /*onPress={() =>
        navigation.navigate('', {
          productId: bid.productId
        })
      }*/
    >
      {/* 왼쪽 이모지 */}
      <View style={styles.cardEmoji}>
        <Text style={styles.emojiText}>{/* EMOJI */}</Text>
      </View>

      {/* 중앙 정보 */}
      <View style={styles.cardContent}>
        <View style={styles.cardTopRow}>
          <Text style={styles.productName} numberOfLines={1}>{bid.title}</Text>
        </View>

        <Text style={styles.bidAmount}>{bid.price.toLocaleString()}원</Text>
        
        { isPending ?
        (
        <View style={styles.btnView}>
        <TouchableOpacity
          style={[styles.btn, styles.finishBtn]}
          onPress={() => finishMyProduct(bid.productId)}
        >
          <Text style={styles.btnText}>
            조기 종료
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, styles.cancelBtn]}
          onPress={() => deleteMyProduct(bid.productId)}
        >
          <Text style={styles.btnText}>
            참여 취소
          </Text>
        </TouchableOpacity>
        </View>
        
        ) : (
          
          <StatusBadge status={bid.status} />
        )
      }





        {/*
        <View style={styles.cardBottomRow}>
          <Text style={styles.dateText}>📅 {bid.date}</Text>
          {isActive && (
            <Text style={[styles.remainText, isUrgent && styles.remainUrgent]}>
              ⏱ {remaining}
            </Text>
          )}
          {!isActive && (
            <Text style={styles.endDateText}>
              마감 {bid.endDate.slice(0, 10)}
            </Text>
          )}
        </View>
        */}
      </View>
    </TouchableOpacity>
  );
}

// ── 메인 화면 ──────────────────────────────────────────────
export default function MyProductList({ navigation }: Props) {

    const [myProducts, setMyProducts] = useState<any[]>([]);
    
    useEffect(() => {
        fetchMyProductList();
    }, []);
    
    const fetchMyProductList = async () => {
        try {
            const data = await getMyProducts();
            console.log(JSON.stringify(data, null, 2));
            
            if (Array.isArray(data)) {
                setMyProducts(data);
            } else if (Array.isArray(data.data)) {
                setMyProducts(data.data);
            } else {
                setMyProducts([]);
            }
        } catch (error) {
            console.log(error);
        }
    };

  
  const [activeTab, setActiveTab]   = useState<BidStatus>('PENDING');
  const [refreshing, setRefreshing] = useState(false);

  const filtered = myProducts.filter( (myProduct) => myProduct.status === activeTab,);

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const counts = {
    PENDING: myProducts.filter( (mp) => mp.status === 'PENDING' ).length,
    FINISHED: myProducts.filter( (mp) => mp.status === 'FINISHED' ).length,
    CANCELED: myProducts.filter( (mp) => mp.status === 'CANCELED' ).length,
  };


  return (
    <View style={styles.container}>

      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>입찰 내역</Text>
        <Text style={styles.headerSub}>
          총 {myProducts.filter((myProduct) => myProduct.status !== 'WRITING').length}건의 입찰
          </Text>
      </View>

      {/* 탭 */}
      <View style={styles.tabRow}>
        {TABS.map(tab => {
          const isSelected = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tab, isSelected && { borderBottomColor: tab.color, borderBottomWidth: 2.5 }]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text style={[styles.tabText, isSelected && { color: tab.color, fontWeight: '700' }]}>
                {tab.label}
              </Text>
              <View style={[styles.tabCount, isSelected && { backgroundColor: tab.color }]}>
                <Text style={[styles.tabCountText, isSelected && { color: '#fff' }]}>
                  {counts[tab.key]}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* 리스트 */}
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {filtered.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyEmoji}>
              {activeTab === 'PENDING' ? '🔍' : activeTab === 'FINISHED' ? '✅' : '❌'}
            </Text>
            <Text style={styles.emptyText}>
              {activeTab === 'PENDING'    ? '진행 중인 내 입찰이 없어요'  :
               activeTab === 'FINISHED' ? '종료된 내 입찰이 없어요'     :
                                          '취소된 내 입찰이 없어요'}
            </Text>
          </View>
        ) : (
          filtered.map(product => <BidCard key={product.productId} bid={product} />)
        )}
      </ScrollView>

    </View>
  );
}

// ── 스타일 ─────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa' },
  header: {
    paddingHorizontal: 20, paddingTop: 16, paddingBottom: 12,
    backgroundColor: '#fff',
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 22,
    color: '#1a1a2e',
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#1a1a2e', marginBottom: 2 },
  headerSub:   { fontSize: 13, color: '#888' },
  tabRow: {
    flexDirection: 'row', backgroundColor: '#fff',
    borderBottomWidth: 1, borderBottomColor: '#f0f0f0',
  },
  tab: {
    flex: 1, flexDirection: 'row', alignItems: 'center',
    justifyContent: 'center', paddingVertical: 14, gap: 6,
    borderBottomWidth: 2.5, borderBottomColor: 'transparent',
  },
  tabText:      { fontSize: 14, color: '#aaa', fontWeight: '500' },
  tabCount:     { backgroundColor: '#f0f0f0', borderRadius: 10, paddingHorizontal: 7, paddingVertical: 2 },
  tabCountText: { fontSize: 11, color: '#888', fontWeight: '700' },
  list:         { flex: 1 },
  listContent:  { padding: 16, gap: 12, paddingBottom: 40 },
  card: {
    flexDirection: 'row', backgroundColor: '#fff',
    borderRadius: 16, padding: 16,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8, elevation: 2, gap: 14,
  },
  cardEmoji: {
    width: 52, height: 52, borderRadius: 14,
    backgroundColor: '#f5f6fa', alignItems: 'center', justifyContent: 'center',
  },
  emojiText:    { fontSize: 26 },
  cardContent:  { flex: 1, gap: 4 },
  cardTopRow:   { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productName:  { fontSize: 14, fontWeight: '700', color: '#1a1a2e', flex: 1, marginRight: 8 },
  bidAmount:    { fontSize: 18, fontWeight: 'bold', color: '#4f46e5' },
  cardBottomRow:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 },
  dateText:     { fontSize: 12, color: '#aaa' },
  remainText:   { fontSize: 12, color: '#4f46e5', fontWeight: '600' },
  remainUrgent: { color: '#ef4444' },
  endDateText:  { fontSize: 12, color: '#aaa' },
  badgeView: { width: 40, alignSelf: 'flex-end' },
  badge:        { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  badgeText:    { fontSize: 11, fontWeight: '700' },
  emptyBox:     { alignItems: 'center', paddingVertical: 60, gap: 12 },
  emptyEmoji:   { fontSize: 40 },
  emptyText:    { fontSize: 15, color: '#aaa' },
  btnView: {
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: '70%',
    justifyContent: 'space-around'
  },
  btn: {
    marginTop: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    //borderWidth: 2,
    },
  finishBtn: {
    //borderColor: '#10b981',
    //backgroundColor: '#A7F09F',
    backgroundColor: '#10b981',
  },
  cancelBtn: {
    //borderColor: '#ef4444',
    //backgroundColor: '#FFCFCF',
    backgroundColor: '#ef4444',
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
    },
});
