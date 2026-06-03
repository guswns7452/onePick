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
    },
    scrollView: {
        width: '100%',
        paddingTop: 5,
        marginBottom: 10,
    },
    titleContainer: {
        width: '95%',
        padding: 8,
        alignSelf: 'center',
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 4,
    },
    imageBox: {
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: color.faintBlack,
    },
    titleBox: {
        marginTop: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusBox: {
        width: 50,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    barContainer: {
        width: '95%',
        padding: 8,
        marginBottom: 15,
        alignSelf: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 4,
    },
    mainContainer: {
        width: '95%',
        //height: 80,
        padding: 8,
        marginTop: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 4,
    },
    buttonContainer: {
        width: '95%',
        height: 50,
        padding: 8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'gray',
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
    productImage: {
        width: 80,
        height: 80,
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
    buttonText: {
        color: color.normal,
        fontSize: 22,
        fontWeight: 'bold',
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
    timeText: {
        color: color.normal,
        fontSize: 26,
        fontWeight: '600',
        left: 10,
    },
    statusText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 22.4,
    },
    nameText: {
        color: color.faintBlack,
        fontSize: 18,
        fontWeight: '400',
        marginTop: 8,
    },
    /*
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