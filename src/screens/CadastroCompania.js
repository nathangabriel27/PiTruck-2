import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";

var { height, width } = Dimensions.get('window');

export default class CadastroProdutos extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            deviceWidth: width,
            deviceHeight: height,
            nome: "teste empresa ",
            CNPJ: "12324342353",
        };
    }

    componentDidMount() {
        const { currentUser } = firebase.auth();
        if (currentUser) {
            console.log("Estou logado: ", currentUser.uid)
        }
        //Buscar os dados do usuário logado no banco (depois de ter aprendido a fazer push no banco e criar auth)
    }

    render() {
        return (
            <View style={styles.container}>



                <Text style={styles.titleText}>Cadastro de Compania</Text>


                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({ nome: text })}
                    placeholder="Nome da empresa"
                    value={this.state.nome}
                />
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({ tipo: text })}
                    placeholder="CNPJ"
                    value={this.state.CNPJ}
                />

                <TouchableOpacity onPress={() => this.cadastroProduto()} style={styles.registerButton} >
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    cadastroProduto() {
        Alert.alert(
            'Cadastrar produto',
            'Confirma o seu cadastro?',
            [
                { text: 'Cancelar e corrigir', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'sim', onPress: () =>
                        this.registraProduto()
                },
            ],
            { cancelable: false }
        )
    }

    registraProduto() { 
        const placeData = {
            nome: this.state.nome,
            CNPJ: this.state.CNPJ,
        }
        const { currentUser } = firebase.auth();
        if (currentUser) {
            console.log("Estou logado: ", currentUser.uid)
        }
        firebase.database().ref(`Users/Company`)
            .push(placeData)
            .then((snapshot) => {
                const placeId = snapshot.key;
                firebase.database().ref(`Users/Company`)
                    .update({
                        uid: placeId
                    })
                Alert.alert("Sucesso", "Empresa cadastrada!");
                console.log("currenteUser", currentUser);
            })
    }

    askRegisterPlace() {
        Alert.alert(
            'Registrar Local',
            'Confirma o seu registo do local?',
            [
                { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'OK', onPress: () =>
                        this.registerPlace()
                },
            ],
            { cancelable: false }
        )
    }


    voltaTela() {
        Actions.pop()
    }

    abrirDashboard() {
        Actions.dashboard();
    }

    abrirRota() {
        Actions.rota();
    }

    cadastroProdutos() {
        Actions.rota();
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    registerButton: {
        backgroundColor: "#008B8B",
        borderWidth: 0.5,
        borderColor: '#222',
        borderRadius: 10,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        alignItems: 'center'
  },

    buttonText: {
        color: "#fff",
        textDecorationLine: "underline"
      },

    inputStyle: {
        height: height * 0.06,
        width: width * 0.85,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        margin: width * 0.04,
        justifyContent: 'center',

    },

    titleText: {
        marginTop: 45,
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center',
        color: "#008B8B",
        fontStyle: 'italic',

    },

});