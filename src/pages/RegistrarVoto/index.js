import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export default function RegistrarVoto({ navigation }) {
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
            marginBottom: 5
          }}
        >
          REGISTRAR VOTO
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "#333",
            padding: 5,
            width: "100%",
            backgroundColor: "#fff"
          }}
        >
          PROJETO DE LEI 0001/2019 - ASSUNTO: COLOCAÇÃO DE PLACAS E CARTAZES
        </Text>

        <View style={styles.principal}>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              width: 100,
              height: 40,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "red",
              borderRadius: 2,
              marginRight: 13,
              marginTop: 20,
              marginBottom: 20
            }}
          >
            <Text
              style={{
                color: "#fff",
                marginTop: 9
              }}
            >
              CONTRÁRIO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: 100,
              height: 40,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#333",
              borderRadius: 2,
              marginRight: 13,
              marginTop: 20,
              marginBottom: 20
            }}
          >
            <Text
              style={{
                color: "#333",
                marginTop: 9
              }}
            >
              ABSTEVE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              width: 100,
              height: 40,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "green",
              borderRadius: 2,
              marginTop: 20,
              marginBottom: 20
            }}
          >
            <Text
              style={{
                color: "#fff",
                marginTop: 9
              }}
            >
              FAVORÁVEL
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 13,
            color: "#333",
            padding: 5,
            width: "100%",
            backgroundColor: "#fff"
          }}
        >
          PARLAMENTAR: FRANCISCO DOS SANTOS - PCP
        </Text>
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
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
