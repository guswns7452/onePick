import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, TextInput } from 'react-native'
import { styles, text } from './MyPageStyle'


export default function MyPage() {
    
    return (
        <View style={styles.flex}>
        <View style={styles.header}>
            <View style={styles.headerContainer}>
            <TouchableOpacity /*onPress={() => {navigation.goBack()}}*/>
                <Image
                    source={require('../../public/assets/back.png')}
                    style={styles.iconBack}
                />
            </TouchableOpacity>
            <Text style={text.headerText}>MYPAGE</Text>
            </View>
        </View>

        <View style={styles.main}>
            <View style={styles.mainView}>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.optionContainer}>
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                source={require('../../public/assets/credit-card.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>OPTION 1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                source={require('../../public/assets/bank-account.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>OPTION 2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainContainer}>
                    <TouchableOpacity style={styles.optionContainer}>
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                source={require('../../public/assets/credit-card.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>OPTION 3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionContainer}>
                        <View style={styles.imageBox}>
                            <Image
                                style={styles.optionImage}
                                source={require('../../public/assets/bank-account.png')}
                            />
                        </View>
                        <View style={styles.textBox}>
                            <Text style={text.optionText}>OPTION 4</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.footer}>
            <Text style={text.headerText}>FOOTER</Text>
        </View>
    </View>
  );
}
