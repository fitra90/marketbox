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
  Title,
  Left,
  Button,
  Icon,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Profile({navigation}) {
  return (
    <Container>
      <Header
        style={{backgroundColor: 'white'}}
        androidStatusBarColor={Color.LIGHT_GREEN}>
        <Body>
          <Title style={{color: 'black', fontSize: 22, marginLeft: 10}}>
            Profil
          </Title>
        </Body>
      </Header>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={require('../../assets/login-google.png')}
          style={{height: 50, width: 200, resizeMode: 'contain'}}
        />
        <Image
          source={require('../../assets/fb_login-en.png')}
          style={{height: 50, width: 200, resizeMode: 'contain'}}
        />
      </View>
    </Container>
  );
}

export default Profile;
