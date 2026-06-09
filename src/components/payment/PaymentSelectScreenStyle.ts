import { StyleSheet, StyleProp, TextStyle } from 'react-native'
import { color }  from '../../public/style/colors.ts'

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
        borderWidth: 2,
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