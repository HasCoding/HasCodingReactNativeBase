import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const AboutScreen = ({navigation}) => {
    return (
        <View className="p-2">
            <TouchableOpacity onPress={() => navigation.navigate('HomeIndex')} className="flex flex-row gap-1 items-center w-[100px] border-hascoding border-[1px] rounded-md">
                <MaterialIcons name="arrow-left" size={20} color="#138ec7"/>
                <Text className="text-hascoding">
                    Geri Git
                </Text>
            </TouchableOpacity>
            <Text className="text-black text-center p-3">
                Hakkında sayfası
            </Text>
            <View className="p-2">
                <Text className="text-justify">
                    Eğitim Portalı ile ödevlerinizden ve sınavlardan yüksek not almanızı hedefleyen aynı zamanda Web Tasarım ve Ücretsiz Hosting gibi hizmetler sağlayan oluşumdur.
                </Text>
            </View>
        </View>
    );
};

export default AboutScreen;
