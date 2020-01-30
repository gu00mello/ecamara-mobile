import { AsyncStorage } from "react-native";
const id_projeto = "ecamara-projeto";

export const setProjeto = async url => {
  let projeto = await AsyncStorage.setItem(id_projeto, url);
  return projeto;
};

export const getProjeto = async url => {
  let projeto = await AsyncStorage.getItem(id_projeto);
  return projeto;
};
