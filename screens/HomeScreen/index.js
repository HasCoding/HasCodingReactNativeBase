import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppHomeScreen from "./AppHomeScreen";
import AboutScreen from "./AboutScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const HomeScreenLayout = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="AppHome"
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="AppHome" component={AppHomeScreen}
                options={{
                    title: 'Ana Sayfa',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen name="About" component={AboutScreen}
                options={{
                    title: 'Hakkında',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="info" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeScreenLayout;
