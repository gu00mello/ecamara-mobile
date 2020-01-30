import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    async function verifySession() {
      let token = getUserToken();

      if (!token) {
        setVisible(true);
      }
    }
    verifySession();
  }, []);
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
                shadowColor: "#333"
              }}
              source={require("../../../assets/1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegistrarVoto");
            }}
          >
            <Image
              style={{
                width: 155,
                height: 100,
                marginRight: 10,
                shadowColor: "#333"
              }}
              source={require("../../../assets/2.png")}
            />
          </TouchableOpacity>

          <Image
            style={{
              width: 155,
              height: 100,
              marginRight: 10,
              shadowColor: "#333"
            }}
            source={require("../../../assets/3.png")}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PedirPalavra");
            }}
          >
            <Image
              style={{
                width: 155,
                height: 100,
                marginRight: 10,
                shadowColor: "#333"
              }}
              source={require("../../../assets/4.png")}
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
