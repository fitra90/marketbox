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

function Cart({navigation}) {
  return (
    <Container>
      <StatusBar hidden={false} style={{backgroundColor: Color.LIGHT_GREEN}} />
      <Header
        style={{backgroundColor: 'white'}}
        androidStatusBarColor={Color.LIGHT_GREEN}>
        <Body>
          <Title style={{color: 'black', fontSize: 22, marginLeft: 10}}>
            Keranjang
          </Title>
        </Body>
        <Right style={{marginLeft: -20}}>
          <TouchableOpacity>
            <Button transparent hasText>
              <Icon name="chatbubbles" style={{color: 'black'}} />
            </Button>
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>
        <ScrollView>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require('../assets/alfamart.jpeg')}
                  style={{width: 40, height: 40}}
                />
                <Body>
                  <Text>Toko Alfamart</Text>
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
                  source={require('../assets/minyak.jpg')}
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
                  Minyak Goreng 2L
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: Color.DARK_BROWN,
                    marginTop: 5,
                  }}>
                  Rp. 24.000
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
            <Button success style={{paddingHorizontal: 20}} onPress={()=>navigation.navigate('Delivery')}>
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
