import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { RouteProp } from '@react-navigation/native';

import { styles } from './IndMyPageStyle';


type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type IndMyPageRouteProp =
    RouteProp<
        RootStackParamList,
        'IndMyPage'
    >;

type Props = {
  navigation: HomeScreenNavigationProp;
    route: IndMyPageRouteProp;
};


export default function IndMypage({ navigation, route }: Props) {

    // 유저 정보
    const user = route.params;

    return (

        <View style={styles.container}>

            <ScrollView
                contentContainerStyle={styles.scroll}
                showsVerticalScrollIndicator={false}
            >

                {/* HEADER */}
                <View style={styles.header}>

                    <Text style={styles.headerTitle}>
                        👤 마이페이지
                    </Text>

                    <Text style={styles.headerSub}>
                        내 정보를 확인해 보세요
                    </Text>

                </View>

                {/* USER CARD */}
                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>
                        📌 회원 정보
                    </Text>

                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>
                            닉네임
                        </Text>

                        <Text style={styles.infoValue}>
                            {user.member.nickname}
                        </Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.infoRow}>
                        {/*
                        <Text style={styles.infoLabel}>
                            휴대폰번호
                        </Text>
                        */}

                        <Text style={styles.infoValue}>
                            {user.member.type === 'CEO' ? '기업회원' : '개인회원'}
                        </Text>
                    </View>

                </View>

                {/* MENU CARD */}
                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>
                        ⚙️ 메뉴
                    </Text>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() =>
                            navigation.navigate(
                                'NewProposal'
                            )
                        }
                    >
                        <Text style={styles.menuText}>
                            📩 새로 구매 요청 글 쓰기
                        </Text>
                        <Text style={styles.arrow}>
                            ›
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() =>
                            navigation.navigate(
                                'ProductFundingList'
                            )
                        }
                    >
                        <Text style={styles.menuText}>
                            🛒 전체 펀딩 모집 글 보러 가기
                        </Text>
                        <Text style={styles.arrow}>
                            ›
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* MENU CARD */}
                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>
                        🙋🏻 내 활동
                    </Text>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() =>
                            navigation.navigate(
                                'MyFundingList'
                            )
                        }
                    >
                        <Text style={styles.menuText}>
                            📩 내가 참여한 펀딩 목록
                        </Text>
                        <Text style={styles.arrow}>
                            ›
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() =>
                            navigation.navigate(
                                'MyProposalList'
                            )
                        }
                    >
                        <Text style={styles.menuText}>
                            🛒 내가 쓴 공구 요청 목록
                        </Text>
                        <Text style={styles.arrow}>
                            ›
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        </View>
    );
}