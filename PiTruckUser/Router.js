import React, { Component } from "react";
import { View, StatusBar } from "react-native";

import { Scene, Router } from "react-native-router-flux";

import Login from "./src/screens/Login";
import Cadastro from "./src/screens/Cadastro";
import PreCadastro from "./src/screens/PreCadastro";
import CadastroCompania from "./src/screens/CadastroCompania";
import Dashboard from "./src/screens/Dashboard";
import Rota from "./src/screens/Rota";
import Produtos from "./src/screens/Produtos";
import CadastroProdutos from "./src/screens/CadastroProdutos";
import ListaProdutos from "./src/screens/ListaProdutos";

console.disableYellowBox = true;
console.ignoredYellowBox = [' Configurando um timer ']


class RouterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Router>
					<Scene key="app">
						<Scene key="auth" initial hideNavBar>

							<Scene key="login" component={Login}  />
							<Scene key="preCadastro" component={PreCadastro} />
							<Scene key="cadastro" component={Cadastro} />
							<Scene key="cadastroCompania" component={CadastroCompania}  />
							<Scene key="dashboard" component={Dashboard} initial/>
							<Scene key="rota" component={Rota} />
							<Scene key="produtos" component={Produtos}  />
							<Scene key="cadastroProdutos" component={CadastroProdutos} />
							<Scene key="listaProdutos" component={ListaProdutos} />

						</Scene>
					</Scene>
				</Router>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
	sceneStyle: {
		backgroundColor: "#F5F6F7",
	},
	navigationBarStyle: {
		elevation: 10,
		borderBottomWidth: 0,
		shadowColor: "#000000",
		shadowOpacity: 0.7,
		shadowOffset: {
			height: 1,
			width: 0,
		},
	},
	titleStyle: {
		color: "#FFFFFF",
		letterSpacing: 1,
		fontWeight: "500",
		textAlign: "left",
		marginLeft: -30,
	},
};

export default RouterComponent;
