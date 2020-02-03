import React, { useState, useEffect, useContext } from "react";

import { Container, Title, Select, Button, TextButton } from "./styles";
import { getProjeto, setProjeto } from "../../services/projeto";
import api from "../../services/api";
import AppContext from "../../context";

export default function Projeto({ navigation }) {
  const { url: BASEURL } = useContext(AppContext);

  const [newProjeto, setNewProjeto] = useState("");
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    async function getProjectIsSaved() {
      const isProject = await getProjeto();

      setNewProjeto(isProject);
    }
    getProjectIsSaved();

    async function getMaterias() {
      try {
        const { data } = await api.get(`http://${BASEURL}/materias/1000/0`);

        setMaterias(data.results);
      } catch (error) {
        if (error.data) {
          alert(error.data.message);
        }
        alert(error.message);
      }
    }

    getMaterias();
  }, []);

  const handleClick = async () => {
    await setProjeto(newProjeto.toString());

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
        {materias.map(materia => (
          <Select.Item
            key={materia.cod_materia}
            label={materia.desc_materia}
            value={materia.cod_materia}
          />
        ))}
      </Select>
      <Button onPress={handleClick}>
        <TextButton>Salvar</TextButton>
      </Button>
    </Container>
  );
}
