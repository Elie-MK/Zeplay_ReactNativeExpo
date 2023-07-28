import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { Button } from "@rneui/base";
import  {auth}  from "../firebase/InitFirebase";
import AsyncStorage from "@react-native-async-storage/async-storage";



const WelcomePage = ({navigation}) => {
  useEffect(() => {
    const checkToken = async () => {
      try {
        // Récupérer le jeton JWT depuis le stockage local (AsyncStorage)
        const token = await AsyncStorage.getItem('jwtToken');
        
        if (token) {
          // Vérifier si le jeton JWT est valide (par exemple, en le décodant et en vérifiant sa signature)
          // ...

          // Si le jeton est valide, naviguer vers la page 'home'
          navigation.navigate('home');
        } else {
          // Aucun jeton JWT trouvé, naviguer vers la page 'welcome'
          navigation.navigate('welcome');
        }
      } catch (error) {
        console.error('Erreur lors de la vérification du jeton JWT:', error);
      }
    };

    checkToken();
  }, [navigation])



  return (
    <SafeAreaView>
      <View className="bg-green-300 h-1/4 rotate-45 "></View>
      <View className="bg-green-500 h-1/4 rotate-45 rounded-xl"></View>

      <View className="items-center my-7 ">
        <View>
          <Text className="text-7xl font-bold">Zetify</Text>
        </View>
        <View>
          <Text className="text-2xl font-bold">
            Delightful Music Free on Zetify
          </Text>
        </View>
      </View>
      <View className="mx-10">
       
        <View className="my-2">
          <Button
            title="Sign Up"
            buttonStyle={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 15,
            }}
            
            titleStyle={{
              color: "black",
              fontSize:20
            }}
            onPress={()=>navigation.navigate('signup')}        
          />
        </View>
        <View className="my-2">
          {/* <Button
            title="Google"
            buttonStyle={{
              backgroundColor: "red",
              borderStyle: "solid",
              padding: 15,
              borderRadius: 15,
              
            }}

            titleStyle={{
              marginLeft:5,
              fontSize:20
            }}
            icon={{
              name: 'google',
              type: 'font-awesome',
              size: 20,
              color: 'white',
            }}
          /> */}
        </View>
        <View className="my-2">
          <Button
            title="Login with username"
            buttonStyle={{
              backgroundColor: "black",
              borderStyle: "solid",
              padding: 15,
              borderRadius: 15,
            }}
            icon={{
              name: 'envelope-o',
              type: 'font-awesome',
              size: 15,
              color: 'white',
            }}
            titleStyle={{
              marginLeft:5,
              fontSize:20
            }}
            onPress={()=>navigation.navigate('signin')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;

