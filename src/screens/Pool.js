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

const widthWindow = Dimensions.get('window').width;

function Pool({navigation}) {
  return (
    <Container>
      <StatusBar hidden={false} style={{backgroundColor: Color.LIGHT_GREEN}} />

      <Header
        style={{backgroundColor: 'white'}}
        androidStatusBarColor={Color.LIGHT_GREEN}>
        <Left>
          <TouchableNativeFeedback onPress={() => navigation.goBack()}>
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
          <Title style={{color: 'black', fontSize: 22, marginLeft: -10}}>
            Ta-Nia
          </Title>
        </Body>
        <Right>
          <Input placeholder="Pencarian" style={{textAlign: 'right', marginRight:10}} />
          <TouchableOpacity>
            <Icon name="search" size={30} style={{marginBottom: 10}} />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>
        <Card transparent>
          <CardItem>
            <Body>
              <ScrollView horizontal={true}>
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
                        source={require('../assets/taniamart.jpeg')}>
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
                          Ta-Nia Mart
                        </Text>
                      </ImageBackground>
                    </Col>
                  </TouchableOpacity>
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
                        source={require('../assets/pintar.jpeg')}>
                        <View
                          style={{
                            width: 140,
                            height: 110,
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
                          Pasar Gajah
                        </Text>
                      </ImageBackground>
                    </Col>
                  </TouchableOpacity>
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
                        source={require('../assets/frozen.jpg')}>
                        <View
                          style={{
                            width: 140,
                            height: 110,
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
                          Frozen Food
                        </Text>
                      </ImageBackground>
                    </Col>
                  </TouchableOpacity>
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
                        source={require('../assets/buah.jpg')}>
                        <View
                          style={{
                            width: 140,
                            height: 110,
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
                          Watermelon Buah
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
                    source={require('../assets/indomie.jpg')}
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
          </TouchableOpacity>
        </Col>
        <Col style={{marginHorizontal: 5}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductDetail')}>
            <Card>
              <CardItem>
                <Body>
                  <Image
                    source={require('../assets/bimoli.jpg')}
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
                <Text style={{fontSize: 14, alignSelf: 'center'}}>
                  Minyak Goreng Bimoli 1 Liter
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
          </TouchableOpacity>
        </Col>
      </Grid>
      <Grid>
        <Col style={{marginHorizontal: 5}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductDetail')}>
            <Card>
              <CardItem>
                <Body>
                  <Image
                    source={require('../assets/aqua1.jpg')}
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
                  Aqua 1 Liter
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
                  Rp. 6.000
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
                    source={require('../assets/shampo.jpg')}
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
                <Text style={{fontSize: 14, alignSelf: 'center'}}>
                  Shampo Clear 70 ml
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
                  Rp. 11.000
                </Text>
                <Button transparent>
                  <Text style={{color: Color.DARK_BROWN}}>Detail</Text>
                </Button>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Col>
      </Grid>
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
                      width: 150,
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
                      width: 150,
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
      <Grid>
        <Col style={{marginHorizontal: 5}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductDetail')}>
            <Card>
              <CardItem>
                <Body>
                  <Image
                    source={require('../assets/miesedap.jpg')}
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
                  Mie Sedap Rasa Kari Special
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
                  Rp. 2.500
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
                    source={require('../assets/dove.jpg')}
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
                <Text style={{fontSize: 14, alignSelf: 'center'}}>
                  Dove Nourishing Oil Care Shampoo 160 ml
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
      <Grid>
        <Col style={{marginHorizontal: 5}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductDetail')}>
            <Card>
              <CardItem>
                <Body>
                  <Image
                    source={require('../assets/lemineral.jpg')}
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
                  Le Minerale 1.5 Liter
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
                  Rp. 5.500
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
                    source={require('../assets/beras.png')}
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
                <Text style={{fontSize: 14, alignSelf: 'center'}}>
                  Beras Pulen 5 Kg
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
                  Rp. 60.000
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
