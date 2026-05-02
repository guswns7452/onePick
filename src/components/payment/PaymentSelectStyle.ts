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
    scrollView: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingTop: 5,
        marginBottom: 30,
    },
    activeBox: {
        width: '90%',
        height: 160,
        marginTop: 10,
        marginBottom: 13,
        //padding: 8,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: color.positiveBlue,
        borderWidth: 3,
    },
    inactiveBox: {
        width: '90%',
        height: 45,
        marginTop: 10,
        marginBottom: 13,
        //padding: 8,
        alignSelf: 'center',
        borderRadius: 10,
        borderColor: color.positiveLightBlue,
        borderWidth: 1,
    },
    textBox: {
        height: 45,
    },
    imageBox: {
        alignItems: 'center',
    },
    icon: {
        width: 90,
        height: 90,
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
    activeText: {
        color: color.normal,
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 22.4,
        marginTop: 10,
        left: 15,
    },
    inactiveText: {
        color: color.normal,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22.4,
        marginTop: 10,
        left: 15,
    },
} as {
    [key: string]: StyleProp<TextStyle>
}