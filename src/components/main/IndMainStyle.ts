import { StyleSheet, StyleProp, TextStyle } from 'react-native'
import { color }  from '../../public/style/colors.ts'

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
        justifyContent: 'center',
    },
    mainView: {
        width: '100%',
        height: 400,
        alignItems: 'center',
        top: -25,
    },
    mainContainer: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    optionContainer: {
        width: '40%',
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.backgroundGray,
        borderRadius: 20,
        borderColor: color.positiveLightBlue,
        borderWidth: 2,
        // 그림자효과
    },
    imageBox: {
        height: '60%',
        top: -5,
    },
    textBox: {
        justifyContent: 'center',
        //backgroundColor: 'pink',
    },
    optionImage: {
        width: 95,
        height: 95,
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
    headerText: {
        color: color.normal,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        left: 30,
    },
    optionText: {
        ...baseText,
        fontWeight: '500',
        fontSize: 17,
    },
    subtitleText: {
        ...baseText,
        fontSize: 18,
    },
    contentText: {
        ...baseText,
        fontSize: 18,
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
} as {
    [key: string]: StyleProp<TextStyle>
}