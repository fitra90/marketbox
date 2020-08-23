import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Color from '../constants/Color';
import {
  Container,
  Header,
  Grid,
  Body,
  Card,
  ScrollableTab,
  CardItem,
  Content,
  Col,
  Title,
  Right,
  Input,
  Left,
  Tabs,
  Tab,
  Icon,
  Button,
} from 'native-base';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import api from '../constants/Api';
import Variables from '../constants/Variables';

const widthWindow = Dimensions.get('window').width;
const initData = {
  status: 'ok',
  totalRow: 0,
  data: [],
};

function Pool({route, navigation}) {
  // const agentId = route.params[0];
  // console.log(agentId);
  // const [shops, setShops] = useState(initData);

  // useEffect(() => {
  //   const fetchShops = async () => {
  //     try {
  //       const result = await api.get('/shops', {
  //         params: {
  //           pool: agentId,
  //         },
  //       });
  //       setShops(result.data);
  //       if (result.status != 'ok') {
  //         throw new Error('error');
  //       }
  //     } catch (error) {
  //       // console.log(error.response.status);
  //       if (error.response.status) {
  //         // setAShopNotFound(true);
  //       }
  //       Alert.alert(
  //         'Terjadi kesalahan jaringan',
  //         [
  //           {
  //             text: 'Gagal mendapatkan data toko',
  //           },
  //           {text: 'OK', onPress: () => console.log('OK Pressed')},
  //         ],
  //         {cancelable: false},
  //       );
  //     }
  //   };
  //   fetchShops();
  // }, []);
  // console.log(shops);

  return (
    <Container style={{backgroundColor: Color.BACKGROUND}}>
      <Header
        style={{backgroundColor: 'white'}}
        transparent
        iosBarStyle="dark-content"
        androidStatusBarColor="#FFFFFF">
        <Left>
          <TouchableNativeFeedback onPress={() => navigation.goBack()}>
            <View style={{padding: 10}}>
              <Image
                source={require('../assets/icons/Arrow.png')}
                style={{
                  height: 30,
                  width: 30,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </TouchableNativeFeedback>
        </Left>
        <Body>
          <Title style={{color: 'black', fontSize: 22, marginLeft: -10}}>
            Ta-Nia
          </Title>
        </Body>
        <Right>
          <Input style={{textAlign: 'right', marginRight: 10}} />
          <TouchableOpacity>
            <Image
              style={{width: 20, height: 20, marginRight: 3, marginBottom: 15}}
              source={require('../assets/icons/Shape.png')}
            />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>
        <Card transparent>
          <CardItem>
            <Body>
              <ScrollView horizontal={true}>
                {/* {shops.data.map((shop, index) => ( */}
                <Grid>
                  <TouchableOpacity onPress={() => {}}>
                    <Col
                      style={{
                        marginHorizontal: 5,
                      }}>
                      <ImageBackground
                        imageStyle={{borderRadius: 10}}
                        style={{
                          flex: 1,
                          borderRadius: 10,
                          backgroundColor: '#00CE9F',
                          height: 110,
                          width: 140,
                          resizeMode: 'cover',
                        }}
                        // source={{uri: Variables.SHOP_URL + shop.picture}}
                      >
                        <View
                          style={{
                            width: 140,
                            borderRadius: 10,
                            height: 110,
                            position: 'absolute',
                            backgroundColor: 'black',
                            opacity: 0.5,
                          }}></View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'white',
                            bottom: 0,
                            padding: 10,
                            position: 'absolute',
                          }}>
                          {/* {shop.name} */}
                        </Text>
                      </ImageBackground>
                    </Col>
                  </TouchableOpacity>
                </Grid>
                {/* ))} */}
              </ScrollView>
              <Tabs
                tabBarBackgroundColor="#fff"
                style={{marginTop: 20}}
                renderTabBar={() => <ScrollableTab />}>
                <Tab
                  heading="All"
                  tabStyle={{
                    backgroundColor: Color.PALE,
                    borderTopLeftRadius: 10,
                  }}
                  textStyle={{color: 'black'}}
                  activeTabStyle={{
                    backgroundColor: Color.RED,
                    borderTopLeftRadius: 10,
                  }}
                  activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                  <Tab1 navigation={navigation} />
                </Tab>
                <Tab
                  heading="Sembako"
                  tabStyle={{backgroundColor: Color.PALE}}
                  textStyle={{color: 'black'}}
                  activeTabStyle={{backgroundColor: Color.RED}}
                  activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                  <Tab2 />
                </Tab>
                <Tab
                  heading="Frozen Food"
                  tabStyle={{backgroundColor: Color.PALE}}
                  textStyle={{color: 'black'}}
                  activeTabStyle={{backgroundColor: Color.RED}}
                  activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                  <Tab3 />
                </Tab>
                <Tab
                  heading="Buah"
                  tabStyle={{backgroundColor: Color.PALE}}
                  textStyle={{color: 'black'}}
                  activeTabStyle={{backgroundColor: Color.RED}}
                  activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                  <Tab4 />
                </Tab>
                <Tab
                  heading="Minuman"
                  tabStyle={{backgroundColor: Color.PALE}}
                  textStyle={{color: 'black'}}
                  activeTabStyle={{backgroundColor: Color.RED}}
                  activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                  <Tab5 />
                </Tab>
              </Tabs>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

function Tab1(props) {
  return (
    <View style={{marginTop: 10}}>
      <Grid>
        <Col style={{marginHorizontal: 5}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductDetail')}>
            <Card>
              <CardItem>
                <Body>
                  <Image
                    source={require('../assets/sania.jpg')}
                    style={{
                      height: 150,
                      alignSelf: 'center',
                      width: 130,
                      resizeMode: 'contain',
                    }}
                  />
                </Body>
              </CardItem>
              <CardItem>
                <Text style={{fontSize: 16, alignSelf: 'center'}}>
                  Minyak Goreng Sania 1 Liter
                </Text>
                <Body></Body>
              </CardItem>
              <CardItem
                footer
                bordered
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: Color.DARK_GREEN,
                  }}>
                  Rp. 26.000
                </Text>
                <Button transparent>
                  <Text style={{color: Color.DARK_BROWN}}>Detail</Text>
                </Button>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Col>
        <Col style={{marginHorizontal: 5}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductDetail')}>
            <Card>
              <CardItem>
                <Body>
                  <Image
                    source={require('../assets/aqua600.jpeg')}
                    style={{
                      height: 150,
                      alignSelf: 'center',
                      width: 130,
                      resizeMode: 'contain',
                    }}
                  />
                </Body>
              </CardItem>
              <CardItem>
                <Text style={{fontSize: 14, alignSelf: 'center'}}>
                  AQUA 600 ml
                </Text>
                <Body></Body>
              </CardItem>
              <CardItem
                footer
                bordered
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: Color.DARK_GREEN,
                  }}>
                  Rp. 3.500
                </Text>
                <Button transparent>
                  <Text style={{color: Color.DARK_BROWN}}>Detail</Text>
                </Button>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Col>
      </Grid>
    </View>
  );
}

function Tab2() {
  return (
    <View style={{marginTop: 10}}>
      <Text>Barang Kosong</Text>
    </View>
  );
}

function Tab3() {
  return (
    <View style={{marginTop: 10}}>
      <Text>Barang Kosong</Text>
    </View>
  );
}

function Tab4() {
  return (
    <View style={{marginTop: 10}}>
      <Text>Barang Kosong</Text>
    </View>
  );
}

function Tab5() {
  return (
    <View style={{marginTop: 10}}>
      <Text>Barang Kosong</Text>
    </View>
  );
}

export default Pool;
