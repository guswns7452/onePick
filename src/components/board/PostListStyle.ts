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
        paddingTop: 12,
        marginBottom: 10,
    },
    mainContainer: {
        width: '85%',
        alignSelf: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: color.positiveBlue,
        borderWidth: 1,
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
    upperImageBox: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    upperTextBox: {
        width: '70%',
        paddingLeft: 15,
    },
    lowerBox: {
        width: '95%',
        flexDirection: 'row',
        marginBottom: 15,
        alignSelf: 'center',
        alignItems: 'center',
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
    headerText: {
        color: color.normal,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        left: 30,
    },
    productText: {
        ...baseText,
        fontSize: 19,
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