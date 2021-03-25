import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import {firebase_db} from "../firebaseConfig"
import Constants from 'expo-constants';

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function LikeCard({content, pageUpdate, navigation}) {

    const release = function(idx) {
        Alert.alert(
            "찜 해제",
            "정말 해제 하시겠습니까?",
            [{
                text: "취소",
            },{
                text:"해제",
                onPress:()=>{
                    firebase_db.ref(`/like/${Constants.installationId}/${idx}`).remove((error) => {
                        console.log(error);
                    }).then(r=>{
                        console.log(r);
                        pageUpdate(false);
                    })
                }
            }]
        )
    }

    return (
        //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
        <View style={styles.card}>
            <View style={styles.thumbnail}>
                <Image style={styles.cardImage} source={{uri: content.image}}/>
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                    <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                    <Text style={styles.cardDate}>{content.date}</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}
                                  onPress={() => navigation.navigate('DetailPage', content)}
                >
                    <Text style={styles.buttonText}>자세히보기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={() => release(content.idx)}
                >
                    <Text style={styles.buttonText}>찜 해제</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        flex: 1,
        margin: 10,
        marginBottom: 0,
        borderBottomWidth: 0.5,
        borderBottomColor: "#eee",
        paddingBottom: 10
    },
    thumbnail: {
        flexDirection: "row",
    },
    cardImage: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    cardText: {
        flex: 2,
        flexDirection: "column",
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "700"
    },
    cardDesc: {
        fontSize: 15
    },
    cardDate: {
        fontSize: 10,
        color: "#A6A6A6",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 30,
    },
    buttonText: {
        color: "deeppink",
        textAlign: "center"
    },
    button: {
        borderColor: "deeppink",
        borderWidth: 1,
        padding: 10,
        marginTop: 5,
        marginLeft: 20,
        width: "25%",
        borderRadius: 10,
    },
});