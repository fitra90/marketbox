import React, {useEffect }  from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import Color from '../constants/Color';
import {
  Container,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
 


function Splash({navigation}) {
  
  useEffect(() => {
    const timer = setTimeout(() => {navigation.navigate("Home")}, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{width: 122, height: 100}}
          source={require('../assets/logo.png')}
        />
        <ActivityIndicator
          size="small"
          color={Color.LIGHT_GREEN}
          style={{position: 'absolute', bottom: 50}}
        />
        <Text style={{position: 'absolute', bottom: 10, color: 'silver'}}>
          Ver. 0.0.1
        </Text>
      </View>
    </Container>
  );
}

export default Splash;
