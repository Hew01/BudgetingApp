import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import useFonts from './useFonts';
import Navigation from './navigation/RootNavigator';
import { NativeBaseProvider,  StatusBar } from 'native-base';
import theme from './configs/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WalletList from './src/screens/WalletList';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(true);
  useEffect(() => {
    async function loadFontsAndAssets() {
      await useFonts(); 
      await SplashScreen.preventAutoHideAsync(); 
      await SplashScreen.hideAsync(); 
      setFontsLoaded(true); 
    }
    loadFontsAndAssets();
  }, []);
  if (!fontsLoaded) {
    return null; 
  }
  return (
    <WalletList />
);
};

