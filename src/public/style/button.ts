import { StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native'
import { color }  from './colors.ts'

const baseStyle: ViewStyle = {
        width: '95%',
        height: 60,
        padding: 8,
        marginTop: 15,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
}

export const buttonStyle = StyleSheet.create({
    active: {
        ...baseStyle,
        backgroundColor: color.activeBlue,
    },
    inactive: {
        ...baseStyle,
        backgroundColor: color.inactiveGray,
    },
})


const baseText: TextStyle = {
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: -0.8,
    fontSize: 22,
}

export const buttonText = {
    active: {
        ...baseText,
        color: 'white',
    },
    inactive: {
        ...baseText,
        color: color.faintGray,
    },
} as {
    [key: string]: StyleProp<TextStyle>
}