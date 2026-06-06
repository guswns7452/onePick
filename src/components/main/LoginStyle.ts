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
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: color.positiveBlue,
        borderWidth: 1,
    },
    pickerContainer: {
        /*
        width: '95%',
        height: 80,
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: color.positiveBlue,
        borderWidth: 1,
        */
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        marginBottom: 20,
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
    placeholderText: {
        ...baseText,
        fontSize: 17,
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