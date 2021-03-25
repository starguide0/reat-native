import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import LikeCard from '../components/LikeCard';
import {firebase_db} from "../firebaseConfig";
import Constants from 'expo-constants';
import Loading from "../components/Loading";

export default function LikePage({navigation, route}) {
    console.disableYellowBox = true;
    //return 구문 밖에서는 슬래시 두개 방식으로 주석
    let [tip, setTip] = useState([]);
    let [ready, setReady] = useState(false);

    useEffect(() => {
        console.log(route)
        navigation.setOptions({
            title: '꿀팁 찜'
        })
        pageUpdate();
    }, [])

    const pageUpdate = () => {
        firebase_db.ref(`/like/${Constants.installationId}`).once('value').then((snapshot) => {
            if (snapshot.exists()) {
                setTip(Object.values(snapshot.val()));
                setReady(true)
            } else {
                Alert.alert(
                    "찜 정보",
                    "찜한 데이터가 없습니다.",
                    [{
                        text: "Ok",
                        onPress: () => navigation.navigate("MainPage"),
                    }]
                );
            }
        })
    }

    //처음 ready 상태값은 true 이므로 ? 물음표 바로 뒤에 값이 반환(그려짐)됨
    //useEffect로 인해 데이터가 준비되고, ready 값이 변경되면 : 콜론 뒤의 값이 반환(그려짐)
    return !ready ? <Loading/> : (
        /*
          return 구문 안에서는 {슬래시 + * 방식으로 주석
        */
        <ScrollView style={styles.container}>
            <View style={styles.cardContainer}>
                {
                    tip.map((content, i) => {
                        return (<LikeCard content={content} pageUpdate={pageUpdate} key={i} navigation={navigation}/>)
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        backgroundColor: '#fff',
    },
    title: {
        //폰트 사이즈
        fontSize: 20,
        //폰트 두께
        fontWeight: '700',
        //위 공간으로 부터 이격
        marginTop: 50,
        //왼쪽 공간으로 부터 이격
        marginLeft: 20
    },
    honeyTip: {
        width: 100,
        height: 40,
        backgroundColor: "#cc99d7",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 10,
    },
    honeyTipText: {
        color: 'white',
    },
    weather: {
        alignSelf: "flex-end",
        paddingRight: 20
    },
    mainImage: {
        //컨텐츠의 넓이 값
        width: '90%',
        //컨텐츠의 높이 값
        height: 200,
        //컨텐츠의 모서리 구부리기
        borderRadius: 10,
        marginTop: 20,
        //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
        //각 속성의 값들은 공식문서에 고대로~ 나와 있음
        alignSelf: "center"
    },
    middleContainer: {
        marginTop: 20,
        marginLeft: 10,
        height: 60
    },
    middleButtonAll: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#20b2aa",
        borderColor: "deeppink",
        borderRadius: 15,
        margin: 7
    },
    middleButton01: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#fdc453",
        borderColor: "deeppink",
        borderRadius: 15,
        margin: 7
    },
    middleButton02: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#fe8d6f",
        borderRadius: 15,
        margin: 7
    },
    middleButton03: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#9adbc5",
        borderRadius: 15,
        margin: 7
    },
    middleButton04: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#f886a8",
        borderRadius: 15,
        margin: 7
    },
    middleButtonText: {
        color: "#fff",
        fontWeight: "700",
        //텍스트의 현재 위치에서의 정렬
        textAlign: "center"
    },
    middleButtonTextAll: {
        color: "#fff",
        fontWeight: "700",
        //텍스트의 현재 위치에서의 정렬
        textAlign: "center"
    },
    cardContainer: {
        marginTop: 10,
        marginLeft: 10
    },


});