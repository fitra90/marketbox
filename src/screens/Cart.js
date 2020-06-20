import * as React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Color from '../constants/Color';
import styles from '../styles/Global';
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
import {TouchableOpacity, TouchableNativeFeedback} from 'react-native-gesture-handler';

function Cart({navigation}) {
  return (
    <Container>
      <Header
        style={{backgroundColor: 'white'}}
        androidStatusBarColor={Color.LIGHT_GREEN}>
        <Body>
          <Title style={{color: 'black', fontSize: 22, marginLeft: 10}}>
            Keranjang
          </Title>
        </Body>
        <Right>
          <TouchableNativeFeedback>
            <Button hasText transparent>
              <Text style={{color:Color.DARK_GREEN}}>BAYAR</Text>
            </Button>
          </TouchableNativeFeedback>
        </Right>
      </Header>
      <Content>
        <ScrollView>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/alfamart.jpeg')} />
                <Body>
                  <Text>Toko Alfamart</Text>
                  <Text note style={{color: 'grey', fontStyle: 'italic'}}>
                    Star Seller
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require('../assets/minyak.jpg')}
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
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </ScrollView>
      </Content>
    </Container>
  );
}

export default Cart;
