import * as React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Color from '../../constants/Color';
import {
  Container,
  Header,
  Right,
  Body,
  List,
  ListItem,
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
            Riwayat Belanja
          </Title>
        </Body>
        <Right>
          <TouchableNativeFeedback>
            <Button hasText transparent>
              <Text
                style={{color: Color.RED, fontFamily: 'ProductSansRegular'}}>
                BERSIHKAN
              </Text>
            </Button>
          </TouchableNativeFeedback>
        </Right>
      </Header>
      <Content>
        <ScrollView>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/minyak.jpg')} />
              </Left>
              <Body>
                <Text style={{fontFamily: 'ProductSansRegular', fontSize: 16}}>
                  Minyak Goreng 1 L
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    note
                    numberOfLines={1}
                    style={{
                      fontFamily: 'ProductSansRegular',
                      marginTop: 3,
                      color: Color.PRIMARY,
                    }}>
                    SELESAI
                  </Text>
                  <Text> &nbsp; </Text>
                  <Text
                    note
                    numberOfLines={1}
                    style={{
                      fontFamily: 'ProductSansRegular',
                      marginTop: 3,
                      color: Color.INACTIVE,
                    }}>
                    20/08/2020
                  </Text>
                </View>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    style={{
                      fontFamily: 'ProductSansRegular',
                      fontSize: 16,
                      color: Color.TEXT_PRIMARY,
                    }}>
                    Rp. 24.000
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require('../../assets/minyak.jpg')} />
              </Left>
              <Body>
                <Text style={{fontFamily: 'ProductSansRegular', fontSize: 16}}>
                  Minyak Goreng 1 L
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    note
                    numberOfLines={1}
                    style={{
                      fontFamily: 'ProductSansRegular',
                      marginTop: 3,
                      color: Color.PRIMARY,
                    }}>
                    SELESAI
                  </Text>
                  <Text> &nbsp; </Text>
                  <Text
                    note
                    numberOfLines={1}
                    style={{
                      fontFamily: 'ProductSansRegular',
                      marginTop: 3,
                      color: Color.INACTIVE,
                    }}>
                    20/08/2020
                  </Text>
                </View>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    style={{
                      fontFamily: 'ProductSansRegular',
                      fontSize: 16,
                      color: Color.TEXT_PRIMARY,
                    }}>
                    Rp. 24.000
                  </Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </ScrollView>
      </Content>
    </Container>
  );
}

export default History;
