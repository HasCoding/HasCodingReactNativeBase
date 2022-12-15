import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View,ImageBackground,Image,TextInput} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {

    const [user, setUser] = useState();

    const setItem = async (id,content) => {
        await AsyncStorage.setItem(id,content);
    }

    const loginhandler = () => {
        if(user.length > 2){
            setItem('user',user);
            navigation.navigate('Home');
        }else {
            alert('Kullanıcı adı en az 3 karakter olmalıdır.');
        }
    }


    useEffect(() => {
        AsyncStorage.getItem('user').then((value) => {
            if(value != null){
                navigation.navigate('Home');
            }
        });
    },[]);

    return (
        <View className="flex flex-row w-full h-full">
            <ImageBackground source={require("../assets/images/loginbackground.jpg")} className="flex flex-col justify-center items-center w-full h-full">
                <View className="w-[400px] p-5 flex justify-between  bg-[#ffffffbf] items-center rounded-2xl">
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={{width: 200, height: 200}}
                    />
                    <TextInput placeholder="Kullanıcı Adınız" className="bg-white rounded-md w-3/4 p-2 my-2 mt-5" onChangeText={(change)=>{
                        setUser(change);
                    }}/>
                    <TextInput placeholder="Şifreniz" className="bg-white rounded-md w-3/4 p-2 my-2 mt-1" secureTextEntry={true}/>
                    <TouchableOpacity
                        className="bg-blue-500 rounded-md w-3/4 p-2 my-2 mt-2"
                        onPress={() => {
                            loginhandler();
                        }}
                    >
                        <Text className="text-white text-center">Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default LoginScreen;
