import * as firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
var firebaseConfig = {
    apiKey: "AIzaSyB1x2lnDdwYyq2LukOEGzAqubICd0lWj6o",
    authDomain: "sparta-myhoneytip-slroh.firebaseapp.com",
    projectId: "sparta-myhoneytip-slroh",
    databaseURL: "https://sparta-myhoneytip-slroh-default-rtdb.firebaseio.com/",
    storageBucket: "sparta-myhoneytip-slroh.appspot.com",
    messagingSenderId: "991811383484",
    appId: "1:991811383484:web:635ebd04ceda8d6a40a0b9",
    measurementId: "G-9P9ZTE9KBX"
};

//사용 방법입니다.
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()