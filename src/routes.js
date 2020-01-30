import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Config from "./pages/Config";
import Principal from "./pages/Principal";
import Projeto from "./pages/Projeto";
import RegistrarPresenca from "./pages/RegistrarPresenca";
import RegistrarVoto from "./pages/RegistrarVoto";
import PedirPalavra from "./pages/PedirPalavra";

const AppNavigator = createDrawerNavigator({
  Principal: {
    screen: Principal
  },
  ProjetoDeLei: {
    screen: Projeto,
    navigationOptions: {
      drawerLabel: "Projeto de Lei"
    }
  },
  Config: {
    screen: Config,
    navigationOptions: {
      drawerLabel: "Configurações"
    }
  },
  RegistrarPresenca: {
    screen: RegistrarPresenca,
    navigationOptions: {
      drawerLabel: "Registrar Presença"
    }
  },
  RegistrarVoto: {
    screen: RegistrarVoto,
    navigationOptions: {
      drawerLabel: "Registrar Voto"
    }
  },
  PedirPalavra: {
    screen: PedirPalavra,
    navigationOptions: {
      drawerLabel: "Pedir Palavra"
    }
  }
});

export default createAppContainer(AppNavigator);
