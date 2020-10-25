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
                      <View
                        style={{
                          flex: 1,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          backgroundColor: Color.PRIMARY,
                          height: 150,
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
                          }}>
                          <Image
                            source={require('../assets/frozen.jpg')}
                            style={{
                              height: 120,
                              alignSelf: 'center',
                              width: 125,
                              marginTop: -10,
                              borderRadius: 10,
                              resizeMode: 'contain',
                            }}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: 'white',
                            bottom: 0,
                            paddingBottom: 10,
                            paddingHorizontal: 10,
                            fontFamily: 'ProductSansRegular',
                            position: 'absolute',
                          }}>
                          {/* {shop.name} */}
                          Warung Ta-Nia ssas
                        </Text>
                      </View>
                    </Col>
                  </TouchableOpacity>
                </Grid>
                {/* ))} */}
              </ScrollView>
              <Tabs
                tabBarBackgroundColor="#fff"
                style={{marginTop: 20, marginBottom: 10}}
                renderTabBar={() => (
                  <ScrollableTab
                    style={{
                      borderTopWidth: 0.5,
                      borderBottomColor: 'transparent',
                      marginTop: -20,
                      borderTopColor: Color.OUTLINE,
                      borderBottomWidth: 0,
                    }}
                  />
                )}>
                <Tab
                  heading="All"
                  tabStyle={{
                    backgroundColor: Color.BACKGROUND,
                    borderRadius: 30,
                    borderColor: Color.OUTLINE,
                    borderWidth: 1,
                    marginTop: 10,
                    marginRight: 10,
                  }}
                  textStyle={{
                    color: Color.INACTIVE,
                    fontFamily: 'ProductSansReglar',
                  }}
                  activeTabStyle={{
                    backgroundColor: Color.PRIMARYOPACITY,
                    borderRadius: 30,
                    borderColor: Color.PRIMARY,
                    borderWidth: 1,
                    marginTop: 10,
                    marginBottom: 10,
                    marginRight: 10,
                  }}
                  activeTextStyle={{
                    color: Color.TEXT_PRIMARY,
                    fontFamily: 'ProductSansBold',
                  }}>
                  <Tab1 />
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
                <Text
                  style={{
                    fontSize: 16,
                    alignSelf: 'center',
                    fontFamily: 'ProductSansRegular',
                  }}>
                  Minyak Goreng Sania 1 Liter
                </Text>
              </CardItem>
              <CardItem
                footer
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 16,
                    fontFamily: 'ProductSansRegular',
                    color: Color.PRIMARY,
                  }}>
                  Rp. 26.000
                </Text>
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
              </CardItem>
              <CardItem
                footer
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: Color.PRIMARY,
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
