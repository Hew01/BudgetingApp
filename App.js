import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import useFonts from './useFonts';
import colors from './assets/colors/colors';
import Navigation from './navigation/RootNavigator';
import { NativeBaseProvider, Box, StatusBar } from 'native-base';
import theme from './configs/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(true);

  useEffect(() => {
    async function loadFontsAndAssets() {
      await useFonts(); 
      // Load custom fonts
      await SplashScreen.preventAutoHideAsync(); 
      // Prevent splash screen from hiding
      // Load any additional assets here
      await SplashScreen.hideAsync(); 
      // Hide the splash screen
      setFontsLoaded(true); 
      // Set the fontsLoaded flag to true
    }
    loadFontsAndAssets();
  }, []);

  if (!fontsLoaded) {
    return null; 
    // Return null until the custom fonts and assets are loaded
  }
  return (
  <SafeAreaProvider>
    <NativeBaseProvider theme={theme}>
        <Navigation />
        <StatusBar translucent />
    </NativeBaseProvider>
  </SafeAreaProvider>
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
