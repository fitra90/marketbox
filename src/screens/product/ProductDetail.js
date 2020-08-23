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
              marginBottom: 25,
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
                fontSize: 22,
                fontFamily: 'ProductSansRegular',
                color: Color.TEXT_PRIMARY,
              }}>
              Beras 5 Kg
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: Color.PRIMARY,
                fontFamily: 'ProductSansRegular',
                marginTop: 10,
              }}>
              Rp. 60.000
            </Text>
          </View>
          <View style={{flex: 1}}>
            {/* <Text style={{alignSelf:'flex-end'}}>Promo</Text> */}
            <Image
              source={require('../../assets/icons/share.png')}
              style={{
                height: 25,
                width: 25,
                alignSelf: 'flex-end',
                marginTop: 20,
                marginRight: 10,
                marginRight: 10,
                resizeMode: 'contain',
              }}
            />
          </View>
        </Body>
      </CardItem>
      <CardItem>
        <Body>
          <Text
            style={{
              fontSize: 16,
              marginBottom: 5,
              fontFamily: 'ProductSansBold',
            }}>
            Deskripsi Produk
          </Text>
          <Text style={{fontFamily: 'ProductSansRegular', fontSize: 14}}>
            1. Sekelas Raja Lele {'\n'}
            2. Bebas pengawet dan pemutih sintetis{'\n'}
            3. Pulen dan wangi{'\n'}
            4. Bebas Kutu dan bau {'\n'}
          </Text>
          <Text
            style={{
              fontFamily: 'ProductSansRegular',
              fontSize: 16,
              marginVertical: 10,
              alignSelf: 'center',
              color: Color.BLUE,
            }}>
            Selengkapknya
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
}

function ActionButton(props) {
  return (
    <Footer style={{backgroundColor: 'white', height: 80}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignContent: 'space-between',
          marginTop: 17,
          justifyContent: 'center',
        }}>
        <Button
          onPress={() => {
            props.navigation.navigate('Cart');
          }}
          style={{
            width: 50,
            borderRadius: 5,
            backgroundColor: Color.LINER,
            marginRight: 10,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/icons/cartplus.png')}
            style={{
              height: 25,
              width: 25,
              alignSelf: 'center',
            }}
          />
        </Button>
        <Button
          onPress={() => {
            props.navigation.navigate('Delivery');
          }}
          style={{
            width: 300,
            backgroundColor: Color.PRIMARY,
            justifyContent: 'center',
            fontFamily: 'ProductSansRegular',
            marginBottom: 10,
            marginLeft: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'ProductSansRegular',
              color: 'white',
            }}>
            Beli Sekarang
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
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'ProductSansBold',
            }}>
            Produk Lainnya
          </Text>
          <ScrollView horizontal={true} style={{marginTop: 10}}>
            <Grid>
              <Col>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('ProductDetail')}>
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
                              fontSize: 18,
                              fontFamily: 'ProductSansRegular',
                            }}>
                            Indomie 1 Karton
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              color: Color.TEXT_PRIMARY,
                              fontFamily: 'ProductSansBold',
                            }}>
                            Rp. 110.000
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
                source={require('../../assets/icons/Arrow.png')}
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
          <Title
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'ProductSansRegular',
            }}>
            Detail Produk
          </Title>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image
              source={require('../../assets/icons/nav/inactive/cart.png')}
              style={{
                height: 30,
                width: 30,
                marginRight: 10,
                resizeMode: 'contain',
              }}
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
