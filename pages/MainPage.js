import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import data from '../data.json';

export default function MainPage() {
    // console.disableYellowBox = true;
//   let getTime = () => {
//     let time = new Date();
//     let date = time.getDate(); //Current Date
//     let month = time.getMonth() + 1; //Current Month
//     let year = time.getFullYear(); //Current Year
//     let hours = time.getHours(); //Current Hours
//     let min = time.getMinutes(); //Current Minutes
//     let sec = time.getSeconds(); //Current Seconds
//     return `${date}/${month}/${year} ${hours}:${min}:${sec}`
//   }

  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림"
  let bc = ['#fdc453', '#9adbc5', '#f886a8', '#fe8d6f'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁!!</Text>
      <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
      <Image
        style={styles.image}
        source={{ url: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c" }}
      />
      <ScrollView
        horizontal={true}
        style={styles.navi}
        indicatorStyle={"white"}
      >
        {
          tip.map((v, i) => {
            return (
              <TouchableOpacity style={{ ...styles.naviMenuTemplate, backgroundColor: bc[i % bc.length] }}
              // onPress={}
                key={i}
              >
                <Text style={styles.naviMenuContext}>{v.category}</Text>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
      <ScrollView style={styles.context}>
        {
          tip.map((v, i) => {
            return (
              <View style={styles.contextWrap} key={i}>
                <Image
                  style={styles.contextImage}
                  source={{ url: v.image }}
                />
                <View style={styles.contextText}>
                  <Text style={styles.contextTextTitle} numberOfLines={1}>
                    {v.title}
                  </Text>
                  <Text style={styles.contextTextDesc} numberOfLines={3}>
                    {v.desc}
                  </Text>
                  <Text style={styles.contextTextDate}>
                    {v.date}
                  </Text>
                </View>
              </View>);
          })
        }
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    margin: 10,
  },
  weather: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: 'gray',
    marginBottom: 5
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    alignSelf: "center"
  },
  navi: {
    height: 95,
    flexDirection: "row",
  },
  naviMenuTemplate: {
    flex: 1,
    alignItems: "center",
    width: 100,
    height: 50,
    padding: 15,
    borderRadius: 15,
    margin: 7,
  },
  naviMenuContext: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  contextImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  contextWrap: {
    flexDirection: "row",
    marginBottom: 10
  },
  contextText: {
    flex: 2,
    paddingLeft: 5
  },
  contextTextTitle: {
    flex: 3,
    fontWeight: "bold",
    fontSize: 15,
    paddingBottom: 5
  },
  contextTextDesc: {
    flex: 10
  },
  contextTextDate: {
    flex: 1,
    color: 'gray',
    paddingTop: 5,
    fontSize: 10
  },
});