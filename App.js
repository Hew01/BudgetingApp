import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import colors from './assets/colors/colors';
import { Ionicons } from '@expo/vector-icons';

import useFonts from './useFonts';
import Introduction from './screens/Introduction';

const Tab = createBottomTabNavigator();

export default function App(){

  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  }

  if (!fontsLoaded) {
    return (
      <AppLoading 
        startAsync={LoadFonts}
        onError={console.warn}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Introduction" 
          component={Introduction}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 100,
    backgroundColor: '#e6e6e6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

