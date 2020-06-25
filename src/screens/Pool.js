import * as React from 'react';
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

const widthWindow = Dimensions.get('window').width;

function Pool({navigation}) {
  return (
    <Container>
      <StatusBar hidden={false} style={{backgroundColor: Color.LIGHT_GREEN}} />

      <Header
        style={{backgroundColor: 'white'}}
        androidStatusBarColor={Color.LIGHT_GREEN}>
        <Left>
          <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>
            <View style={{padding: 10}}>
              <Image
                source={require('../assets/back.png')}
                style={{
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </TouchableNativeFeedback>
        </Left>
        <Body>
          <Title style={{color: 'black', fontSize: 22, marginLeft: -55}}>
            Pasar Tanah Abang
          </Title>
        </Body>
      </Header>
      <Content>
        <Card transparent>
          <CardItem header bordered>
            <View
              style={{
                flexDirection: 'row',
                marginTop: -5,
              }}>
              <Image
                style={{width: 25, height: 25, marginRight: 5}}
                source={require('../assets/pointer.png')}
              />
              <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 7}}>
                Toko Terdekat
              </Text>
            </View>
          </CardItem>

          <CardItem style={{marginTop: -20}}>
            <Body>
              <ScrollView horizontal={true}>
                <Grid>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Pembayaran')}>
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
                          height: 100,
                          width: 130,
                          resizeMode: 'cover',
                        }}
                        source={require('../assets/alfamart-toko.jpg')}>
                        <View
                          style={{
                            width: 130,
                            borderRadius: 10,
                            height: 100,
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
                          Toko Alfamart
                        </Text>
                      </ImageBackground>
                    </Col>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Pengiriman')}>
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
                          height: 100,
                          width: 130,
                          resizeMode: 'cover',
                        }}
                        source={require('../assets/pintar.jpeg')}>
                        <View
                          style={{
                            width: 130,
                            height: 100,
                            borderRadius: 10,
                            positio: 'absolute',
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
                          Warung Pintar
                        </Text>
                      </ImageBackground>
                    </Col>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Pengiriman')}>
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
                          height: 100,
                          width: 130,
                          resizeMode: 'cover',
                        }}
                        source={require('../assets/ococ.jpg')}>
                        <View
                          style={{
                            width: 130,
                            height: 100,
                            borderRadius: 10,
                            positio: 'absolute',
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
                          Toko OK OCE
                        </Text>
                      </ImageBackground>
                    </Col>
                  </TouchableOpacity>
                </Grid>
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
                  <Tab1 />
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
                  heading="Sayuran"
                  tabStyle={{backgroundColor: Color.PALE}}
                  textStyle={{color: 'black'}}
                  activeTabStyle={{backgroundColor: Color.RED}}
                  activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                  <Tab3 />
                </Tab>
                <Tab
                  heading="Daging"
                  tabStyle={{backgroundColor: Color.PALE}}
                  textStyle={{color: 'black'}}
                  activeTabStyle={{backgroundColor: Color.RED}}
                  activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>
                  <Tab4 />
                </Tab>
                <Tab heading="Tab5">
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

function Tab1() {
  return (
    <View style={{marginTop: 10}}>
      <Grid>
        <Col>
          <Card>
            <CardItem>
              <Body>
                <Image
                  source={require('../assets/indomie.jpg')}
                  style={{
                    height: 150,
                    alignSelf: 'center',
                    width: 220,
                    resizeMode: 'contain',
                  }}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Text style={{fontSize: 16, alignSelf: 'center'}}>
                Indomie 1 Karton
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
                Rp. 124.000
              </Text>
              <Button transparent>
                <Text style={{color: Color.DARK_BROWN}}>Detail</Text>
              </Button>
            </CardItem>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardItem>
              <Body>
                <Image
                  source={require('../assets/minyak.jpg')}
                  style={{
                    height: 150,
                    alignSelf: 'center',
                    width: 220,
                    resizeMode: 'contain',
                  }}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Text style={{fontSize: 16, alignSelf: 'center'}}>
                Minyak Goreng 2 L
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
                Rp. 24.000
              </Text>
              <Button transparent>
                <Text style={{color: Color.DARK_BROWN}}>Detail</Text>
              </Button>
            </CardItem>
          </Card>
        </Col>
      </Grid>

      <Grid>
        <Col>
          <Card>
            <CardItem>
              <Body>
                <Image
                  source={require('../assets/telur.jpg')}
                  style={{
                    height: 150,
                    alignSelf: 'center',
                    width: 150,
                    resizeMode: 'contain',
                  }}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Text style={{fontSize: 16, alignSelf: 'center'}}>
                Indomie 1 Karton
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
                Rp. 124.000
              </Text>
              <Button transparent>
                <Text style={{color: Color.DARK_BROWN}}>Detail</Text>
              </Button>
            </CardItem>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardItem>
              <Body>
                <Image
                  source={require('../assets/beras.png')}
                  style={{
                    height: 150,
                    alignSelf: 'center',
                    width: 220,
                    resizeMode: 'contain',
                  }}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Text style={{fontSize: 16, alignSelf: 'center'}}>
                Minyak Goreng 2 L
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
                Rp. 24.000
              </Text>
              <Button transparent>
                <Text style={{color: Color.DARK_BROWN}}>Detail</Text>
              </Button>
            </CardItem>
          </Card>
        </Col>
      </Grid>
    </View>
  );
}

function Tab2() {
  return (
    <View style={{marginTop: 10}}>
      <Text>Tab2</Text>
    </View>
  );
}

function Tab3() {
  return (
    <View style={{marginTop: 10}}>
      <Text>Tab3</Text>
    </View>
  );
}

function Tab4() {
  return (
    <View style={{marginTop: 10}}>
      <Text>Tab4</Text>
    </View>
  );
}

function Tab5() {
  return (
    <View style={{marginTop: 10}}>
      <Text>Tab5</Text>
    </View>
  );
}

export default Pool;
