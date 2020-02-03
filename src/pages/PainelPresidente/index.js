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
        <Text
          style={{
            fontSize: 20,
            color: "yellow",
            fontWeight: "bold",
            alignSelf: "center",
            marginTop: 10
          }}
        >
          CÂMARA MUNICIPAL DE SANTO ANTONIO DE PITÁGORAS
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            alignSelf: "center",
            marginBottom: 10
          }}
        >
          SESSÃO: 001/2019 - 12 LEGISLATURA 01/01/2019-31/12/2020
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            alignSelf: "center",
            marginBottom: 10
          }}
        >
          Dispoe sobre a transparencia na arrecadação com a cobrança de
          pedagio...
        </Text>

        <Text
          style={{
            fontSize: 25,
            color: "yellow",
            fontWeight: "bold",
            position: "relative",
            left: 10,
            marginBottom: 5
          }}
        >
          DISCURSO:
        </Text>

        <FlatList
          style={{
            position: "absolute",
            alignSelf: "flex-start",
            top: 150,
            left: 10
          }}
          data={dataList}
          renderItem={({ item }) => (
            <Text
              style={{
                fontSize: 15,
                color: "white",
                fontWeight: "bold",
                marginBottom: 3
              }}
            >
              1. {item.key}
            </Text>
          )}
        />
        <View style={styles.principal}>
          <StopwatchContainer />
        </View>
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
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: -20
  }
});
