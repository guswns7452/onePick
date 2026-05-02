import { StyleSheet, StyleProp, TextStyle } from 'react-native'

//자주 반복되는 색 객체로 빼서 사용
const color = {
    primary: '#0076F0',
    positiveBlue: '#1654D1',
    positiveLightBlue: '#B6CAF3',
    buttonBlue: '#0B95F7',
    negativeRed: '#EE473D',
    negativeLightRed: '#FAE1DF',
    noticeOrange: '#C85000',
    noticeLightOrange: '#F5E0D3',

    backgroundGray: '#F3F4F7',
    
    // 임시
    normal: '#232323',
    faintBlack: '#555555',
    faintGray: '#EEEEEE',
}

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: color.backgroundGray,
    },
    header: {
        flex: 0.15,
        justifyContent: 'flex-end',
        //backgroundColor: 'yellow',
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    main: {
        flex: 1,
    },
    mainContainer: {
        width: '90%',
        height: 200,
        marginTop: 8,
        marginBottom: 10,
        //padding: 8,
        flexDirection: 'row',
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: color.primary,
        borderWidth: 2,
    },
    scrollView: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingTop: 5,
        marginBottom: 30,
    },
    footer: {
        flex: 0.15,
        backgroundColor: 'green',
    },
    iconBack: {
        left: 15,
        width: 40,
        height: 40,
    },
})

const baseText = {
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: '400',
}

export const text = {
    contentText: {
        ...baseText,
        color: color.normal,
        fontSize: 18,
    },
    headerText: {
        color: color.normal,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        left: 30,
    },
    mainText: {
        color: color.normal,
        fontSize: 18,
        fontWeight: '400',
        //letterSpacing: -0.7,
        lineHeight: 22.4,
        marginTop: 10,
        left: 15,
    },
    /*
    activeText: {
        fontWeight: '800',
        color: color.primary,
        fontSize: 18,
        lineHeight: 22.4,
    },
    inactiveText: {
        ...baseText,
        color: color.inactive,
        fontSize: 18,
        lineHeight: 22.4,
    },
    timeText: {
        fontWeight: '500',
        color: color.inactive,
        fontSize: 16,
        lineHeight: 22.4,
        letterSpacing: -0.5,
    },
    ribbonText: {
        ...baseText,
        color: color.ribbon,
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: -0.5,
    },
    hospitalText: {
        fontWeight: '800',
        fontSize: 20,
        lineHeight: 28,
        color: color.normal,
    },
    smallBlackText: {
        ...baseText,
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: -0.5,
        color: color.normal,
    },
    normalText: {
        ...baseText,
        fontSize: 16,
        lineHeight: 22.4,
        letterSpacing: -0.5,
        color: color.normal,
    },
    semiboldText: {
        fontWeight: '800',
        fontSize: 18,
        color: color.normal,
        lineHeight: 22.4,
    },
    doctorText: {
        fontWeight: '800',
        fontSize: 16,
        color: color.normal,
        lineHeight: 22.4,
    },
    titleText: {
        ...baseText,
        fontSize: 16,
        color: color.normal,
        lineHeight: 22.4,
        letterSpacing: -0.5,
        marginLeft: 4,
    },
    profiletitleText: {
        ...baseText,
        fontSize: 16,
        color: color.primary,
        lineHeight: 19.6,
        letterSpacing: -0.5,
    },
    primaryboldText: {
        fontWeight: '800',
        fontSize: 18,
        color: color.primary,
        lineHeight: 22.4,
    },
    faintText: {
        ...baseText,
        fontSize: 18,
        lineHeight: 22.4,
        letterSpacing: -0.5,
        color: color.faintBlack,
    },
    showReviewText: {
        ...baseText,
        fontSize: 16,
        lineHeight: 22.4,
        letterSpacing: -0.5,
        color: color.faintBlack,
        textDecorationColor: color.faintBlack,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
    },
    */
} as {
    [key: string]: StyleProp<TextStyle>
}