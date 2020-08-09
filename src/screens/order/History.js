import * as React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import {
  Container,
  Header,
  Right,
  Body,
  Card,
  CardItem,
  CheckBox,
  Input,
  Content,
  Thumbnail,
  Title,
  Left,
  Button,
  Icon,
} from 'native-base';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

function History({navigation}) {
  return (
    <Container>
      <Header
        style={{backgroundColor: 'white'}}
        iosBarStyle="dark-content"
        androidStatusBarColor="#FFFFFF">
        <Body>
          <Title style={{color: 'black', fontSize: 22, marginLeft: 10}}>
            Riwayat Belanja
          </Title>
        </Body>
        <Right>
          <TouchableNativeFeedback>
            <Button hasText transparent>
              <Text style={{color: Color.RED}}>BERSIHKAN</Text>
            </Button>
          </TouchableNativeFeedback>
        </Right>
      </Header>
      <Content>
        <ScrollView>
          <Card>
            <CardItem>
              <Left style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                <Text style={{marginBottom: 10}}>ID Transaksi: 1234567</Text>

                <Body
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                    marginLeft: -5,
                  }}>
                  <Thumbnail
                    source={require('../../assets/alfamart.jpeg')}
                    style={{width: 40, height: 40, marginRight: 10}}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <Text>Toko Alfamart</Text>
                    <Text note style={{color: 'grey', fontStyle: 'italic'}}>
                      Pedagang Resmi
                    </Text>
                  </View>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{height: 130, marginBottom: 10}}>
              <Left>
                <View>
                  <Text>20 Juni 2020</Text>
                  <Text
                    style={{
                      color: Color.DARK_GREEN,
                      fontSize: 16,
                      fontStyle: 'italic',
                    }}>
                    SELESAI
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../../assets/minyak.jpg')}
                    style={{
                      height: 200,
                      marginLeft: 10,
                      width: 120,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </Left>

              <Right style={{marginLeft: -20}}>
                <Body style={{justifyContent: 'center'}}>
                  <Text style={{fontSize: 16, fontWeight: '500'}}>
                    Minyak Goreng 2 L
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
                  <View
                    style={{flexDirection: 'row', marginTop: 15, width: 100}}>
                    <Button
                      large
                      onPress={() => navigation.navigate('ProductDetail')}
                      style={{
                        padding: 10,
                        marginLeft: 15,
                        height: 25,
                        backgroundColor: Color.DARK_GREEN,
                      }}>
                      <Text style={{color: 'white'}}>Beli Lagi</Text>
                    </Button>
                  </View>
                </Body>
              </Right>
            </CardItem>
            <CardItem style={{height: 130, marginBottom: 10}}>
              <Left>
                <View>
                  <Text>20 Juni 2020</Text>
                  <Text
                    style={{
                      color: Color.DARK_GREEN,
                      fontSize: 16,
                      fontStyle: 'italic',
                    }}>
                    SELESAI
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../../assets/beras.png')}
                    style={{
                      height: 200,
                      marginLeft: 10,
                      width: 120,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </Left>

              <Right style={{marginLeft: -20}}>
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
                  <View
                    style={{flexDirection: 'row', marginTop: 15, width: 100}}>
                    <Button
                      large
                      onPress={() => navigation.navigate('ProductDetail')}
                      style={{
                        padding: 10,
                        marginLeft: 15,
                        height: 25,
                        backgroundColor: Color.DARK_GREEN,
                      }}>
                      <Text style={{color: 'white'}}>Beli Lagi</Text>
                    </Button>
                  </View>
                </Body>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                <Text style={{marginBottom: 10}}>ID Transaksi: 1234567</Text>

                <Body
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                    marginLeft: -5,
                  }}>
                  <Thumbnail
                    source={require('../../assets/okoc.jpg')}
                    style={{width: 40, height: 40, marginRight: 10}}
                  />
                  <View style={{flexDirection: 'column'}}>
                    <Text>Toko OKE OCE</Text>
                    <Text note style={{color: 'grey', fontStyle: 'italic'}}>
                      Pedagang Resmi
                    </Text>
                  </View>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{height: 130, marginBottom: 10}}>
              <Left>
                <View>
                  <Text>20 Juni 2020</Text>
                  <Text
                    style={{
                      color: Color.DARK_GREEN,
                      fontSize: 16,
                      fontStyle: 'italic',
                    }}>
                    SELESAI
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../../assets/indomie.jpg')}
                    style={{
                      height: 200,
                      marginLeft: 10,
                      width: 120,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </Left>

              <Right style={{marginLeft: -20}}>
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
                  <View
                    style={{flexDirection: 'row', marginTop: 15, width: 100}}>
                    <Button
                      large
                      onPress={() => navigation.navigate('ProductDetail')}
                      style={{
                        padding: 10,
                        marginLeft: 15,
                        height: 25,
                        backgroundColor: Color.DARK_GREEN,
                      }}>
                      <Text style={{color: 'white'}}>Beli Lagi</Text>
                    </Button>
                  </View>
                </Body>
              </Right>
            </CardItem>
          </Card>
        </ScrollView>
      </Content>
    </Container>
  );
}

export default History;
