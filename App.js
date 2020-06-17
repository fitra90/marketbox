import * as React from 'react';
import {View, Button, Text, StatusBar, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from './src/constants/Color';
import styles from './src/styles/Global';
import {Icon} from 'native-base';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import History from './src/screens/order/History';
import Profile from './src/screens/account/Profile';

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

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              color = focused ? {color: 'black'} : {color: 'silver'};
            } else if (route.name === 'Cart') {
              iconName = 'shopping-cart';
              color = focused ? {color: 'black'} : {color: 'silver'};
            } else if (route.name === 'History') {
              iconName = 'history';
              color = focused ? {color: 'black'} : {color: 'silver'};
            } else if (route.name === 'Profile') {
              iconName = 'account-circle';
              color = focused ? {color: 'black'} : {color: 'silver'};
            }

            // You can return any component that you like here!
            return <Icon type="MaterialIcons" name={iconName} style={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'silver',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Beranda',
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            title: 'Order',
            headerStyle: styles.header,
            headerTintColor: '#fff',
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Keranjang',
            headerStyle: styles.header,
            headerTintColor: '#fff',
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profil',
            headerStyle: styles.header,
            headerTintColor: '#fff',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles2 = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
