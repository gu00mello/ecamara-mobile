import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";
import { getUserToken } from "../../services/auth";

export default function PedirPalavra({ navigation }) {
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
            width: 150,
            height: 150,
            alignSelf: "center",
            shadowColor: "#333"
          }}
          source={require("../../../assets/lisp.png")}
        />
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold",
            alignSelf: "center",
            marginBottom: 5
          }}
        >
          CAMARA MUNICIPAL DE SANTO ANTONIO DE PITÁGORAS
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: "yellow",
            fontWeight: "bold",
            alignSelf: "center",
            marginBottom: 10
          }}
        >
          REGISTRAR VOTO
        </Text>

        <View style={styles.principal}>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              borderRadius: 2,
              borderColor: "#333",
              padding: 15
            }}
            onPress={() =>
              Alert.alert(
                "eCamara",
                "Vossa excelência solicitou a palavra. Favor aguardar a ordem dos inscritos no painel."
              )
            }
          >
            <Text
              style={{
                fontSize: 20,
                color: "#333",
                fontWeight: "bold"
              }}
            >
              PEDIR PALAVRA
            </Text>
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
