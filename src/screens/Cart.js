import React, {useState, createContext} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  ListItem,
} from 'react-native';
import Color from '../constants/Color';
import styles from '../styles/Global';
import {
  Container,
  Header,
  Footer,
  Right,
  CheckBox,
  Body,
  Card,
  CardItem,
  Content,
  Thumbnail,
  Title,
  Left,
  Button,
  Input,
  Icon,
} from 'native-base';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import HorizontalLiner from '../components/HorizontalLiner';

function Cart({navigation}) {
  return (
    <Container style={{backgroundColor: Color.BACKGROUND}}>
      <Header
        style={{backgroundColor: 'white'}}
        transparent
        iosBarStyle="dark-content"
        androidStatusBarColor="#FFFFFF">
        <Body>
          <Title
            style={{
              color: Color.TEXT_PRIMARY,
              fontSize: 20,
              marginLeft: 10,
              fontFamily: 'ProductSansBold',
            }}>
            Keranjang
          </Title>
        </Body>
        <Right style={{marginLeft: -20}}>
          <TouchableOpacity>
            <Image
              style={{width: 30, height: 30, marginRight: 3}}
              source={require('../assets/icons/Chat.png')}
            />
          </TouchableOpacity>
        </Right>
      </Header>
      <View></View>
      <Content style={{marginTop: 10}}>
        <ScrollView>
          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require('../assets/alfamart.jpeg')}
                  style={{width: 40, height: 40}}
                />
                <Body>
                  <Text style={{fontFamily: 'ProductSansBold', fontSize: 16}}>
                    Toko Alfamart
                  </Text>
                  <Text
                    note
                    style={{
                      color: Color.TEXT_SECONDARY,
                      fontFamily: 'ProductSansRegular',
                      fontSize: 12,
                    }}>
                    Pedagang Resmi
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <HorizontalLiner />
            <CardItem style={{height: 130}}>
              <Left>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assets/icons/checked.png')}
                />
                <Image
                  source={require('../assets/minyak.jpg')}
                  style={{
                    height: 180,
                    width: 100,
                    marginLeft: 10,
                    resizeMode: 'contain',
                  }}
                />
              </Left>
              <Body style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'ProductSansRegular',
                    fontSize: 16,
                    color: Color.TEXT_PRIMARY,
                    fontWeight: '500',
                  }}>
                  Minyak Goreng 2L
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'ProductSansRegular',
                    color: Color.PRIMARY,
                    marginTop: 5,
                  }}>
                  Rp. 23.500
                </Text>
                <View style={{flexDirection: 'row', marginTop: 15, width: 100}}>
                  <Button
                    style={{
                      paddingHorizontal: 10,
                      height: 25,
                      backgroundColor: Color.PALE,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>-</Text>
                  </Button>
                  <Input
                    placeholder="1"
                    style={{
                      margin: 3,
                      paddingBottom: 25,
                      paddingTop: -10,
                      borderBottomColor: 'black',
                      textAlign: 'center',
                    }}
                  />
                  <Button
                    style={{
                      paddingHorizontal: 10,
                      height: 25,
                      backgroundColor: Color.PALE,
                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>+</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
            <CardItem style={{height: 130, marginBottom: 10}}>
              <Left>
                <CheckBox checked={true} color="green" />
                <Image
                  source={require('../assets/beras.png')}
                  style={{
                    height: 200,
                    width: 120,
                    marginLeft: 30,
                    resizeMode: 'contain',
                  }}
                />
              </Left>
              <Body style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>
                  Beras 5 Kg
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: Color.DARK_BROWN,
                    marginTop: 5,
                  }}>
                  Rp. 60.000
                </Text>
                <View style={{flexDirection: 'row', marginTop: 15, width: 100}}>
                  <Button
                    style={{
                      paddingHorizontal: 10,
                      height: 25,
                      backgroundColor: Color.PALE,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>-</Text>
                  </Button>
                  <Input
                    placeholder="1"
                    style={{
                      margin: 3,
                      paddingBottom: 25,
                      paddingTop: -10,
                      borderBottomColor: 'black',
                      textAlign: 'center',
                    }}
                  />
                  <Button
                    style={{
                      paddingHorizontal: 10,
                      height: 25,
                      backgroundColor: Color.PALE,
                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>+</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require('../assets/okoc.jpg')}
                  style={{width: 40, height: 40}}
                />
                <Body>
                  <Text>Toko OK OCE</Text>
                  <Text note style={{color: 'grey', fontStyle: 'italic'}}>
                    Pedagang Resmi
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{height: 130, marginBottom: 10}}>
              <Left>
                <CheckBox checked={true} color="green" />
                <Image
                  source={require('../assets/indomie.jpg')}
                  style={{
                    height: 200,
                    width: 120,
                    marginLeft: 30,
                    resizeMode: 'contain',
                  }}
                />
              </Left>
              <Body style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '500'}}>
                  Indomie 1 Karton
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: Color.DARK_BROWN,
                    marginTop: 5,
                  }}>
                  Rp. 124.000
                </Text>
                <View style={{flexDirection: 'row', marginTop: 15, width: 100}}>
                  <Button
                    style={{
                      paddingHorizontal: 10,
                      height: 25,
                      backgroundColor: Color.PALE,
                    }}>
                    <Text style={{fontWeight: 'bold'}}>-</Text>
                  </Button>
                  <Input
                    placeholder="1"
                    style={{
                      margin: 3,
                      paddingBottom: 25,
                      paddingTop: -10,
                      borderBottomColor: 'black',
                      textAlign: 'center',
                    }}
                  />
                  <Button
                    style={{
                      paddingHorizontal: 10,
                      height: 25,
                      backgroundColor: Color.PALE,
                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>+</Text>
                  </Button>
                </View>
              </Body>
            </CardItem>
          </Card>
        </ScrollView>
      </Content>
      <Footer
        style={{
          backgroundColor: Color.PALE,
          alignContent: 'center',
          paddingTop: 10,
          height: 70,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text>Total: </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rp. 208.000 </Text>
          </View>
          <View style={{}}>
            <Button
              success
              style={{paddingHorizontal: 20}}
              onPress={() => navigation.navigate('Delivery')}>
              <Text style={{fontWeight: '200', color: 'white', fontSize: 16}}>
                Bayar
              </Text>
            </Button>
          </View>
        </View>
      </Footer>
    </Container>
  );
}

export default Cart;
