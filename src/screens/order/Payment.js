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
  CheckBox,
  Input,
  Content,
  Footer,
  Title,
  Left,
  Button,
  Icon,
  FooterTab,
} from 'native-base';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';

const widthWindow = Dimensions.get('window').width;

function CashOnDelivery() {
  return (
    <Card>
      <CardItem header bordered style={{justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 18,
            color: Color.DARK_BROWN,
            fontStyle: 'italic',
          }}>
          Metode Cash On Delivery
        </Text>
      </CardItem>

      <CardItem>
        <Body>
          <Image
            source={require('../../assets/cod.png')}
            style={{
              height: 150,
              alignSelf: 'center',
              width: 220,
              marginBottom: 30,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              textAlign: 'center',
              marginBottom: 10,
            }}>
            Total Transaksi:
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 36,
              color: Color.DARK_GREEN,
              fontWeight: 'bold',
            }}>
            Rp. 208.000
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              textAlign: 'center',
              marginTop: 30,
            }}>
            Harap membayar dengan uang pas kepada petugas pengantaran
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body></Body>
      </CardItem>
      <CardItem
        footer
        bordered
        style={{justifyContent: 'center', flexDirection: 'column'}}>
        <Text style={{fontStyle: 'italic'}}>Terimakasih telah berbelanja!</Text>
      </CardItem>
    </Card>
  );
}

function TransferBank() {
  return (
    <Card>
      <CardItem header bordered style={{justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 18,
            color: Color.DARK_BROWN,
            fontStyle: 'italic',
          }}>
          Metode Transfer Bank
        </Text>
      </CardItem>

      <CardItem>
        <Body>
          <Text style={{alignSelf: 'center'}}>BANK BCA</Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
            }}>
            A.n : PT MARKETBOX
          </Text>

          <Text style={{alignSelf: 'center', marginTop: 10}}>
            Nomor Rekening:
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 32,
              fontWeight: 'bold',
            }}>
            31023902932
          </Text>
          <Image
            source={require('../../assets/bca.png')}
            style={{
              height: 150,
              alignSelf: 'center',
              width: 220,
              resizeMode: 'contain',
            }}
          />
          <Text style={{alignSelf: 'center', fontSize: 16}}>
            Total Transaksi:
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 36,
              color: Color.DARK_GREEN,
              fontWeight: 'bold',
            }}>
            Rp. 208.099
          </Text>
        </Body>
      </CardItem>
      <CardItem>
        <Body></Body>
      </CardItem>
      <CardItem
        footer
        bordered
        style={{justifyContent: 'center', flexDirection: 'column'}}>
        <Text style={{fontStyle: 'italic'}}>Terimakasih telah berbelanja!</Text>
      </CardItem>
    </Card>
  );
}

function FooterTransaksi(prop) {
  if (prop.metodePayment == 'cod') {
    return (
      <Footer
        style={{
          backgroundColor: Color.RED,
          flex: 0,
        }}>
        <TouchableNativeFeedback
          onPress={() => {
            prop.navigation.navigate('Home');
          }}>
          <Button
            style={{
              width: widthWindow,
              backgroundColor: Color.DARK_GREEN,
              height: '100%',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Beranda
            </Text>
          </Button>
        </TouchableNativeFeedback>
      </Footer>
    );
  } else {
    return (
      <Footer
        style={{
          backgroundColor: Color.RED,
          flex: 0,
        }}>
        <TouchableNativeFeedback
          onPress={() => {
            Linking.openURL('whatsapp://send?text=hello&phone=xxxxxxxxxxxxx');
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
              Konfirmasi Pembayaran
            </Text>
          </Button>
        </TouchableNativeFeedback>
      </Footer>
    );
  }
}

function Payment({navigation}) {
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
          <Title style={{color: 'black', fontSize: 22}}>Payment</Title>
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
          <CashOnDelivery />
          {/* <TransferBank /> */}
        </ScrollView>
      </Content>
      <FooterTransaksi metodePayment="cod" navigation={navigation} />
    </Container>
  );
}

export default Payment;
