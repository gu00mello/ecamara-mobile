import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin: 20px;
`;

export const Select = styled.Picker`
  width: 90%;
  height: 60px;
  padding: 8px 30px;
  color: #333;
  border-width: 1px;
  border-color: #333;
  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  background-color: green;
  width: 90%;
  border-radius: 4px;
  padding: 20px;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  color: #fff;
  text-align: center;
`;
