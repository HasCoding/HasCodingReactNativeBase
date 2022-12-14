import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const AppHomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>
                Uygulama Ana Sayfa Ekranı
            </Text>
            <TouchableOpacity   onPress={() => navigation.navigate('Login')}>
                <MaterialIcons name="login" size={24} />
            </TouchableOpacity>
        </View>
    );
};

export default AppHomeScreen;
