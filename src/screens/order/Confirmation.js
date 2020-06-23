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
function Confirmation({navigation}) {
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
          <Title style={{color: 'black', fontSize: 22}}>Confirmation</Title>
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
            <CardItem header bordered style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  color: Color.DARK_BROWN,
                  fontStyle: 'italic',
                }}>
                Metode Transfer Rekening
              </Text>
            </CardItem>

            <CardItem>
              <Body>
                <Text style={{alignSelf: 'center'}}>BANK BCA</Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  A.n : PT MARKETBOX
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
                <Text style={{alignSelf: 'center'}}>Nomor Rekening:</Text>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 32,
                    fontWeight: 'bold',
                  }}>
                  31023902932
                </Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              bordered
              style={{justifyContent: 'center', flexDirection: 'column'}}>
              <Text style={{fontStyle: 'italic'}}>
                Terimakasih telah berbelanja!
              </Text>
            </CardItem>
          </Card>
        </ScrollView>
      </Content>
      <Footer style={{backgroundColor: Color.RED, flex: 0}}>
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
              Konfirmasi Confirmation
            </Text>
          </Button>
        </TouchableNativeFeedback>
      </Footer>
    </Container>
  );
}

export default Confirmation;
