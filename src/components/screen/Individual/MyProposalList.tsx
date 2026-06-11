// MyProposalList.tsx
// (개인) 회원이 쓴 구매 요청 글 목록 화면
// 카드 클릭 시 MyProposalFunding 이동

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';

import ListHeader from '../../../public/screen/ListHeader';
import BidCard from '../../../public/screen/BidCard';

import { getMyProposals } from '../../../api/Proposal/getMyProposals';
import { deleteProposal } from '../../../api/Proposal/deleteProposal';

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


// ── 타입 정의 ──────────────────────────────────────────────
type BidStatus = 'PENDING' | 'FINISHED' | 'CANCELED';

interface Bid {
  proposalId: number;
  title: string;
  content: string;
  proposalCategory: string;
  maxPrice: number;
  proposalStatus: BidStatus;
  writerNickname: string;
  createdAt: any;
  deadlineDays: number,
  fundingCount: number;
  thumbnail: any;
}

// ── 탭 설정 ────────────────────────────────────────────────
const TABS: { key: BidStatus; label: string; color: string }[] = [
  { key: 'PENDING',    label: '진행중', color: '#4f46e5' },
  { key: 'FINISHED', label: '종료',   color: '#10b981' },
  { key: 'CANCELED', label: '취소',   color: '#ef4444' },
];

// ── 남은 일수 계산 ─────────────────────────────────────────
function getRemainingDays(
    createdAt: string,
    deadlineDays: number,
    currentDate: Date = new Date(),
) {

    // 게시글 생성일
    const createdDate =
        new Date(createdAt);

    // 마감 날짜 계산
    const deadlineDate =
        new Date(createdDate);

    deadlineDate.setDate(
        deadlineDate.getDate()
        + deadlineDays
    );

    // 남은 시간(ms)
    const diff =
        deadlineDate.getTime()
        - currentDate.getTime();

    // 남은 일수 계산
    const remainingDays =
        Math.ceil(
            diff / (1000 * 60 * 60 * 24)
        );

    return remainingDays;
}

// ── 상태 뱃지 ──────────────────────────────────────────────
function StatusBadge({ status }: { status: BidStatus }) {
  const config = {
    PENDING:    { label: '진행중', bg: '#eef2ff', color: '#4f46e5' },
    FINISHED: { label: '종료',   bg: '#d1fae5', color: '#065f46' },
    CANCELED: { label: '취소',   bg: '#fee2e2', color: '#991b1b' },
  }[status];

  return (
    <View style={[styles.badge, { backgroundColor: config.bg }]}>
      <Text style={[styles.badgeText, { color: config.color }]}>{config.label}</Text>
    </View>
  );
}


// ── 입찰 카드 ──────────────────────────────────────────────
function Buttons() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const deleteMyProposal = async (proposalId: number) => {

    Alert.alert(
      '구매 요청 삭제',
      '정말 요청을 삭제하시겠습니까?',
      [
        {
          text: '아니오',
          style: 'cancel',
        },
        {
          text: '삭제하기',
          style: 'destructive',

          onPress: async () => {
            try {
                
              const result = await deleteProposal(proposalId);
              console.log(result);

              Alert.alert(
                '삭제 완료',
                '구매 요청이 삭제되었습니다.',
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
    <></>
  );
}

// ── 메인 화면 ──────────────────────────────────────────────
export default function MyProposalList({ navigation }: Props) {

    const [myProposals, setMyProposals] = useState<any[]>([]);
    
    useEffect(() => {
        fetchMyProposalList();
    }, []);
    
    const fetchMyProposalList = async () => {
        try {
            const data = await getMyProposals();
            console.log(JSON.stringify(data, null, 2));
            
            if (Array.isArray(data)) {
                setMyProposals(data);
            } else if (Array.isArray(data.data)) {
                setMyProposals(data.data);
            } else {
                setMyProposals([]);
            }

        } catch (error) {
            console.log(error);
        }
    };



  
  const [activeTab, setActiveTab]   = useState<BidStatus>('PENDING');
  const [refreshing, setRefreshing] = useState(false);

  const filtered = myProposals.filter( (myProposal) => myProposal.proposalStatus === activeTab,);

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const counts = {
    PENDING: myProposals.filter( (mp) => mp.proposalStatus === 'PENDING' ).length,
    FINISHED: myProposals.filter( (mp) => mp.proposalStatus === 'FINISHED' ).length,
    CANCELED: myProposals.filter( (mp) => mp.proposalStatus === 'CANCELED' ).length,
  };


  return (
    <View style={styles.container}>

      {/* 헤더 */}
      <ListHeader
        title='내가 요청한 공구 목록'
        count={myProposals.length}
        onPressBack={() => navigation.goBack()}
      />

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
              {activeTab === 'PENDING'    ? '진행 중인 참여한 입찰이 없어요'  :
               activeTab === 'FINISHED' ? '종료된 참여한 입찰이 없어요'     :
                                          '취소된 참여한 입찰이 없어요'}
            </Text>
          </View>
        ) : (
          filtered.map(myProposal =>
            <BidCard
              key={myProposal.proposalId}
              id={myProposal.proposalId}
              title={myProposal.title}
              subtitle={myProposal.content}
              category={myProposal.proposalCategory}
              createdAt={myProposal.createdAt}
              deadlineDays={myProposal.deadlineDays}
              price={myProposal.maxPrice}
              thumbnail={myProposal.thumbnail}
              buttonView={() => {}}
              onPressNav={() => {
                navigation.navigate('MyProposalDetail', {
                  proposalId: Number(myProposal.proposalId),
                })
              }}
            />
          )
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
    //shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8,
    elevation: 2, gap: 14,
  },
  cardEmoji: {
    width: 52, height: 52, borderRadius: 14,
    backgroundColor: '#f5f6fa', alignItems: 'center', justifyContent: 'center',
  },
  cardImage: {
    width: 52, height: 52, borderRadius: 14,
  },
  emojiText:    { fontSize: 18 },
  cardContent:  { flex: 1, gap: 4 },
  cardTopRow:   { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productName:  { fontSize: 14, fontWeight: '700', color: '#1a1a2e', flex: 1, marginRight: 8 },
  bidAmount:    { fontSize: 18, fontWeight: 'bold', color: '#4f46e5' },
  cardBottomRow:{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 2, },
  dateText:     { marginRight: 10, fontSize: 12, color: '#737684' },
  categoryText: { fontWeight: '600', fontSize: 13, },
  remainText:   { fontSize: 12, color: 'gray', fontWeight: '600' },
  remainUrgent: { color: '#ef4444' },
  endDateText:  { fontSize: 12, color: '#aaa' },
  badge:        { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  badgeText:    { fontSize: 11, fontWeight: '700' },
  emptyBox:     { alignItems: 'center', paddingVertical: 60, gap: 12 },
  emptyEmoji:   { fontSize: 40 },
  emptyText:    { fontSize: 15, color: '#aaa' },
  btn: {
    right: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
    alignSelf: 'flex-end',
    backgroundColor: '#ef4444'
    },
  btnText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    },
});
