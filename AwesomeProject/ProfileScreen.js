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

export function ProfileScreen({navigation, name}) {
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
          <Text>Profile {name}</Text>
          <Button
            title="Back home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
