import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, ScrollView,View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const AppHomeScreen = ({navigation}) => {

    return (
        <View>
            <ImageBackground source={require("../../../assets/images/loginbackground.jpg")} className="w-full h-full flex flex-col">
                <ScrollView className="flex flex-col w-full p-5">
                    <View className="flex flex-wrap gap-3 items-center justify-center flex-row w-full pb-10">
                        <TouchableOpacity onPress={() => { navigation.navigate('About'); }} className="flex flex-col items-center justify-center">
                            <MaterialIcons name="info" size={100} color="#fff"/>
                            <Text className="text-white">Hakkında</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('OrderPage'); }} className="flex flex-col items-center justify-center">
                            <MaterialIcons name="pages" size={100} color="#fff"/>
                            <Text className="text-white">Başka Bir Sayfa</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default AppHomeScreen;
