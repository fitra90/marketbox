import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button,
  Icon,
} from 'native-base';
// import Icon from 'react-native-vector-icons/Ionicons';
// import styles from '../styles/Global';
import Swiper from 'react-native-swiper';
import Color from '../constants/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    <Container>
      <Header
        style={{backgroundColor: 'white'}}
        searchBar
        rounded
        androidStatusBarColor={Color.LIGHT_GREEN}>
        <Item>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/icon.png')}
          />
          <Input placeholder="Pencarian" style={{textAlign: 'right'}} />
          <TouchableOpacity></TouchableOpacity>
          <Icon name="search" size={30} />
          <Icon name="notifications-outline" size={30} />
        </Item>
      </Header>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{width: width, alignItems: 'center'}}>
            <Swiper
              autoplay={true}
              style={styles.wrapper}
              dot={SliderDots}
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
          <Content>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 15,
                marginTop: 20,
              }}>
              <Image
                style={{width: 30, height: 40, marginRight: 10}}
                source={require('../assets/basket.jpg')}
              />
              <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 8}}>
                Kategori
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 20, alignContent:"center"}}>
              <Image
              style={{marginLeft:20}}
                source={require('../assets/category.png')}
              />
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 20}}>
              <Image
                style={{width: 20, height: 20, marginTop: 2, marginRight: 5}}
                source={require('../assets/pointer.png')}
              />
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Toko Terdekat
              </Text>
            </View>
            <Swiper
              autoplay={false}
              style={styles.wrapper}
              dot={<View></View>}
              showsButtons={true}
              activeDot={<View></View>}
              autoplayTimeout={3}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <ImageBackground
                  source={require('../assets/alfamart-toko.jpg')}
                  style={styles.slides}>
                  <Text style={{}}>Inside</Text>
                </ImageBackground>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <ImageBackground
                  source={require('../assets/pintar.jpeg')}
                  style={styles.slides}>
                  <Text style={{}}>Inside</Text>
                </ImageBackground>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <ImageBackground
                  source={require('../assets/tak-lekang.jpg')}
                  style={styles.slides}>
                  <Text style={{}}>Inside</Text>
                </ImageBackground>
              </View>
            </Swiper>
          </Content>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapper: {height: width / 2},
  slides: {
    height: width / 2,
    width: width - 30,
    borderRadius: 10,
    margin: 15,
  },
});

export default HomeScreen;
