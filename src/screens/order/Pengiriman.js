import * as React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  Linking,
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
  ListItem,
  Icon,
  Content,
  Footer,
  Title,
  Left,
  Button,
  Radio,
} from 'native-base';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const widthWindow = Dimensions.get('window').width;
function Pengiriman({navigation}) {
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
          <Title style={{color: 'black', fontSize: 22}}>Pengiriman</Title>
        </Body>
        <Right>
          <TouchableOpacity>
            <Button hasText transparent>
              <Text style={{color: Color.RED}}>BATALKAN</Text>
            </Button>
          </TouchableOpacity>
        </Right>
      </Header>
      <Content>
        <ScrollView>
          <Card>
            <CardItem header bordered>
              <Text
                style={{
                  fontSize: 17,
                }}>
                1. Alamat Pengiriman
              </Text>
            </CardItem>
            <CardItem>
              <View style={{flexDirection: 'row', paddingBottom: 10}}>
                <View style={{flex: 1}}>
                  <Text style={{fontStyle: 'italic'}}>Nama Penerima:</Text>
                  <Text style={{fontWeight: 'bold'}}>Edi Sudrajat</Text>
                  <Text style={{fontStyle: 'italic', marginTop: 10}}>
                    Alamat:
                  </Text>
                  <Text style={{fontWeight: 'bold'}}>
                    JL. Jenderal Sudirman, No. 54, Bontang, Kalimantan Timur,
                    75311
                  </Text>
                </View>
                <View>
                  <Button
                    light
                    style={{padding: 10, backgroundColor: Color.PALE}}>
                    <Text>Ganti Alamat</Text>
                  </Button>
                </View>
              </View>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text
                style={{
                  fontSize: 17,
                }}>
                2. Konfirmasi Pesanan
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="md-checkmark-circle-outline" />
                <Text style={{marginLeft: 10}}>Minyak Goreng 2 L</Text>
              </Left>
              <Right>
                <Text>1 x Rp. 24.000</Text>
              </Right>
            </CardItem>

            <View
              style={{
                borderBottomColor: 'silver',
                borderBottomWidth: 1,
              }}
            />
            <CardItem>
              <Left>
                <Icon active name="md-checkmark-circle-outline" />
                <Text style={{marginLeft: 10}}>Biaya Pengiriman</Text>
              </Left>
              <Right>
                <Text>Rp. 10.000</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left style={{marginLeft: 3}}>
                <Icon active name="md-calculator" />
                <Text style={{fontWeight: 'bold', marginLeft: 10}}>Total</Text>
              </Left>
              <Right style={{alignItems: 'flex-end'}}>
                <Text style={{fontWeight: 'bold'}}>Rp. 34.000</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={{height: 200}}>
            <CardItem header bordered>
              <Text
                style={{
                  fontSize: 17,
                }}>
                3. Metode Pembayaran
              </Text>
            </CardItem>
            <CardItem bordered style={{marginTop:-15}}>
              <Container>
                <Content>
                  <ListItem>
                    <Left>
                      <Text>Transfer Bank</Text>
                    </Left>
                    <Right>
                      <Radio selectedColor={Color.DARK_GREEN} selected={true} />
                    </Right>
                  </ListItem>
                  <ListItem>
                    <Left>
                      <Text>Cash On Delivery (COD)</Text>
                    </Left>
                    <Right>
                      <Radio selected={false} />
                    </Right>
                  </ListItem>
                </Content>
              </Container>
            </CardItem>
          </Card>
        </ScrollView>
      </Content>
      <Footer style={{backgroundColor: Color.RED, flex: 0}}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.navigate('Pembayaran');
          }}>
          <Button
            style={{
              width: widthWindow,
              backgroundColor: Color.RED,
              height: '100%',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Konfirmasi Pengiriman
            </Text>
          </Button>
        </TouchableNativeFeedback>
      </Footer>
    </Container>
  );
}

export default Pengiriman;
