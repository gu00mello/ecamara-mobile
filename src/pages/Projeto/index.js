import React, { useState, useEffect } from "react";

import { Container, Title, Select, Button, TextButton } from "./styles";
import { getProjeto, setProjeto } from "../../services/projeto";

export default function Projeto({ navigation }) {
  const [newProjeto, setNewProjeto] = useState("");

  useEffect(() => {
    async function getProjectIsSaved() {
      const isProject = await getProjeto();

      setNewProjeto(isProject);
    }
    getProjectIsSaved();
  }, []);

  const handleClick = async () => {
    await setProjeto(newProjeto);

    navigation.navigate("Principal", {
      url: newProjeto
    });
  };

  return (
    <Container>
      <Title>Selecione o Projeto lei a ser Votado</Title>
      <Select
        selectedValue={newProjeto}
        onValueChange={(item, index) => setNewProjeto(item)}
      >
        <Select.Item label="Java" value="java" />
        <Select.Item label="JavaScript" value="js" />
      </Select>
      <Button onPress={handleClick}>
        <TextButton>Salvar</TextButton>
      </Button>
    </Container>
  );
}
