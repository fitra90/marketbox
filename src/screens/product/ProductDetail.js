import * as React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  Linking,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Color from '../../constants/Color';
import {
  Container,
  Header,
  Right,
  Body,
  Card,
  CardItem,
  Grid,
  Input,
  Content,
  Footer,
  Title,
  Left,
  Button,
  Icon,
  Col,
} from 'native-base';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const widthWindow = Dimensions.get('window').width;

function ProductData() {
  return (
    <Card>
      <CardItem>
        <Body>
          <Image
            source={require('../../assets/beras.png')}
            style={{
              height: 250,
              alignSelf: 'center',
              width: 275,
              marginBottom: 30,
              resizeMode: 'contain',
            }}
          />
        </Body>
      </CardItem>
      <CardItem bordered style={{marginTop: -10}}>
        <Body
          style={{
            flex: 1,
            flexDirection: 'row',
            alignContent: 'space-between',
          }}>
          <View style={{}}>
            <Text
              style={{
                fontSize: 18,
              }}>
              Beras 5 Kg
            </Text>
            <Text
              style={{
                fontSize: 26,
                color: Color.DARK_GREEN,
              }}>
              Rp. 60.000
            </Text>
          </View>
          <View style={{flex: 1}}>
            {/* <Text style={{alignSelf:'flex-end'}}>Promo</Text> */}
            <Icon
              style={{
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 10,
                color: 'grey',
              }}
              name="share"
            />
          </View>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <Text style={{fontSize:16, fontWeight:'bold', marginBottom:5}}>Deskripsi Produk</Text>
          <Text>1. Sekelas Raja Lele</Text>
          <Text>2. Bebas pengawet dan pemutih sintetis</Text>
          <Text>3. Pulen dan wangi</Text>
          <Text>4. Bebas Kutu dan bau</Text>
        </Body>
      </CardItem>
    </Card>
  );
}

function ActionButton(props) {
  return (
    <Footer>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'space-between',
        }}>
        <Button
          onPress={() => {props.navigation.navigate('Cart')}}
          style={{
            width: (widthWindow * 1) / 4,
            backgroundColor: Color.PALE,
            justifyContent: 'center',
            height: '100%',
          }}>
          <Icon
            type="MaterialIcons"
            style={{color: 'black'}}
            name="shopping-cart"
          />
        </Button>
        <Button
          onPress={() => {props.navigation.navigate('Delivery')}}
          style={{
            width: (widthWindow * 3) / 4,
            backgroundColor: Color.RED,
            justifyContent: 'center',
            height: '100%',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Beli
          </Text>
        </Button>
      </View>
    </Footer>
  );
}

function RelatedProduct(props) {
  return (
    <Card>
      <CardItem>
        <Body>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Produk Lainnya</Text>
          <ScrollView horizontal={true} style={{marginTop: 10}}>
            <Grid>
              <Col>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('ProductDetail')
                  }>
                  <Card>
                    <CardItem>
                      <Body>
                        <Image
                          source={require('../../assets/indomie.jpg')}
                          style={{
                            height: 130,
                            alignSelf: 'center',
                            width: 155,
                            marginBottom: 10,
                            resizeMode: 'contain',
                          }}
                        />
                      </Body>
                    </CardItem>
                    <CardItem bordered style={{marginTop: -10}}>
                      <Body
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          alignContent: 'space-between',
                        }}>
                        <View style={{}}>
                          <Text
                            style={{
                              fontSize: 16,
                            }}>
                            Indomeie 1 Karton
                          </Text>
                          <Text
                            style={{
                              fontSize: 18,
                              color: Color.DARK_GREEN,
                            }}>
                            Rp. 110.000
                          </Text>
                        </View>
                        <View style={{flex: 1}}>
                          {/* <Text style={{alignSelf:'flex-end'}}>Promo</Text> */}
                          <Text
                            style={{
                              alignSelf: 'flex-end',
                              marginTop: 20,
                              color: 'grey',
                            }}>
                            LIHAT
                          </Text>
                        </View>
                      </Body>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('ProductDetail')
                  }>
                  <Card>
                    <CardItem>
                      <Body>
                        <Image
                          source={require('../../assets/minyak.jpg')}
                          style={{
                            height: 130,
                            alignSelf: 'center',
                            width: 155,
                            marginBottom: 10,
                            resizeMode: 'contain',
                          }}
                        />
                      </Body>
                    </CardItem>
                    <CardItem bordered style={{marginTop: -10}}>
                      <Body
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          alignContent: 'space-between',
                        }}>
                        <View style={{}}>
                          <Text
                            style={{
                              fontSize: 16,
                            }}>
                            Minyak Goreng 1 L
                          </Text>
                          <Text
                            style={{
                              fontSize: 18,
                              color: Color.DARK_GREEN,
                            }}>
                            Rp. 24.000
                          </Text>
                        </View>
                        <View style={{flex: 1}}>
                          {/* <Text style={{alignSelf:'flex-end'}}>Promo</Text> */}
                          <Text
                            style={{
                              alignSelf: 'flex-end',
                              marginTop: 20,
                              color: 'grey',
                            }}>
                            LIHAT
                          </Text>
                        </View>
                      </Body>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </Col>
            </Grid>
          </ScrollView>
        </Body>
      </CardItem>
    </Card>
  );
}

function ProductDetail({navigation}) {
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
                source={require('../../assets/back.png')}
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
          <Title style={{color: 'black', fontSize: 22}}>Detail Produk</Title>
        </Body>
        <Right>
          <TouchableOpacity
            onPress={() =>navigation.navigate('Cart')}>
            <Icon
              type="MaterialIcons"
              name="shopping-cart"
              style={{marginRight: 5}}
            />
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>
        <ScrollView>
          <ProductData />
          <RelatedProduct navigation={navigation} />
        </ScrollView>
      </Content>
      <ActionButton metodeProductDetail="cod" navigation={navigation} />
    </Container>
  );
}

export default ProductDetail;
