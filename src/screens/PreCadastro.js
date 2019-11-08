import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styled, { css } from "styled-components/native";
import firebase from "firebase";


var { height, width } = Dimensions.get('window');

console.disableYellowBox = true;
console.ignoredYellowBox = [' Configurando um timer ']


export default class Cadastro extends Component<Props> {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }} >
                <View style={{ width: '100%', height: '70%', backgroundColor: '#008B8B' }} >

                    <Text style={styles.titleText}>PiTruck</Text>

                    <View style={styles.viewText}>
                        <Text style={styles.textOrientacaoTitulo}>
                            Prezado usuário,
                    </Text>
                        <Text style={styles.textOrientacao}>
                            para garantir o melhor funcionamento do nosso sitema,
                            escolha a baixo o perfil de usário que se adeque melhor ao seu cenário.
                            {"\n"}

                            Cliente: Se você deseja enviar produtos para outros slugeres.
                        {"\n"}
                            Transportadora: Se você que fornecer o serviço de transporte.
                        </Text>
                    </View>
                </View>

                <View style={{ width: '100%', height: '30%', backgroundColor: '#FFF' }}>

                    <View View style={{ flex: 1, flexDirection: 'row' }} >

                        <View style={{ width: '50%', height: '100%', backgroundColor: '#FFF' }}>
                            <Image style={styles.iconPleople} source={require('../../assets/pleoples.png')} />

                            <TouchableOpacity onPress={() => this.abrirCadastro()} style={styles.transportadoraButton} >
                                <Text style={styles.buttonText}> Cliente </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '50%', height: '100%', backgroundColor: '#FFF', borderColor: '#222', borderLeftWidth: 0.5 }}>
                            <Image style={styles.iconCompany} source={require('../../assets/company.png')} />

                            <TouchableOpacity onPress={() => this.abrirCadastroCompania()} style={styles.transportadoraButton} >
                                <Text style={styles.buttonText}> Transportadora </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

            </View>
        );
    }

    abrirCadastro() {
        Actions.cadastro();
    }

    abrirCadastroCompania() {
        Actions.cadastroCompania();
    }

}


const styles = StyleSheet.create({

    titleText: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 50,
        alignItems: 'center',
        textAlign: 'center',
        color: "#FFF",
        fontStyle: 'italic',
    },

    viewText: {
        textAlign: 'justify',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
    },

    textOrientacao: {
        fontSize: 20,
        textAlign: 'center',
        color: "#fff",
    },
    textOrientacaoTitulo: {
        fontSize: 25,
        color: "#fff",
        textAlign: 'justify',
    },

    iconCompany: {
        marginTop: 25,
        marginLeft: 60,
        width: 88,
        height: 86,
    },

    iconPleople: {
        marginTop: 25,
        marginLeft: 60,
        width: 88,
        height: 86,
    }, 

    transportadoraButton: {
        backgroundColor: "#008B8B",
        borderWidth: 0.5,
        borderColor: '#222',
        borderRadius: 10,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        alignItems: 'center',

    },
    buttonText: {
        color: "#fff"
    }
})
