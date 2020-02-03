import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";
import AppContext from "../../context";
import { getProjeto } from "../../services/projeto";
import { getUserData } from "../../services/auth";
import api from "../../services/api";

export default function RegistrarVoto({ navigation }) {
  const { url: BASEURL } = useContext(AppContext);

  const [parlamentar, setParlamentar] = useState({});
  const [projeto, setProjeto] = useState(null);

  useEffect(() => {
    async function getParlametar() {
      const isValue = await getUserData();
      setParlamentar(isValue);
    }

    getParlametar();

    async function getProject() {
      const isProjetoAtual = await getProjeto();

      const { data } = await api.get(
        `http://${BASEURL}/materias/${isProjetoAtual}`
      );

      if (data.success) setProjeto(data.results);
    }

    getProject();
  }, []);
  const handleVoto = async param => {
    const { data } = await api.post(`http://${BASEURL}/registrarVoto`, {
      cod_parlament: parseInt(parlamentar.cod_parlament),
      cod_sessao: parseInt(projeto.cod_materia),
      cod_tpvoto: param
    });

    if (data.success) {
      Alert.alert("Ecamara", "Voto registrado com sucesso");
      navigation.navigate("Principal");
    }
  };

  if (!projeto) return null;

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
          PROJETO DE LEI {projeto.exercicio_mat}/{projeto.data_materia} -
          ASSUNTO: {projeto.desc_materia}
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
            onPress={() => handleVoto(0)}
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
            onPress={() => handleVoto(1)}
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
            onPress={() => handleVoto(2)}
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
          PARLAMENTAR: {parlamentar.nome_completo}
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
