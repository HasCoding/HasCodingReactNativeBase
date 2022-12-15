import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AppHomeScreen from "./AppHomeScreen";
import AboutScreen from "./AboutScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OrderPageScreen from "./OrderPageScreen";

const HomeScreenLayout = ({navigation}) => {


    const Stack = createNativeStackNavigator();


    const [user, setUser] = useState([]);

    const DeleteUser = async () => {
        await AsyncStorage.removeItem('user')
            .then(
                navigation.navigate('Login')
            );
    };

    useEffect(() => {
        AsyncStorage.getItem('user').then((value) => {
            if (value) {
                setUser(value);
            } else {
                navigation.navigate('Login');
            }
        });
    }, []);

    return (
        <View className="h-full w-full">
            <View className="flex flex-col items-center p-3 bg-white gap-2 h-2/6">
                <MaterialIcons name="account-circle" size={100} color="#1d1d1d" />
                <Text>Hoşgeldin, {user}</Text>
                <View>
                    <TouchableOpacity onPress={() => {
                        DeleteUser();
                    }} className="w-[100px] h-[30px] bg-blue-500 rounded-md flex items-center justify-center">
                        <Text className="text-white">Çıkış Yap</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex flex-row w-full h-4/6 border-blue-400 border-[1px]">
                <Stack.Navigator
                    initialRouteName="HomeIndex"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="HomeIndex" component={AppHomeScreen} />
                    <Stack.Screen name="About" component={AboutScreen} />
                    <Stack.Screen name="OrderPage" component={OrderPageScreen} />
                </Stack.Navigator>
            </View>
            <View className="flex flex-row w-full  bg-white/80 justify-center items-center absolute bottom-0">
                <Text className="text-center p-1">HasCoding © 2022 - Hasan ERYILMAZ</Text>
            </View>
        </View>
    );
};

export default HomeScreenLayout;
