import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../constants/Color';
// import styles from '../styles/Global';
import Swiper from 'react-native-swiper';
import Color from '../constants/Color';

let {height, width} = Dimensions.get('window');
const SliderActiveDot = (
  <View
    style={{
      backgroundColor: Color.DARK_GREEN,
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    }}
  />
);

const SliderDots = (
  <View
    style={{
      backgroundColor: Color.PALE,
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    }}
  />
);
function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View style={{width: width, alignItems: 'center'}}>
          <Swiper
            autoplay={true}
            style={styles.wrapper}
            dot ={SliderDots}
            activeDot={SliderActiveDot}
            autoplayTimeout={3}>
            <Image
              style={styles.slides}
              source={require('../assets/banner-header-belanja-pertama-1-1024x623.png')}
            />
            <Image
              style={styles.slides}
              source={require('../assets/promo.jpg')}
            />
            <Image
              style={styles.slides}
              source={{
                uri:
                  'https://3.bp.blogspot.com/-kE11Z3EzUOE/W9VjVKe3dtI/AAAAAAAAAKo/yAej-CbeJuwMZA_c6jgmC6CCkDyvmNkwQCK4BGAYYCw/s1600/BANNER5.png',
              }}
            />
            <Image
              style={styles.slides}
              source={require('../assets/nHBfsgAAQQAAAA8AJhvfUQADSGw.png')}
            />
          </Swiper>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {height:width/2},
  slides: {
    height: width / 2,
    width: width - 30,
    borderRadius: 10,
    margin: 15,
  },
});

export default HomeScreen;
