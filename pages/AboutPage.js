import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export default function AboutPage() {
    return (<ScrollView style={styles.container}>
        <Text style={styles.title}>HI! 스파르타코딩 앱개발반에 오신것을 환영합니다</Text>

            <View style={styles.contents}>
                <Image
                    style={styles.image}
                    source={{ url: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4' }}
                />
                <Text style={{ ...styles.text, fontSize: 20 }}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={{ ...styles.text, fontSize: 15 }}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
                <TouchableOpacity style={styles.idBtn}><Text style={styles.idBtnText}>여러분의 인스타계정</Text></TouchableOpacity>
            </View>

    </ScrollView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        padding : 30,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 30,
        marginTop: 30,
    },
    contents: {
        backgroundColor: 'white',
        paddingTop:40,
        paddingBottom:40,
        borderRadius: 15,
    },
    image: {
        alignSelf: 'center',
        marginBottom: 10,
        borderRadius: 25,
        width: '40%',
        height: '40%'
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 30,
    },
    idBtn: {
        alignSelf: 'center',
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 20,
    },
    idBtnText: {
        color: 'white'
    }
})