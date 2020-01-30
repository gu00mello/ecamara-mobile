import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { signIn, setUserData } from "../../services/auth";
import api from "../../services/api";
import AppContext from "../../context";

export default function RegistrarPresenca({ navigation }) {
  const { url: BASEURL } = useContext(AppContext);

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async () => {
    const { data } = await api.post(`http://${BASEURL}/loginMobile`, {
      nome,
      senha
    });

    if (data.success) {
      const {
        token,
        dados,
        dados: { nome_completo }
      } = data.results;
      signIn(token);
      setUserData(dados);

      Alert.alert("Ecamara", `Olá ${nome_completo}, seja bem vindo a votação.`);
      navigation.navigate("Principal");
    }
  };

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
          REGISTRAR PRESENÇA
        </Text>

        <View style={styles.principal}>
          <Text
            style={{
              fontSize: 15,
              color: "#333",
              fontWeight: "bold",
              marginRight: 5
            }}
          >
            NOME PARLAMENTAR
          </Text>

          <TextInput
            style={{
              width: 200,
              height: 30,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 2,
              backgroundColor: "#fff",
              marginBottom: 10,
              paddingVertical: 8,
              paddingHorizontal: 20
            }}
            value={nome}
            onChangeText={setNome}
          />
          <Text
            style={{
              fontSize: 15,
              color: "#333",
              fontWeight: "bold",
              marginRight: 5
            }}
          >
            SENHA PARLAMENTAR
          </Text>
          <TextInput
            style={{
              width: 200,
              height: 30,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 2,
              backgroundColor: "#fff",
              paddingVertical: 8,
              paddingHorizontal: 20
            }}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#008000",
              padding: 5,
              borderRadius: 2
            }}
            onPress={handleSubmit}
          >
            <Text
              style={{
                color: "#008000",
                fontSize: 15,
                fontWeight: "bold"
              }}
            >
              REGISTRAR PRESENÇA
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
    alignItems: "center",
    justifyContent: "center"
  }
});
