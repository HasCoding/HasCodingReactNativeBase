import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LoginScreen = ({navigation}) => {
    return (
        <View>
            <Text className="text-blue-500">
                Giriş Ekranı
            </Text>
            <TouchableOpacity   onPress={() => navigation.navigate('Home')}>
                <MaterialIcons name="home" size={24} />
            </TouchableOpacity>
        </View>
    );

};

export default LoginScreen;
