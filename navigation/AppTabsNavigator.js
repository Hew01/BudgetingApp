import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NAVIGATION_KEY from '../constans/NavigationKey';
import HomeScreen from '../src/screens/HomeScreen';
import User from '../src/screens/User';
import { MyTabBar } from './MyTabBar';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'native-base';

const BottomTab = createBottomTabNavigator();

export default function AppTabsNavigator() {
    const { colors } = useTheme();
    return (
        <BottomTab.Navigator
            initialRouteName={NAVIGATION_KEY.Home}
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
                headerShadowVisible: false,
            }}
        >
            <BottomTab.Screen
                name={NAVIGATION_KEY.Home}
                component={HomeScreen}
                options={{
                    title: 'Trang chủ',
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} color={colors.primary[500]} />,
                }}
            />
            <BottomTab.Screen
                name="TestScreen1"
                component={HomeScreen}
                options={{
                    title: 'Test Screen 1',
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} color={colors.primary[500]} />,
                }}
            />
            <BottomTab.Screen
                name="TestScreen2"
                component={HomeScreen}
                options={{
                    title: 'Test Screen 2',
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} color={colors.primary[500]} />,
                }}
            />
            <BottomTab.Screen
                name="User"
                component={User}
                options={{
                    title: 'Người dùng',
                    tabBarIcon: () => <Ionicons name="home-outline" size={24} color={colors.primary[500]} />,
                }}
            />
        </BottomTab.Navigator>
    );
}
