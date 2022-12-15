import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SettingsScreen from "./SettingsScreen";
import HomeScreenLayout from "./Home";
const HomeBaseLayout = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="AppHome"
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="AppHome" component={HomeScreenLayout}
                options={{
                    title: 'Ana Sayfa',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    title: 'Ayarlar',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="build-circle" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeBaseLayout;
