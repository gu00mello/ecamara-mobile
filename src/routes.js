import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Config from "./pages/Config";
import Principal from "./pages/Principal";
import Projeto from "./pages/Projeto";
import RegistrarPresenca from "./pages/RegistrarPresenca";
import RegistrarVoto from "./pages/RegistrarVoto";
import VizualizarPauta from "./pages/VizualizarPauta";
import PedirPalavra from "./pages/PedirPalavra";
import Sair from "./pages/Sair";
import PainelPresidente from "./pages/PainelPresidente/aa";

const AppNavigator = createDrawerNavigator({
  Principal: {
    screen: Principal,
    navigationOptions: {
      drawerLabel: "Principal"
    }
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
      drawerLabel: () => null
    }
  },
  RegistrarVoto: {
    screen: RegistrarVoto,
    navigationOptions: {
      drawerLabel: () => null
    }
  },
  PedirPalavra: {
    screen: PedirPalavra,
    navigationOptions: {
      drawerLabel: () => null
    }
  },

  VizualizarPauta: {
    screen: VizualizarPauta,
    navigationOptions: {
      drawerLabel: () => null
    }
  },

  PainelPresidente: {
    screen: PainelPresidente,
    navigationOptions: {
      drawerLabel: "Painel Presidente"
    }
  },

  Sair: {
    screen: Sair
  }
});

export default createAppContainer(AppNavigator);
