import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NAVIGATION_KEY from '../constans/NavigationKey';
import HomeScreen from '../src/screens/HomeScreen';
import { MyTabBar } from './MyTabBar';
import { Ionicons,FontAwesome,AntDesign,FontAwesome5 } from '@expo/vector-icons';
import { useTheme,Button } from 'native-base';
import TransactionScreen from '../src/screens/Transaction/transaction';
import SamplePopupScreen from '../src/screens/SamplePopupScreen';
import AddTranSactionScreen from '../src/screens/AddTransaction/addtransaction';
import UserScreen from '../src/screens/User';
import ReportScreen from '../src/screens/Report/report';

const BottomTab = createBottomTabNavigator();

export default function AppTabsNavigator({navigation}) {
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
                name="transaction"
                component={TransactionScreen}
                
                options={{
                    
                    title: 'Giao dịch',
                    tabBarIcon: () => <AntDesign name="calendar" size={24} color={colors.primary[500]} />,
                }}
            />
            <BottomTab.Screen
                name="addTransaction"
                component={AddTranSactionScreen}
                
                options={{
                    title: "Thêm giao dich",
                    tabBarLabel:null,
                    tabBarIcon:  () => (
                        <Button
                        justifyContent={'center'}
                        
                          borderRadius={200}
                          bottom="30%"
                          h={16}
                          w={16}
                          style={{shadowColor: '#000000',
                          shadowOffset: {
                            width: 0,
                            height: 2
                          },
                          shadowRadius: 5,
                          shadowOpacity: 0.7}}
                          onPress={() => navigation.navigate('addtransaction')}
                        >
                        <FontAwesome  name="plus" size={28} color="white" />                        
                        </Button>
                      ),
                }}
            />
            <BottomTab.Screen
                name="report"
                component={ReportScreen}
            
                options={{
                    
                    title: 'Báo cáo',
                    tabBarIcon: () => <FontAwesome5 name="chart-bar" size={24} color={colors.primary[500]} />,
                }}
            />
            <BottomTab.Screen
                name="user"
                component={UserScreen}
                
                options={{
                    
                    title: 'Người dùng',
                    tabBarIcon: () => <FontAwesome name="user-o" size={24} color={colors.primary[500]} />,
                }}
            />
        </BottomTab.Navigator>
    );
}
