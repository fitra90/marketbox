import * as React from 'react';
import {View, Button, Text, StatusBar, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from './src/constants/Color';
import styles from './src/styles/Global';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}

function ActionBarImage() {
  return (
    <Image
      source={require('./src/assets/icon.png')}
      style={{width: 30, height: 30}}
    />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            // title: 'My home',
            headerStyle: styles.header,
            headerTitleStyle: {alignSelf: 'center'},
            headerShown: false,
            headerTitle: (
              <Image
                style={{width: 40, height: 40, flex: 1}}
                source={require('./src/assets/icon.png')}
              />
            ),
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Keranjang Belanja',
            headerStyle: styles.header,
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles2 = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
