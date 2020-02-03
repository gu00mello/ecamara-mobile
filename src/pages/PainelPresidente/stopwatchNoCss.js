import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Alert,
  FlatList
} from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import { List, ListItem } from "react-native-elements";
import api from "../../services/api";
import { getProjeto } from "../../services/projeto";
import AppContext from "../../context";
import StopwatchContainer from "../stopwatch/index";

export default function PainelPresidente({ navigation }) {
  // const { url: BASEURL } = useContext(AppContext);

  // const [projeto, setProjeto] = useState(null);

  // useEffect(() => {
  //   async function getProjeto() {
  //     const response = await api.get(`http://${BASEURL}/materias/`);

  //     const { data } = response.data;

  //     alert(JSON.stringify(data));
  //   }

  //   getProjeto();
  // }, []);

  const dataList = [
    { key: "Teste" },
    { key: "Testando" },
    { key: "Outro Teste" }
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/bg-mobile.png")}
        style={{
          width: "100%",
          height: "100%",
          background: "cover"
        }}
      >
        <StopwatchContainer />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  principal: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    top: 310
  }
});
