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
            nome: "Abacaxi",
            tipo: "Perecivel",
            uidCreator: "",

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

                <TouchableOpacity onPress={() => this.voltaTela()} style={styles.backButton} >
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.titleText}>Cadastro de Produtos</Text>


                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({ nome: text })}
                    placeholder="Nome do produto"
                    value={this.state.nome}
                />
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({ tipo: text })}
                    placeholder="Tipo de produto"
                    value={this.state.tipo}
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
            'Confirma o seu cadastrar do produto?',
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
        const { currentUser } = firebase.auth();
        if (currentUser) {
            console.log("Estou logado: ", currentUser.uid)
        }
        const placeData = {
            nome: this.state.nome,
            tipo: this.state.tipo,
            uidCreator: currentUser.uid
        }
        //firebase.database().ref(`Users/UsersPeople/${currentUser.uid}/Produtos`)
        firebase.database().ref(`Users/Products`)
            .push(placeData)
            .then((snapshot) => {
                const placeId = snapshot.key;
                //firebase.database().ref(`Users/UsersPeople/${currentUser.uid}/Produtos`)
                firebase.database().ref(`Users/Products`)
                    .update({
                        uid: placeId
                    })
                Alert.alert("Sucesso", "produto cadastrado!");
                console.log("currenteUser", currentUser);
                console.log("snapshot.key",snapshot.key);
                
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    backButton: {
        backgroundColor: "gray",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        alignSelf: "flex-start"
    },
    registerButton: {
        backgroundColor: "#23541b",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        width: width * 0.8,
        alignItems: 'center'
    },
    buttonText: {
        color: "white"
    },
    inputStyle: {
        height: height * 0.06,
        width: width * 0.85,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        margin: width * 0.04
    },
    titleText: {
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'center',
        color: "#23541b"
        

    },
    loginButton: {
        backgroundColor: "#23541b",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        width: width * 0.5,
        alignItems: 'center'
    },

});
