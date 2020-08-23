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
            <CardItem
              style={{
                height: 130,
              }}>
              <Left>
                <Image
                  style={{width: 40, height: 40, alignSelf: 'flex-start'}}
                  source={require('../assets/icons/checked.png')}
                />
                <View
                  style={{
                    borderColor: Color.OUTLINE,
                    borderRadius: 10,
                    borderWidth: 1,
                    width: 80,
                    height: 80,
                    justifyContent: 'center',
                    marginLeft: 20,
                  }}>
                  <Image
                    source={require('../assets/minyak.jpg')}
                    style={{
                      height: 70,
                      width: 70,
                      alignSelf: 'center',
                      // resizeMode: 'contain',
                    }}
                  />
                </View>
              </Left>
              <Body style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'ProductSansRegular',
                    fontSize: 16,
                    color: Color.TEXT_PRIMARY,
                    marginTop: 30,
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
                <View style={{flexDirection: 'row', marginTop: 15, width: 150}}>
                  <Image
                    style={{width: 28, height: 28}}
                    source={require('../assets/icons/Trash.png')}
                  />
                  <Image
                    style={{width: 28, height: 28, marginLeft: 20}}
                    source={require('../assets/icons/minus/active.png')}
                  />
                  <Input
                    placeholder="1"
                    style={{
                      margin: 3,
                      paddingBottom: 25,
                      paddingTop: -10,
                      textAlign: 'center',
                    }}
                  />
                  <Image
                    style={{width: 28, height: 28, marginLeft: 3}}
                    source={require('../assets/icons/plus.png')}
                  />
                </View>
              </Body>
            </CardItem>
          </Card>
        </ScrollView>
      </Content>
      <Footer
        style={{
          backgroundColor: 'white',
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
            <Text style={{fontFamily: 'ProductSansRegular'}}>
              Total Harga:{' '}
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginTop: 5,
                fontFamily: 'ProductSansBold',
                color: Color.PRIMARY,
              }}>
              Rp. 208.000{' '}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Color.PRIMARY,
              marginVertical: 10,
              paddingHorizontal: 25,
              justifyContent: 'center',
              borderRadius: 5,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Delivery')}>
              <Text
                style={{
                  fontWeight: '200',
                  color: 'white',
                  fontSize: 16,
                  fontFamily: 'ProductSansBold',
                }}>
                Bayar ( 2 )
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Footer>
    </Container>
  );
}

export default Cart;
