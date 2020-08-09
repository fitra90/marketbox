import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import styles from './src/styles/Global';
import Color from './src/constants/Color';
import {Icon} from 'native-base';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import History from './src/screens/order/History';
import Profile from './src/screens/account/Profile';
import Splash from './src/screens/Splash';
import Login from './src/screens/account/Login';
import Payment from './src/screens/order/Payment';
import Delivery from './src/screens/delivery/Delivery';
import Pool from './src/screens/Pool';
import ProductDetail from './src/screens/product/ProductDetail';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, iconSource}) => {
          if (route.name === 'Home') {
            iconSource = focused
              ? require('./src/assets/icons/nav/active/explore.png')
              : require('./src/assets/icons/nav/inactive/explore.png');
          } else if (route.name === 'Cart') {
            iconSource = focused
              ? require('./src/assets/icons/nav/active/cart.png')
              : require('./src/assets/icons/nav/inactive/cart.png');
          } else if (route.name === 'Riwayat') {
            iconSource = focused
              ? require('./src/assets/icons/nav/active/doc.png')
              : require('./src/assets/icons/nav/inactive/doc.png');
          } else if (route.name === 'Profile') {
            iconSource = focused
              ? require('./src/assets/icons/nav/active/profile.png')
              : require('./src/assets/icons/nav/inactive/profile.png');
          }

          // You can return any component that you like here!
          return (
            <TouchableOpacity style={{marginBottom: 5}}>
              <Image
                source={iconSource}
                style={{width: 30, height: 30, paddingTop: 10}}
              />
            </TouchableOpacity>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Color.DARK_GREEN,
        inactiveTintColor: 'grey',
        labelStyle: {
          fontFamily: 'ProductSansRegular',
          fontSize: 12,
          marginTop: 8,
        },
        style: {
          paddingBottom: 7,
          height: 65,
          paddingTop: 17,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Explore',
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={History}
        options={{
          title: 'Riwayat',
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
          title: 'Profile',
          headerStyle: styles.header,
          headerTintColor: '#fff',
        }}
      />
    </Tab.Navigator>
  );
}
function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeStack}
        />
        <Stack.Screen
          name="Payment"
          options={{headerShown: false}}
          component={Payment}
        />
        <Stack.Screen
          name="Delivery"
          options={{headerShown: false}}
          component={Delivery}
        />
        <Stack.Screen
          name="Pool"
          options={{headerShown: false}}
          component={Pool}
        />
        <Stack.Screen
          name="ProductDetail"
          options={{headerShown: false}}
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles2 = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
