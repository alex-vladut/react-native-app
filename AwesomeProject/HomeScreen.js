import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Button,
  Text,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

export function HomeScreen({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Home</Text>
          <Button
            title="Profile"
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
