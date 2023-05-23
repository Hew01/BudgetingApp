import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NAVIGATION_KEY from '../constans/NavigationKey';
import LoginScreen from '../src/screens/LoginScreen';
import IntroductionScreen from '../src/screens/Introduction/Introduction';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NAVIGATION_KEY.Introduction} component={IntroductionScreen} />
        </Stack.Navigator>
    );
}
