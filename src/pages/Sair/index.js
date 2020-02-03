import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { signOut } from "../../services/auth";
import { NavigationEvents } from "react-navigation";

export default function Sair({ navigation }) {
  const [refresh, setRefresh] = useState(false);

  async function logout() {
    await signOut();
    navigation.navigate("Principal");
  }
  logout();

  return (
    <View refresh={refresh}>
      <NavigationEvents onDidFocus={() => setRefresh(!refresh)} />
    </View>
  );
}
