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
import Color, {DARK_GREEN} from '../constants/Color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Col, Row, Grid} from 'react-native-easy-grid';

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
        <Item>
          <Image
            style={{width: 40, height: 40, marginTop: 5}}
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
                style={{width: 25, height: 25, marginTop: 2, marginRight: 5}}
                source={require('../assets/pointer.png')}
              />
              <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 1}}>
                Agen Terdekat
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 7,
                marginTop: 20,
                border: 1,
                borderColor: Color.DARK_GREEN,
                alignContent: 'center',
              }}>
              <Grid>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Payment')}>
                  <Col
                    style={{
                      marginHorizontal: 10,
                    }}>
                    <ImageBackground
                      imageStyle={{borderRadius: 10}}
                      style={{
                        flex: 1,
                        borderRadius: 10,
                        backgroundColor: '#00CE9F',
                        height: 150,
                        width: 180,
                        resizeMode: 'cover',
                      }}
                      source={require('../assets/tak-lekang.jpg')}>
                      <View
                        style={{
                          width: 180,
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
                        Pasar Gajah
                      </Text>
                    </ImageBackground>
                  </Col>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Delivery')}>
                  <Col
                    style={{
                      marginHorizontal: 10,
                    }}>
                    <ImageBackground
                      imageStyle={{borderRadius: 10}}
                      style={{
                        flex: 1,
                        borderRadius: 10,
                        backgroundColor: '#00CE9F',
                        height: 150,
                        width: 180,
                        resizeMode: 'cover',
                      }}
                      source={require('../assets/pusat-grosir-surabaya.jpg')}>
                      <View
                        style={{
                          width: 180,
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
                        Pusat Grosir Surabaya
                      </Text>
                    </ImageBackground>
                  </Col>
                </TouchableOpacity>
              </Grid>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 7,
                marginTop: 19,
                alignContent: 'center',
              }}>
              <Grid>
                <Col
                  style={{
                    marginHorizontal: 10,
                  }}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={{
                      flex: 1,
                      borderRadius: 10,
                      backgroundColor: '#00CE9F',
                      height: 150,
                      width: 180,
                      resizeMode: 'cover',
                    }}
                    source={require('../assets/klewer.jpg')}>
                    <View
                      style={{
                        width: 180,
                        height: 150,
                        positio: 'absolute',
                        borderRadius: 10,
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
                      Pasar Klewer
                    </Text>
                  </ImageBackground>
                </Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Pool')}>
                  <Col
                    style={{
                      marginHorizontal: 10,
                    }}>
                    <ImageBackground
                      imageStyle={{borderRadius: 10}}
                      style={{
                        flex: 1,
                        borderRadius: 10,
                        backgroundColor: '#00CE9F',
                        height: 150,
                        width: 180,
                        resizeMode: 'cover',
                      }}
                      source={require('../assets/tanahabang.jpg')}>
                      <View
                        style={{
                          width: 180,
                          height: 150,
                          borderRadius: 10,
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
                        Pasar Tanah Abang
                      </Text>
                    </ImageBackground>
                  </Col>
                </TouchableOpacity>
              </Grid>
            </View>

            {/* <View
              style={{
                flexDirection: 'row',
                marginLeft: 15,
                marginTop: 20,
                marginBottom: 10,
              }}>
              <Image
                style={{width: 40, height: 40, marginTop: 2, marginRight: 5}}
                source={require('../assets/toys.png')}
              />
              <Text
                style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>
                Kategori Produk
              </Text>
            </View>

            <View
              style={{
                width: 'auto',
                height: 120,
                borderRadius: 10,
                elevation: 2,
                marginHorizontal:15,
                shadowOffset: {width: 2, height: 1},
                shadowColor: 'silver',
                shadowOpacity: 0.3,
                shadowRadius: 2,
              }}>
              </View> */}
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
