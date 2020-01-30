import { AsyncStorage } from "react-native";

const id_auth = "ecamara-auth";

export const signIn = async token => {
  let isToken = await AsyncStorage.setItem(id_auth, token);
  return isToken;
};

export const signOut = async () => {
  let isToken = await AsyncStorage.removeItem(id_auth);
  return isToken;
};

export const setUserData = async data => {
  let isData = await AsyncStorage.setItem(
    `${id_auth}-data`,
    JSON.stringify(data)
  );
  return isData;
};

export const getUserData = async () => {
  let isData = await AsyncStorage.getItem(`${id_auth}-data`);
  return JSON.parse(isData);
};

export const getUserToken = async () => {
  let token = await AsyncStorage.getItem(id_auth);
  return token;
};
