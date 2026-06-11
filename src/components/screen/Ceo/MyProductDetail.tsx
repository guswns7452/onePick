// MyProductDetail.tsx
// (기업) 사장이 올린 펀딩 모집 글 목록 화면 ???????
// ???

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


type Bidder = {
  applyId: number;
  nickname: string;
  price: number;
  quantity: number;
  createdAt: string;
};


export default function BidderList({ navigation }: any) {

  const route = useRoute<BidderListRouteProp>();

  const { productId, title } = route.params;

  const [bidders, setBidders] = useState<Bidder[]>([]);

  useEffect(() => {
    fetchBidders();
  }, []);

  const fetchBidders = async () => {

    // API 연결 전 임시 데이터
    const dummyData: Bidder[] = [
      {
        applyId: 1,
        nickname: '김철수',
        price: 120000,
        quantity: 3,
        createdAt: '2026-06-08',
      },
      {
        applyId: 2,
        nickname: '이영희',
        price: 95000,
        quantity: 2,
        createdAt: '2026-06-07',
      },
      {
        applyId: 3,
        nickname: '박민수',
        price: 150000,
        quantity: 5,
        createdAt: '2026-06-06',
      },
    ];

    setBidders(dummyData);
  };

  const acceptBid = (applyId: number) => {

    Alert.alert(
      '입찰 수락',
      '해당 입찰을 수락하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '수락',
          onPress: () => {
            console.log('수락:', applyId);
          },
        },
      ],
    );
  };

  const rejectBid = (applyId: number) => {

    Alert.alert(
      '입찰 거절',
      '해당 입찰을 거절하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '거절',
          style: 'destructive',
          onPress: () => {
            console.log('거절:', applyId);
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>

      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>입찰자 목록</Text>

        <Text style={styles.headerSub}>
          {title}
        </Text>
      </View>

      {/* 리스트 */}
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >

        {bidders.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.emptyEmoji}>📭</Text>
            <Text style={styles.emptyText}>
              아직 입찰자가 없어요
            </Text>
          </View>
        ) : (
          bidders.map((bidder) => (
            <View
              key={bidder.applyId}
              style={styles.card}
            >

              {/* 프로필 */}
              <View style={styles.profileBox}>
                <Text style={styles.profileEmoji}>
                  👤
                </Text>
              </View>

              {/* 내용 */}
              <View style={styles.content}>

                <View style={styles.topRow}>
                  <Text style={styles.nickname}>
                    {bidder.nickname}
                  </Text>

                  <Text style={styles.date}>
                    {bidder.createdAt}
                  </Text>
                </View>

                <Text style={styles.price}>
                  {bidder.price.toLocaleString()}원
                </Text>

                <Text style={styles.quantity}>
                  수량 {bidder.quantity}개
                </Text>

                {/* 버튼 */}
                <View style={styles.buttonRow}>

                  <TouchableOpacity
                    style={[
                      styles.button,
                      { backgroundColor: '#10b981' },
                    ]}
                    onPress={() => acceptBid(bidder.applyId)}
                  >
                    <Text style={styles.buttonText}>
                      입찰 수락
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.button,
                      { backgroundColor: '#ef4444' },
                    ]}
                    onPress={() => rejectBid(bidder.applyId)}
                  >
                    <Text style={styles.buttonText}>
                      입찰 거절
                    </Text>
                  </TouchableOpacity>

                </View>

              </View>

            </View>
          ))
        )}

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
  },

  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },

  backIcon: {
    fontSize: 22,
    color: '#1a1a2e',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },

  headerSub: {
    marginTop: 4,
    fontSize: 13,
    color: '#888',
  },

  list: {
    flex: 1,
  },

  listContent: {
    padding: 16,
    gap: 12,
    paddingBottom: 40,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    gap: 14,

    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8,

    elevation: 2,
  },

  profileBox: {
    width: 52,
    height: 52,
    borderRadius: 14,

    backgroundColor: '#f5f6fa',

    justifyContent: 'center',
    alignItems: 'center',
  },

  profileEmoji: {
    fontSize: 26,
  },

  content: {
    flex: 1,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nickname: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a2e',
  },

  date: {
    fontSize: 12,
    color: '#aaa',
  },

  price: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4f46e5',
  },

  quantity: {
    marginTop: 4,
    fontSize: 13,
    color: '#666',
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 14,
  },

  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },

  emptyBox: {
    alignItems: 'center',
    paddingVertical: 80,
  },

  emptyEmoji: {
    fontSize: 42,
  },

  emptyText: {
    marginTop: 12,
    color: '#999',
    fontSize: 15,
  },
});