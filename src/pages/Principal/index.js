import React, { useLayoutEffect, useState } from "react";
import { NavigationEvents } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { getUserToken } from "../../services/auth";

export default function Principal({ navigation }) {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    async function verifySession() {
      let token = await getUserToken();

      if (!token) {
        setVisible(true);
      }
    }
    verifySession();
  }, []);

  return (
    <View style={styles.container}>
      {/* NavigationEvents - Muda evento da aplicação. */}
      <NavigationEvents onDidFocus={() => setVisible(!visible)} />
      <ImageBackground
        source={require("../../../assets/bg-mobile.png")}
        style={{
          width: "100%",
          height: "100%",
          background: "cover"
        }}
      >
        <Image
          style={{
            width: 200,
            height: 200,
            alignSelf: "center",
            shadowColor: "#333"
          }}
          source={require("../../../assets/lisp.png")}
        />
        <Text
          style={{
            fontSize: 20,
            color: "yellow",
            fontWeight: "bold",
            alignSelf: "center",
            marginBottom: 10
          }}
        >
          CAMARA MUNICIPAL DE SANTO ANTONIO DE PITÁGORAS
        </Text>

        <View style={styles.principal}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegistrarPresenca");
            }}
            style={{
              display: !visible ? "none" : "flex"
            }}
          >
            <Image
              style={{
                width: 155,
                height: 100,
                marginRight: 10,
                shadowColor: "#333",
                borderWidth: 2,
                borderColor: "#fff",
                borderRadius: 3
              }}
              source={require("../../../assets/1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegistrarVoto");
            }}
            style={{
              display: visible ? "none" : "flex"
            }}
          >
            <Image
              style={{
                width: 155,
                height: 100,
                marginRight: 10,
                shadowColor: "#333",
                borderWidth: 2,
                borderColor: "#fff",
                borderRadius: 3
              }}
              source={require("../../../assets/2.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("VizualizarPauta");
            }}
          >
            <Image
              style={{
                width: 155,
                height: 100,
                marginRight: 10,
                shadowColor: "#333",
                borderWidth: 2,
                borderColor: "#fff",
                borderRadius: 3,
                display: visible ? "none" : "flex"
              }}
              source={require("../../../assets/3.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PedirPalavra");
            }}
            style={{
              display: visible ? "none" : "flex"
            }}
          >
            <Image
              style={{
                width: 155,
                height: 100,
                marginRight: 10,
                shadowColor: "#333",
                borderWidth: 2,
                borderColor: "#fff",
                borderRadius: 3
              }}
              source={require("../../../assets/4.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PainelPresidente");
            }}
            style={{
              display: visible ? "none" : "flex"
            }}
          >
            <Image
              style={{
                width: 155,
                height: 100,
                marginRight: 10,
                shadowColor: "#333",
                borderWidth: 2,
                borderColor: "#fff",
                borderRadius: 3
              }}
              source={require("../../../assets/5.png")}
            />
          </TouchableOpacity>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
