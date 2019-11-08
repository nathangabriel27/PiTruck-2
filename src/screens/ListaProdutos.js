import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image, Dimensions, TextInput, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase";
import _ from "lodash"

var { height, width } = Dimensions.get('window');
type Props = {};
export default class ListaProdutos extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            deviceWidth: width,
            deviceHeight: height,
            placesData: []
        };
    }

    componentDidMount() {
   this.searchPlaces();
     } 

     searchPlaces(){
        firebase.database().ref("Users/Products")
        .once("value")
        .then((snapshot)=>{
          const placesMaped = _.values(snapshot.val());
          this.setState({placesData: placesMaped})
        })
      }

    render() {
        return (

            <View style={styles.container}>

                <Text style={styles.welcome}> Lista de produtos </Text>

                <TouchableOpacity onPress={() => this.abrirDashboard()} style={styles.loginButton} >
                    <Text style={styles.buttonText}>go to dashboard</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.abriProdutos()} style={styles.loginButton} >
                    <Text style={styles.buttonText}>go to Produtos</Text>
                </TouchableOpacity>

                <FlatList
                 data={this.state.placesData}
                 renderItem={({item})  => this.renderPlace(item)}
                />



            </View>
        );
    }

    renderPlace(item){
        return (
          <TouchableOpacity style={styles.rowView}>
            <Text>{item.nome} - </Text>
            <Text>{item.tipo}</Text>
          </TouchableOpacity>
          
        )
      }

    cadastroProdutos() {
        Actions.cadastroProdutos();
    }
    abrirDashboard() {
        Actions.dashboard();
    }
    abriProdutos() {
        Actions.produtos();
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
    rowView:{
        flex: 1,
        flexDirection: "row",
      },

});
