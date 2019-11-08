import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";

var { height, width } = Dimensions.get('window');

export default class Dashboard extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
    };
  }

  render() {
    return (

      <View style={styles.container}>

        <Image style={styles.iconTruck} source={require('../../assets/icon.png')} />

        <TouchableOpacity onPress={() => this.abriProdutos()} style={styles.loginButton} >
          <Text style={styles.buttonText}>Meus Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.loginButton} >
          <Text style={styles.buttonText}>Locais Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.loginButton} >
          <Text style={styles.buttonText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.loginButton} >
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.loginButton} >
          <Text style={styles.buttonText}>EM BREVE</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.loginButton} >
          <Text style={styles.buttonText}>Ajuda e Suporte </Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.loginButton} >
          <Text style={styles.buttonText}>Sobre</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.logout()} style={styles.logoutButton} >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>




        <TouchableOpacity onPress={() => this.abrirRota()} style={styles.loginButton} >
          <Text style={styles.buttonText}>Abrir tela  de rota</Text>
        </TouchableOpacity>




      </View>
    );
  }

  abrirRota() {
    Actions.rota();
  }

  abriProdutos() {
    Actions.produtos();
  }

  cadastroProdutos() {
    Actions.cadastroProdutos();
  }

  logout() {
    firebase.auth().signOut()
      .then(function () {
        // Sign-out successful.
        Actions.login();
      })
      .catch(function (error) {
        // An error happened
      });
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection : 'column',
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
  logoutButton:{
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.5,
    alignItems: 'center'
  },

  iconTruck: {
    width: 100,
    height: 100,
    margin: 10
  },

});
