// components/BidCard.tsx

import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { bid } from '../../interface/bid';




type Props = {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    createdAt: any;
    deadlineDays: number;
    price: number;
    thumbnail: any;
    buttonView: () => void;
    onPressNav: () => void;
};


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


export default function BidCard({
    id,
    title,
    subtitle,
    category,
    createdAt,
    deadlineDays,
    price,
    thumbnail,
    buttonView,
    onPressNav,
}: Props) {
    
    const remaining  = getRemainingDays(
        createdAt,
        deadlineDays,
    );


    return (

        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={onPressNav}
        >

        {/* 왼쪽 이모지 */}
        <View style={styles.cardEmoji}>
            {thumbnail !== null ?
            <Image
                source={{ uri: thumbnail.imageUrl }}
                style={styles.cardImage}
            /> :
            <Text style={styles.emojiText}>❌</Text>}
        </View>

        {/* 중앙 정보 */}
        <View style={styles.cardContent}>
            <View style={styles.cardTopRow}>
                <View style={styles.cardTopRowText}>
                    <Text style={styles.listTitle} numberOfLines={1}>{title}</Text>
                    <Text style={styles.remainText}> |  {category}</Text>
                </View>
            {/*<StatusBadge status={bid.productStatus} />*/}
        </View>
        <Text style={styles.bidAmount}>{price.toLocaleString()}원</Text>

        <View style={styles.cardBottomRow}>
          <Text style={styles.dateText}>📅 {remaining}일 남음</Text>
        </View>
        
      </View>
    </TouchableOpacity>
  );
}



// ── 스타일 ─────────────────────────────────────────────────
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', backgroundColor: '#fff',
    borderRadius: 16, padding: 16,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 8,
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
    cardTopRow:   {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardTopRowText: {
        flexDirection: 'row',
    },
    listTitle:  { fontSize: 16, fontWeight: '700', color: '#1a1a2e', flex: 1, marginRight: 8 },
  bidAmount:    { fontSize: 18, fontWeight: 'bold', color: '#4f46e5' },
    cardBottomRow:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5,
    },
  dateText:     { marginRight: 10, fontSize: 12, color: '#737684' },
  categoryText: { fontWeight: '600', fontSize: 13, },
  remainText:   { fontSize: 12, color: 'gray', fontWeight: '600' },
  remainUrgent: { color: '#ef4444' },
  endDateText:  { fontSize: 12, color: '#aaa' },
});