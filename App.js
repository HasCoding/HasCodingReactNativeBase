import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeBaseLayout from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const App = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeBaseLayout} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
