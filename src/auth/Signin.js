import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { Button, Icon, Input } from "@rneui/base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { signIn, } from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Signin = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  



 
  // const login = async (username, email, password) => {
  // };
  const handleSubmit = async () => {
    try {
        if (username === '' || password === '') {
            alert('Veuillez bien remplir les champs vides');
          } else {
            const response = await signIn(username, password);
      
            // Vérifier si la réponse contient le jeton JWT
            if (response && response.token) {
              const token = response.token;
              // Stocker le jeton JWT dans AsyncStorage
              await AsyncStorage.setItem('jwtToken', token);
              navigation.replace('home');
            } else {
              throw new Error('Réponse invalide du serveur');
            }
          }
      
          username = '';
          password = '';
        } catch (error) {
          console.log('Erreur', error);
        }
     
  };


  
  // console.log(email);
  // console.log(username);
  // console.log(password);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="bg-green-300 h-1/6 rotate-45 "></View>
        <View className="bg-green-500 h-1/6 rotate-45 rounded-xl"></View>

        <View className="items-center  -my-4">
          <View>
            <Text className="text-7xl font-bold">Zetify</Text>
          </View>
        </View>
        <View className="mx-3">
          <Text className="text-xl my-2">Welcome Back !</Text>
          <View>
            <Input
              placeholder="Username"
              inputContainerStyle={{
                padding: 10,
                backgroundColor: "#d6d6d6",
                borderRadius: 10,
              }}
              inputStyle={{
                marginLeft: 10,
              }}
              leftIcon={<Icon name="user" type="font-awesome" />}
              onChangeText={(e)=>setUsername(e)}
              
            />
          
            <Input
              placeholder="Password"
              inputContainerStyle={{
                padding: 10,
                backgroundColor: "#d6d6d6",
                borderRadius: 10,
              }}
              inputStyle={{
                marginLeft: 10,
              }}
              leftIcon={<Icon name="key" type="font-awesome" />}
              onChangeText={(e)=>setPassword(e)}
            />
          </View>

          <View className="items-center">
            <Button
              title="Login"
              buttonStyle={{
                backgroundColor: "green",
                padding: 20,
                width: 200,
                borderRadius: 20,
              }}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Signin;
