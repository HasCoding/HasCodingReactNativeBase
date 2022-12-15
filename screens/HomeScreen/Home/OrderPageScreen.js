import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const OrderPageScreen = ({navigation}) => {
    return (
        <View className="p-2">
            <TouchableOpacity onPress={() => navigation.navigate('HomeIndex')} className="flex flex-row gap-1 items-center w-[100px] border-hascoding border-[1px] rounded-md">
                <MaterialIcons name="arrow-left" size={20} color="#138ec7"/>
                <Text className="text-hascoding">
                    Geri Git
                </Text>
            </TouchableOpacity>
            <Text className="text-black text-center p-3">
                Başka Bir Sayfa
            </Text>
            <View className="p-2">
                <Text className="text-justify">
                    Burada sayfa içeriği olacak.
                </Text>
            </View>
        </View>
    );
};

export default OrderPageScreen;
