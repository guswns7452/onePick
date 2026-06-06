import { StyleSheet, StyleProp, TextStyle } from 'react-native'
import { color }  from '../../public/style/colors.ts'

export const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: color.primary,
    },
    header: {
        flex: 0.15,
        justifyContent: 'flex-end',
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
    messageContainer: {
        width: '85%',
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        //borderColor: 'black',
        //borderWidth: 2,
    },
    contentContainer: {
        width: '80%',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 16,
        padding: 5,
        //flexDirection: 'column',
        //borderColor: 'black',
        //borderWidth: 4,
    },
    upperBox: {
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: 20,
        marginBottom: 15,
        borderBottomColor: color.faintBlack,
        borderBottomWidth: 0.2,
    },
    lowerBox: {
        width: '95%',
        flexDirection: 'row',
        marginBottom: 15,
        alignSelf: 'center',
        alignItems: 'center',
    },
    lowerImageBox: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lowerTextBox: {
        width: '70%',
        paddingLeft: 10,
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
        width: 60,
        height: 60,
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
    messageText: {
        color: 'white',
        fontSize: 23,
        fontWeight: '600',
        margin: 5,
    },
    priceText: {
        color: color.normal,
        fontSize: 32,
        fontWeight: '600',
        letterSpacing: -0.7,
        left: 20,
    },
    priceUnitText: {
        color: color.normal,
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: -0.7,
        left: 30,
        bottom: -10,
    },
    productText: {
        color: color.normal,
        fontSize: 20,
        fontWeight: '600',
        bottom: 2,
    },
    sellerText: {
        color: color.faintBlack,
        fontSize: 15,
        fontWeight: '600',
        top: 2,
    },
} as {
    [key: string]: StyleProp<TextStyle>
}