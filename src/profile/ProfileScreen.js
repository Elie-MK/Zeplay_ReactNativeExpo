import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/InitFirebase";
import { SafeAreaView } from "react-native";
import { Button } from "@rneui/base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DbMusic from "../../DbMusic";
import { Divider } from "react-native-paper";

const ProfileScreen = ({ navigation }) => {
  const [dataUser, setDataUser] = useState("");
  const [profileOptions, setProfileOptions] = useState([]);

  const onChangedState = async () => {
    try {
      await AsyncStorage.removeItem("jwtToken");
      navigation.navigate(" ");
    } catch (error) {
      console.error("Erreur lors de la suppression du jeton JWT:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer le jeton JWT depuis AsyncStorage
        const token = await AsyncStorage.getItem("jwtToken");

        if (token) {
          // Effectuer la requête au serveur en incluant le jeton JWT dans l'en-tête
          const response = await axios.get(`http://192.168.1.2:5000/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // Utiliser les données de l'utilisateur
          const userData = response.data;
          setDataUser(userData);
        } else {
          // Aucun jeton JWT trouvé dans le stockage local
          console.log("Aucun jeton JWT trouvé");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur:",
          error
        );
      }
    };
    fetchData();

    const datas = DbMusic.find((data) => data.cat == "profileoptions");
    const data = datas.profileoptions;
    setProfileOptions(data);
  }, []);

  console.log(dataUser);

  return (
    <SafeAreaView>
      <View className="mt-40">
      <View className="bg-green-300 h-1/4 rotate-45 rounded-xl"></View>
      <View className="bg-green-500 h-1/4 rotate-45 rounded-xl mt-60"></View>
        <View className="-mt-[520px]">
        <View className="mx-6">
          <Text className="font-bold text-2xl">Profile</Text>
          <View className="bg-gray-200 p-4 my-4 rounded-lg">
            {profileOptions.map(({ title, id, iconname }) => (
              <>
                <TouchableOpacity className="flex-row items-center justify-between my-2 p-2">
                  <View className="flex-row items-center gap-4">
                    <FontAwesome name={iconname} size={25} />
                    <Text className="text-xl">{title}</Text>
                  </View>
                  <MaterialIcons name="keyboard-arrow-right" size={28} />
                </TouchableOpacity>
                <Divider />
              </>
            ))}
          </View>
        </View>

        <View className="items-center">
          <Button
            title="Logout"
            buttonStyle={{
              width: 200,
              backgroundColor: "red",
              borderRadius: 20,
              padding: 20,
            }}
            onPress={onChangedState}
          />
        </View>
        <Text>{dataUser.username}</Text>
        <Text>{dataUser.email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
