import { AsyncStorage } from "react-native";
const name_route = "ecamara-url";

export const setUrl = async url => {
  let base_url = await AsyncStorage.setItem(name_route, url);
  return base_url;
};

export const getUrl = async url => {
  let base_url = await AsyncStorage.getItem(name_route);
  return base_url;
};
