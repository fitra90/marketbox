import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  Container,
  Header,
  Card,
  Item,
  Input,
  CardItem,
  Content,
  Body,
  Right,
  Left,
  Icon,
  Button,
} from 'native-base';
import Swiper from 'react-native-swiper';
import Color from '../constants/Color';
import {TouchableOpacity, State} from 'react-native-gesture-handler';
import {Col, Row, Grid} from 'react-native-easy-grid';
import api, {geolocation} from '../constants/Api';
import Variables from '../constants/Variables';
import Geolocation from '@react-native-community/geolocation';

let {height, width} = Dimensions.get('window');

const initData = {
  status: 'ok',
  totalRow: 0,
  data: [],
};

function HomeScreen({navigation}) {
  const [promo, setPromo] = useState();
  const [agents, setAgents] = useState(initData);
  const [isErrorGettingPromo, setPromoNotFound] = useState(false);
  const [isAgentNotFound, setAgentNotFound] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [postalCode, setPostalCode] = useState(0);

  const SliderActiveDot = <View style={styles.activeDot} />;
  const SliderDots = <View style={styles.sliderDots} />;

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => {
      // console.log(info);
      geolocation
        .get('/json', {
          params: {
            // column: 'postal_code',
            key: Variables.GEOLOCATION_API_KEY,
            q: encodeURIComponent(
              info.coords.latitude + ',' + info.coords.longitude,
            ),
            pretty: 1,
            no_annotations: 1,
          },
        })
        .then((res) => {
          // setAgents(res.data);
          // console.log(res);
          api
            .get('/pools', {
              params: {
                // column: 'postal_code',
                column: 'all',
                // data: 123456,
              },
            })
            .then((res) => {
              setAgents(res.data);
            })
            .catch((err) => {
              Alert.alert(
                'Terjadi kesalahan jaringan',
                [
                  {
                    text: 'Gagal mendapatkan data agen',
                  },
                  {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                  },
                ],
                {cancelable: false},
              );
            });
        })
        .catch((err) => {});
    });
  }, []);

  return (
    <Container>
      <StatusBar hidden={false} />
      <Header
        style={{backgroundColor: 'white', height: 70}}
        iosBarStyle="dark-content"
        searchBar
        rounded
        androidStatusBarColor="#FFFFFF">
        <Left>
          <Image
            style={{width: 40, height: 40, marginTop: 5}}
            source={require('../assets/icons.png')}
          />
        </Left>
        <Body>
          <Item style={{borderBottomColor: '#FFFFFF'}}>
            <View
              style={{
                width: '165%',
                borderColor: 'silver',
                borderWidth: 1,
                borderRadius: 25,
                height: 40,
                paddingLeft: 10,
                flexDirection: 'row',
              }}>
              <Image
                style={{width: 30, height: 30, marginTop: 5}}
                source={require('../assets/icons/search.png')}
              />
              <Input
                placeholder="Mau beli apa?"
                underlineColorAndroid="transparent"
                placeholderTextColor="silver"
                style={{
                  fontFamily: 'ProductSansRegular',
                  paddingBottom: 20,
                }}
              />
              {/* <Icon name="ios-people" /> */}
            </View>
          </Item>
        </Body>
        <Right>
          {/* <Icon name="notifications-outline" size={30} /> */}
          <Image
            source={require('../assets/icons/Notification.png')}
            style={{width: 30, height: 30, paddingTop: 10}}
          />
        </Right>
      </Header>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{width: width, justifyContent: 'space-between'}}>
            <Swiper
              autoplay={true}
              // style={styles.wrapper}
              style={{height: height / 2.6, alignItems: 'flex-start'}}
              dot={SliderDots}
              activeDot={SliderActiveDot}
              paginationStyle={{
                left: 20,
                right: null,
              }}
              autoplayTimeout={3}>
              <Image
                style={styles.slides}
                source={require('../assets/banner-header-belanja-pertama-1-1024x623.png')}
              />
              <Image
                style={styles.slides}
                source={require('../assets/promo.jpg')}
              />
              {/* <Image
                style={styles.slides}
                source={{
                  uri:
                    'https://3.bp.blogspot.com/-kE11Z3EzUOE/W9VjVKe3dtI/AAAAAAAAAKo/yAej-CbeJuwMZA_c6jgmC6CCkDyvmNkwQCK4BGAYYCw/s1600/BANNER5.png',
                }}
              /> */}
              <Image
                style={styles.slides}
                source={require('../assets/nHBfsgAAQQAAAA8AJhvfUQADSGw.png')}
              />
            </Swiper>
            <Text
              style={{
                marginTop: -42,
                right: 20,
                alignSelf: 'flex-end',
                color: Color.BLUE,
                fontFamily: 'ProductSansBold',
                fontSize: 15,
              }}>
              Lihat Semua Promo
            </Text>
          </View>
          <Content>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 15,
                marginTop: 30,
              }}>
              <Image
                style={{width: 30, height: 30, marginRight: 5}}
                source={require('../assets/icons/Location-10.png')}
              />
              <Text
                style={{
                  fontSize: 19,
                  marginTop: 3,
                  fontFamily: 'ProductSansBold',
                }}>
                Agen Terdekat
              </Text>
            </View>
            {agents.totalRow > 1 ? (
              <Grid>
                <Col style={styles.noAgentCol}>
                  <TouchableOpacity onPress={() => {}}>
                    <Card style={styles.noAgentCard}>
                      <Text>Agen Tidak Ditemukan</Text>
                    </Card>
                  </TouchableOpacity>
                </Col>
              </Grid>
            ) : (
              <Grid style={styles.gridStyle}>
                {agents.data.map((agent, index) => (
                  <TouchableOpacity
                    key={agent.id}
                    onPress={() => {
                      navigation.navigate('Pool', [agent.id]);
                    }}>
                    <Col style={{marginTop: 20}}>
                      <ImageBackground
                        imageStyle={{borderRadius: 10}}
                        style={styles.cardBackground}
                        source={{
                          uri: Variables.AGENT_URL + agent.picture,
                        }}>
                        <View
                          style={
                            agent.open < 1
                              ? styles.cardOverlayRed
                              : styles.cardOverlay
                          }></View>
                        {agent.open < 1 ? (
                          <Image
                            style={styles.cardClose}
                            source={require('../assets/close.png')}
                          />
                        ) : (
                          <View></View>
                        )}
                        <Text style={styles.cardTitle}>{agent.name}</Text>
                      </ImageBackground>
                    </Col>
                  </TouchableOpacity>
                ))}
              </Grid>
            )}

            <Grid style={styles.gridStyle}>
              <TouchableOpacity onPress={() => {}}>
                <Col style={{marginTop: 20}}>
                  <View style={{}}>
                    <Image
                      style={{
                        width: 180,
                        height: 120,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                      }}
                      source={require('../assets/tak-lekang.jpg')}
                    />
                  </View>
                  <View
                    style={{
                      height: 120,
                      borderColor: 'red',
                      border: 1,
                    }}>
                    <Text style={styles.cardTitle}>Agen Ta-Nia</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={{width: 23, height: 23, marginRight: 5}}
                        source={require('../assets/icons/Location.png')}
                      />
                      <Text
                        style={{
                          color: Color.BLUE,
                          fontFamily: 'ProductSansRegular',
                          fontSize: 16,
                        }}>
                        1.2 Km
                      </Text>
                    </View>
                    <View>
                      <Text>Jalan Kanan Kiri Oke 09 Bontang, Kota Bontang</Text>
                    </View>
                  </View>
                </Col>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Col style={{marginTop: 20}}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={styles.cardBackground}
                    source={require('../assets/tak-lekang.jpg')}>
                    <View style={styles.cardOverlay}></View>
                    <Text style={styles.cardTitle}>Pasar A</Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Col style={{marginTop: 20}}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={styles.cardBackground}
                    source={require('../assets/tak-lekang.jpg')}>
                    <View style={styles.cardOverlay}></View>
                    <Text style={styles.cardTitle}>Pasar A</Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Col style={{marginTop: 20}}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={styles.cardBackground}
                    source={require('../assets/tak-lekang.jpg')}>
                    <View style={styles.cardOverlay}></View>
                    <Text style={styles.cardTitle}>Pasar A</Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Col style={{marginTop: 20}}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={styles.cardBackground}
                    source={require('../assets/tak-lekang.jpg')}>
                    <View style={styles.cardOverlay}></View>
                    <Text style={styles.cardTitle}>Pasar A</Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Col style={{marginTop: 20}}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={styles.cardBackground}
                    source={require('../assets/tak-lekang.jpg')}>
                    <View style={styles.cardOverlay}></View>
                    <Text style={styles.cardTitle}>Pasar A</Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity>
            </Grid>
          </Content>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  slides: {
    height: width / 2,
    width: width,
  },
  activeDot: {
    backgroundColor: Color.DARK_GREEN,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  sliderDots: {
    backgroundColor: Color.PALE,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  gridStyle: {
    marginHorizontal: 18,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'ProductSansBold',
    padding: 10,
    position: 'absolute',
  },
  cardOverlay: {
    height: 150,
    borderRadius: 10,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  cardOverlayRed: {
    height: 150,
    borderRadius: 10,
    backgroundColor: Color.RED,
    opacity: 0.5,
  },
  cardClose: {
    width: 120,
    height: 100,
    marginTop: 2,
    marginRight: 5,
    position: 'absolute',
    alignSelf: 'center',
    flex: 1,
  },
  cardBackground: {
    flex: 1,
    backgroundColor: '#00CE9F',
    width: width / 2.3,
    resizeMode: 'cover',
  },
  noAgentCol: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  noAgentCard: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
    width: width / 2,
  },
});

export default HomeScreen;
