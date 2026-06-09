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
} as {
    [key: string]: StyleProp<TextStyle>
}