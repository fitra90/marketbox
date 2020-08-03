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
      <StatusBar
        hidden={false}
        barStyle="dark-content"
        style={{backgroundColor: Color.LIGHT_GREEN}}
      />
      <Header
        style={{backgroundColor: 'white'}}
        searchBar
        rounded
        androidStatusBarColor={'#FFFFFF'}>
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
            {agents.totalRow < 1 ? (
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
              <View></View>
            )}
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
  slides: {
    height: width / 2 + 30,
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
