import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { Button, Icon, Input } from "@rneui/base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import auth from "../../firebase/InitFirebase";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signUp } from "../../api";


const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  



 
  // const login = async (username, email, password) => {
  // };
  const handleSubmit = async () => {
    try {
      if (username === "" || email === "" || password === "") {
        alert("Veuillez bien remplir les champs vides");
      } else {
        await signUp(username, email, password);
        navigation.replace('signin')
      }
      username = "";
      email = "";
      password = "";
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
              placeholder="Email"
              inputContainerStyle={{
                padding: 10,
                backgroundColor: "#d6d6d6",
                borderRadius: 10,
              }}
              inputStyle={{
                marginLeft: 10,
              }}
              leftIcon={<Icon name="envelope" type="font-awesome" />}
              onChangeText={(e)=>setEmail(e)}
              
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

export default SignUp;
