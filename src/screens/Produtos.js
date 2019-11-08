import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";

var { height, width } = Dimensions.get('window');

export default class Produtos extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            deviceWidth: width,
            deviceHeight: height,
        };
    }

    /*  componentDidMount() {
   
     } */

    render() {
        return (

            <View style={styles.container}>

                <Text style={styles.welcome}>Lista e cadatro de Produtos</Text>

                <TouchableOpacity onPress={() => this.abrirCadastroProdutos()} style={styles.loginButton} >
                    <Text style={styles.buttonText}>cadastro de Produtos</Text>
                </TouchableOpacity>
             
                <TouchableOpacity onPress={() => this.listaProdutos()} style={styles.loginButton} >
                    <Text style={styles.buttonText}>Lista de Produtos </Text>
                </TouchableOpacity>

                
                <TouchableOpacity onPress={() => this.abrirDashboard()} style={styles.loginButton} >
                    <Text style={styles.buttonText}>go to dashboard</Text>
                </TouchableOpacity>


            </View>
        );
    }


    listaProdutos() {    
        Actions.listaProdutos();
    }

    abrirCadastroProdutos() {    
        Actions.cadastroProdutos();
    }
    abrirDashboard() {
        Actions.dashboard();
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
        backgroundColor: "#23541b",
        borderRadius: 10,
        padding: 10,
        margin: 20,
        alignSelf: "flex-start"
    },
    registerButton: {
        backgroundColor: "green",
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
        color: "#039BE5"

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
