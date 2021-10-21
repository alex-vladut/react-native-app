/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './HomeScreen';
import {ProfileScreen} from './ProfileScreen';

const Stack = createNativeStackNavigator();

const deepLinksConf = {
  screens: {
    HomeRoutes: {
      initialRouteName: 'Home',
      screens: {
        Profile: 'profile',
        Home: 'home',
      },
    },
  },
};

const linking = {
  prefixes: ['myapp://', 'https://app.myapp.com'],
  config: deepLinksConf,
};

function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
