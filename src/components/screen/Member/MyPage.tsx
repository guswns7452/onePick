import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/StackNavigator';
import { RouteProp } from '@react-navigation/native';

import { styles } from './MyPageStyle';


type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type MyPageRouteProp =
    RouteProp<
        RootStackParamList,
        'MyPage'
    >;

type Props = {
  navigation: HomeScreenNavigationProp;
    route: MyPageRouteProp;
};


export default function Mypage({ navigation, route }: Props) {

    // 유저 정보
    const user = route.params;
    const isCEO = user.member.type === 'CEO';

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


{/* PROFILE CARD */}
<View style={styles.profileCard}>

    {/* 상단 */}
    <View style={styles.profileTop}>

        {/* 프로필 원 */}
        <View style={styles.profileCircle}>
            <Text style={styles.profileInitial}>
                {user.member.nickname.charAt(0)}
            </Text>
        </View>

        {/* 유저 정보 */}
        <View style={styles.profileInfo}>

            <Text style={styles.profileName}>
                {user.member.nickname}
            </Text>

            <View style={styles.typeBadge}>

                <Text style={styles.typeBadgeText}>
                    {
                        user.member.type === 'CEO'
                            ? '기업회원'
                            : '개인회원'
                    }
                </Text>

            </View>

        </View>

    </View>

    {/* 하단 */}
    <TouchableOpacity
        style={styles.profilePaymentBox}
        onPress={() => navigation.navigate('Payment')}
    >
        <Text style={styles.profilePaymentText}>
            내 결제 수단
        </Text>
    </TouchableOpacity>
        {/*
        <View style={styles.profileBottom}>
        
        <View style={styles.profileStatBox}>
            <Text style={styles.profileStatLabel}>
                결제 수단
            </Text>

            <Text style={styles.profileStatValue}>
                통장
            </Text>
        </View>

        <View style={styles.profileDivider} />

        <View style={styles.profileStatBox}>
            <Text style={styles.profileStatLabel}>
                결제 수단
            </Text>

            <Text style={styles.profileStatValue}>
                카드
            </Text>
        </View>
    </View>
        */}

</View>

{/* HORIZONTAL DASHBOARD */}

<View style={styles.dashboardRow}>

{
    isCEO ? (

        <>

            <TouchableOpacity
                style={styles.dashboardCard}
                onPress={() =>
                    navigation.navigate('MyProductList')
                }
            >

                <Text style={styles.dashboardEmoji}>
                    📩
                </Text>

                <Text style={styles.dashboardTitle}>
                    모집한 공구
                </Text>

                <Text style={styles.dashboardValue}>
                    12건
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.dashboardCard}
                onPress={() =>
                    navigation.navigate('MyProposalFundingList')
                }
            >

                <Text style={styles.dashboardEmoji}>
                    🛒
                </Text>

                <Text style={styles.dashboardTitle}>
                    내가 요청한
                </Text>

                <Text style={styles.dashboardValue}>
                    입찰
                </Text>

            </TouchableOpacity>

        </>

    ) : (

        <>

            <TouchableOpacity
                style={styles.dashboardCard}
                onPress={() =>
                    navigation.navigate('MyFundingList')
                }
            >

                <Text style={styles.dashboardEmoji}>
                    📩
                </Text>

                <Text style={styles.dashboardTitle}>
                    참여한 펀딩
                </Text>

                <Text style={styles.dashboardValue}>
                    12건
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.dashboardCard}
                onPress={() =>
                    navigation.navigate('MyProposalList')
                }
            >

                <Text style={styles.dashboardEmoji}>
                    🛒
                </Text>

                <Text style={styles.dashboardTitle}>
                    내가 요청한
                </Text>

                <Text style={styles.dashboardValue}>
                    공구
                </Text>

            </TouchableOpacity>

        </>

    )
}

</View>



                    
                {/* MENU CARD */}
                <View style={styles.card}>

                    <Text style={styles.sectionTitle}>
                        ⚙️ 메뉴
                    </Text>

{
    isCEO ? (

        <>
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() =>
                    navigation.navigate('NewProduct')
                }
            >
                <Text style={styles.menuText}>
                    📦 새 공동구매 모집
                </Text>

                <Text style={styles.arrow}>
                    ›
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuButton}
                /*onPress={() =>
                    navigation.navigate('MyProductList')
                }*/
            >
                <Text style={styles.menuText}>
                    🛒 이건뭘까
                </Text>

                <Text style={styles.arrow}>
                    ›
                </Text>
            </TouchableOpacity>
        </>

    ) : (

        <>
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() =>
                    navigation.navigate('NewProposal')
                }
            >
                <Text style={styles.menuText}>
                    📩 구매 요청 글 쓰기
                </Text>

                <Text style={styles.arrow}>
                    ›
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuButton}
                onPress={() =>
                    navigation.navigate('ProductFundingList')
                }
            >
                <Text style={styles.menuText}>
                    🛒 전체 펀딩 보러가기
                </Text>

                <Text style={styles.arrow}>
                    ›
                </Text>
            </TouchableOpacity>
        </>

    )
}

                </View>

            </ScrollView>

        </View>
    );
}