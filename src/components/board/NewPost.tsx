import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView, TextInput } from 'react-native'
import { styles, text } from './NewPostStyle'
import { buttonStyle, buttonText }  from '../../public/style/button.ts'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/StackNavigator'

type HomeScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function NewPost({ navigation }: Props) {

    const [fulfilled, setFulfilled] = useState(false)

    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        const isFilled =
            title.trim() !== '' &&
            subtitle.trim() !== '' &&
            content.trim() !== '';
        setFulfilled(isFilled);
    }, [title, subtitle, content]);

    
    return (
        <View style={styles.flex}>
        <View style={styles.header}>
            <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Image
                    source={require('../../public/assets/back.png')}
                    style={styles.iconBack}
                />
            </TouchableOpacity>
            <Text style={text.headerText}>NEW POST</Text>
            </View>
        </View>

        <View style={styles.main}>
            <ScrollView style={styles.scrollView}>
                <View style={[styles.mainContainer, {}]}>
                    <TextInput
                        style={text.titleText}
                        placeholder='게시글 제목'
                        //maxLength={2000}
                        value={title}
                        onChangeText={setTitle}
                    />
                </View>
                <View style={[styles.mainContainer, {}]}>
                    <TextInput
                        style={text.titleText}
                        placeholder='상품 설명'
                        //maxLength={2000}
                        value={subtitle}
                        onChangeText={setSubtitle}
                    />
                </View>
                <View style={[styles.mainContainer, { height: 240 }]}>
                    <TextInput
                        style={text.titleText}
                        placeholder='게시글 내용'
                        multiline
                        //maxLength={2000}
                        value={content}
                        onChangeText={setContent}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={fulfilled ? 0.7 : 1}
                    style={fulfilled ? buttonStyle.active : buttonStyle.inactive}
                    /* onPress */
                >
                    <Text style={fulfilled ? buttonText.active : buttonText.inactive}>완료</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
        <View style={styles.footer}>
            <Text style={text.headerText}>FOOTER</Text>
        </View>
    </View>
  );
}
