import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
NODE_TLS_REJECT_UNAUTHORIZED = 1


const API_BASE_URL = "http://192.168.1.2:5000/:5000"

export const signUp = async (username, email, password) => {
  try {
    const response = await axios.post(`http://192.168.1.2:5000/signup`, {
      username,
      email,
      password,
    })
    if (response && response.data) {
      return response.data
    } else {
      throw new Error("Réponse invalide du serveur")
    }
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const signIn = async (username, password) => {
  try {
    const response = await axios.post(`http://192.168.1.2:5000/signin`, {
      username,
      password,
    });
    if (response && response.data) {
      return response.data
    } else {
      throw new Error("Réponse invalide du serveur");
    }
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};


export const fetchData = async () => {
    try {
      // Récupérer le jeton JWT depuis AsyncStorage
      const token = await AsyncStorage.getItem('jwtToken');
  
      if (token) {
        // Effectuer la requête au serveur en incluant le jeton JWT dans l'en-tête
        const response = await axios.get(`http://192.168.1.2:5000/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Utiliser les données de l'utilisateur
        const userData = response.data;
        // console.log(userData);
      } else {
        // Aucun jeton JWT trouvé dans le stockage local
        console.log('Aucun jeton JWT trouvé');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
    }
  };