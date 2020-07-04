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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Col, Row, Grid} from 'react-native-easy-grid';
import api from '../constants/Api';

let {height, width} = Dimensions.get('window');

const initData = {
  status: 'ok',
  totalRow: 0,
  data: [],
};

function HomeScreen({navigation}) {
  const SliderActiveDot = <View style={styles.activeDot} />;

  const SliderDots = <View style={styles.sliderDots} />;

  const [promo, setPromo] = useState();
  const [agents, setAgents] = useState(initData);

  useEffect(() => {
    const fetchAgents = async () => {
      const result = await api.get('/pools', {
        params: {
          column: 'postal_code',
          data: 123456,
        },
      });
      setAgents(result.data);
    };
    fetchAgents();
  }, []);
  console.log(agents);

  // useEffect(() => {
  //   const fetchAgents = async () => {
  //     try {
  //       const response = await api.get('/pools', {
  //         params: {
  //           column: 'postal_code',
  //           data: 123456,
  //         },
  //       });
  //       setAgents((current) => {
  //         return {
  //           ...response,
  //           data: [...current.data, ...response.data],
  //           totalRow: response.totalRow,
  //           status: response.status,
  //         };
  //       });
  //       if (resuresponselt.status != 'ok') {
  //         throw new Error('error');
  //       }
  //     } catch (error) {}
  //   };
  //   fetchAgents();
  // });
  // useEffect(() => {
  //   console.log(agents);
  // }, []);
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
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: 'ProductSans-Bold',
                }}>
                Agen Terdekat
              </Text>
            </View>

            <Grid style={styles.gridStyle}>
              {agents.data.map((agent) => (
                // <Text key={agent.id}>{agent.name}</Text>
                <TouchableOpacity
                  onPress={(() => navigation.navigate('Pool'), agent.id)}>
                  <Col>
                    <ImageBackground
                      imageStyle={{borderRadius: 10}}
                      style={styles.cardBackground}
                      source={require('../assets/taniamart.jpeg')}>
                      <View style={styles.cardOverlay}></View>
                      <Text style={styles.cardTitle}>{agent.name}</Text>
                    </ImageBackground>
                  </Col>
                </TouchableOpacity>
              ))}

              {/*    <TouchableOpacity
                  onPress={
                    (() => navigation.navigate('Pool'),
                    {
                      poolId: Math.floor(Math.random() * 100),
                    })
                  }>
                  <Col>
                    <ImageBackground
                      imageStyle={{borderRadius: 10}}
                      style={styles.cardBackground}
                      source={require('../assets/taniamart.jpeg')}>
                      <View style={styles.cardOverlay}></View>
                      <Text style={styles.cardTitle}>Ta-nia</Text>
                    </ImageBackground>
                  </Col>
                </TouchableOpacity>;
              })} */}
              {/* <TouchableOpacity onPress={() => navigation.navigate('Pool')}>
                <Col>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={styles.cardBackground}
                    source={require('../assets/taniamart.jpeg')}>
                    <View style={styles.cardOverlay}></View>
                    <Text style={styles.cardTitle}>Ta-nia</Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Col style={{height: 150}}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={styles.cardBackground}
                    source={require('../assets/pusat-grosir-surabaya.jpg')}>
                    <View style={styles.cardOverlay}></View>
                    <Text style={styles.cardTitle}>Agen Bontang 1</Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity> */}
            </Grid>
            <Grid style={styles.gridStyle}>
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
                  <View style={styles.cardOverlayRed}></View>
                  <Image
                    style={styles.cardClose}
                    source={require('../assets/close.png')}
                  />

                  <Text style={styles.cardTitle}>Agen Bontang 2</Text>
                </ImageBackground>
              </Col>
              <TouchableOpacity onPress={() => {}}>
                <Col style={{height: 150}}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={styles.cardBackground}
                    source={require('../assets/tanahabang.jpg')}>
                    <View style={styles.cardOverlay}></View>
                    <Text style={styles.cardTitle}>Agen Bontang 3</Text>
                  </ImageBackground>
                </Col>
              </TouchableOpacity>
            </Grid>
            <Grid>
              <Col style={{alignItems: 'center', justifyContent: 'center'}}>
                <Card
                  style={{
                    flex: 1,

                    width: width / 2,
                  }}>
                  <Text style={{margin: 10}}>Belum Ada Agen Terdekat.</Text>
                  {/* <Button onClick={() => {}}>
                    <Text>Daftar Menjadi Agen Marketbox.</Text>
                  </Button>
                  <Button onClick={() => {}}>
                    <Text>Ajukan Pembukaan Agen.</Text>
                  </Button> */}
                </Card>
              </Col>
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
    marginTop: 15,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    color: 'white',
    bottom: 0,
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
    borderRadius: 10,
    backgroundColor: '#00CE9F',
    width: width / 2.3,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
