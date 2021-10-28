import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import HomeScreen from './screens/HomeScreen';
import Harry from './screens/Harry';
import Hermione from './screens/Hermione';
import Ron from './screens/Ron';
import Dumbledore from './screens/Dumbledore';
import Voldemort from './screens/Voldemort';

// or any pure javascript modules available in npm
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function App() {
  return (
    <View>
      <AppContainer />
      
    </View>
  );
}

var switchScreens = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Harry: Harry,
  Hermione: Hermione,
  Ron: Ron,
  Dumbledore: Dumbledore,
  Voldemort: Voldemort,
});

const AppContainer = createAppContainer(switchScreens);
