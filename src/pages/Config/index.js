import React, { useState, useEffect } from "react";

import { Container, Title, Input, Button, TextButton } from "./styles";
import { getUrl, setUrl } from "../../services/url";
import { Alert } from "react-native";

export default function Config({ navigation }) {
  const [newurl, setNewUrl] = useState("");

  useEffect(() => {
    async function getUrlIsSaved() {
      const isUrl = await getUrl();

      setNewUrl(isUrl);
    }
    getUrlIsSaved();
  }, []);

  const handleClick = async () => {
    await setUrl(newurl);
    Alert.alert("Ecamara", "Domínio alterado com sucesso!");
    navigation.navigate("Principal", {
      url: newurl
    });
  };

  return (
    <Container>
      <Title>Alterar domínio</Title>
      <Input value={newurl} onChangeText={setNewUrl} />
      <Button onPress={handleClick}>
        <TextButton>Salvar</TextButton>
      </Button>
    </Container>
  );
}
