import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Container, Header, Content, Body, Right, Left, Icon} from 'native-base';
import Swiper from 'react-native-swiper';
import Color, {DARK_GREEN} from '../constants/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Col, Row, Grid} from 'react-native-easy-grid';
import axios from 'axios';

const api = axios.create({
  baseURL : 'http://192.168.43.19/marketbox-api'
})

api.get('/pools').then(res=>{
  console.log(res.data)
})
// get pool by zipcode:
async function getPool() {
  const zipcode = 75325;

  try {
    const response = await axios.get('/pool?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
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
      <StatusBar hidden={false} style={{backgroundColor: Color.LIGHT_GREEN}} />
      <Header
        style={{backgroundColor: 'white'}}
        searchBar
        rounded
        androidStatusBarColor={Color.LIGHT_GREEN}>
        <Left>
          <Image
            style={{width: 180, height: 40, marginTop: 5}}
            source={require('../assets/icons.png')}
          />
          {/* <Image
            style={{width: 40, height: 40, marginTop: 5}}
            source={require('../assets/icon.png')}
          /> */}
        </Left>
        <Body></Body>
        <Right>
          <Icon name="notifications-outline" size={30} />
        </Right>
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
                style={{width: 25, height: 25, marginTop: 2, marginRight: 5}}
                source={require('../assets/pointer.png')}
              />
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Agen Terdekat
              </Text>
            </View>

            <Grid
              style={{
                marginHorizontal: 18,
                flex: 1,
                marginTop: 15,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Pool')}>
                <Col>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      backgroundColor: '#00CE9F',
                      height: 150,
                      width: width / 2.3,
                      resizeMode: 'cover',
                    }}
                    source={require('../assets/taniamart.jpeg')}>
                    <View
                      style={{
                        // width: 180,
                        height: 150,
                        borderRadius: 10,
                        positio: 'absolute',
                        backgroundColor: 'black',
                        opacity: 0.5,
                      }}></View>
                    <View
                      style={{
                        // width: 180,
                        borderRadius: 10,
                        height: 150,
                        position: 'absolute',
                        backgroundColor: 'black',
                        opacity: 0.5,
                      }}></View>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        bottom: 0,
                        padding: 10,
                        position: 'absolute',
                      }}>
                      Ta-nia
                    </Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Col style={{height: 150}}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      backgroundColor: '#00CE9F',
                      width: width / 2.3,
                      resizeMode: 'cover',
                    }}
                    source={require('../assets/pusat-grosir-surabaya.jpg')}>
                    <View
                      style={{
                        // width: 180,
                        height: 150,
                        borderRadius: 10,
                        positio: 'absolute',
                        backgroundColor: 'black',
                        opacity: 0.5,
                      }}></View>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        bottom: 0,
                        padding: 10,
                        position: 'absolute',
                      }}>
                      Agen Bontang 1
                    </Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity>
            </Grid>
            <Grid
              style={{
                marginHorizontal: 18,
                flex: 1,
                marginTop: 15,
                justifyContent: 'space-between',
              }}>
              <Col>
                <ImageBackground
                  imageStyle={{borderRadius: 10}}
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    backgroundColor: '#00CE9F',
                    height: 150,
                    width: width / 2.3,
                    resizeMode: 'cover',
                  }}
                  source={require('../assets/klewer.jpg')}>
                  <View
                    style={{
                      // width: 180,
                      height: 150,
                      borderRadius: 10,
                      positio: 'absolute',
                      backgroundColor: Color.RED,
                      opacity: 0.5,
                    }}></View>
                  <Image
                    style={{
                      width: 120,
                      height: 100,
                      marginTop: 2,
                      marginRight: 5,
                      position: 'absolute',
                      alignSelf: 'center',
                      flex: 1,
                    }}
                    source={require('../assets/close.png')}
                  />

                  <Text
                    style={{
                      fontSize: 20,
                      color: 'white',
                      bottom: 0,
                      padding: 10,
                      position: 'absolute',
                    }}>
                    Agen Bontang 2
                  </Text>
                </ImageBackground>
              </Col>
              <TouchableOpacity onPress={() => {}}>
                <Col style={{height: 150}}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      backgroundColor: '#00CE9F',
                      width: width / 2.3,
                      resizeMode: 'cover',
                    }}
                    source={require('../assets/tanahabang.jpg')}>
                    <View
                      style={{
                        // width: 180,
                        height: 150,
                        borderRadius: 10,
                        positio: 'absolute',
                        backgroundColor: 'black',
                        opacity: 0.5,
                      }}></View>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        bottom: 0,
                        padding: 10,
                        position: 'absolute',
                      }}>
                      Agen Bontang 3
                    </Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity>
            </Grid>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 10,
                alignSelf: 'center',
                justifyContent: 'space-around',
              }}>
              <Text style={{}}>&copy; 2020 </Text>
              <Text> </Text>
              <Text style={{color: Color.DARK_GREEN}}>
                {' '}
                https://marketbox.id
              </Text>
            </View>
          </Content>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapper2: {height: 100},
  wrapper: {height: width / 2 + 30, backgroundColor: Color.PALE},
  slides: {
    height: width / 2,
    width: width - 30,
    borderRadius: 10,
    margin: 15,
  },
});

export default HomeScreen;
