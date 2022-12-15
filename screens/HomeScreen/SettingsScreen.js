import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

const SettingsScreen = ({navigation}) => {
    return (
        <View>
            <Text className="w-full p-5 bg-hascoding text-white font-bold">
                Ayarlar
            </Text>
            <View className="flex flex-col items-center justify-center">
                <Text className="text-2xl font-bold p-2">Ayarlar</Text>
                <Text>
                    Bu sayfada ayarlarınızı yapabilirsiniz.
                </Text>
            </View>
        </View>
    );
};

export default SettingsScreen;
