import * as React from 'react';
import {View, Button, Text, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../constants/Color';
import styles from '../styles/Global';

function Cart({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cart Screen</Text>
    </View>
  );
}

export default Cart;
