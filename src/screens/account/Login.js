import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Color from '../../constants/Color';
import {Container, Spiner} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Login({navigation}) {
  return (
    <Container>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Edit Login</Text>
        <Spinner color="green" />
      </View>
    </Container>
  );
}

export default Login;
