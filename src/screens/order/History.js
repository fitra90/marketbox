import * as React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Color from '../../constants/Color';
import {
  Container,
  Header,
  Right,
  Body,
  Card,
  CardItem,
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
        androidStatusBarColor={Color.LIGHT_GREEN}>
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
              <Left>
                <Thumbnail source={require('../../assets/alfamart.jpeg')} />
                <Body>
                  <Text style={{fontSize:18, fontWeight:"bold"}}>Minyak Goreng 2L</Text>
                  <Text note style={{color: 'grey', fontStyle: 'italic'}}>
                    Toko Alfamart
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require('../../assets/minyak.jpg')}
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  resizeMode: 'contain',
                }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  {/* <Icon active name="thumbs-up" /> */}
                  <Text> Beli Lagi</Text>
                </Button>
              </Left>
              <Right>
                <Text>11 Jam Lalu</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../../assets/okoc.jpg')} />
                <Body>
                  <Text style={{fontSize:18, fontWeight:"bold"}}>Beras 5 Kg</Text>
                  <Text note style={{color: 'grey', fontStyle: 'italic'}}>
                    Toko OKE OC
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require('../../assets/beras.png')}
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  resizeMode: 'contain',
                }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  {/* <Icon active name="thumbs-up" /> */}
                  <Text> Beli Lagi</Text>
                </Button>
              </Left>
              <Right>
                <Text>11 Jam Lalu</Text>
              </Right>
            </CardItem>
          </Card>
        </ScrollView>
      </Content>
    </Container>
  );
}

export default History;
