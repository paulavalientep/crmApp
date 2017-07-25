//Panel de filtrado

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Switch } from 'react-native';

export default class Filtros extends Component {
  render () {
    return (
        <View style={styles.container}>
          <View style={styles.filtrosUno}>
            <Text style={styles.texto}> Planificado desde: </Text>
            <TextInput
    					placeholder="dd-mm-aaaa"
    					placeholderTextColor="rgba(255,255,255,0.7)"
    					underlineColorAndroid='transparent'
    					returnKeyType="next"
    					//onSubmitEditing={() => }
    					autoCapitalize="none"
    					autoCorrect={false}
    					style={styles.inputUno}
            />
            <Text style={styles.texto}>   hasta: </Text>
            <TextInput
              placeholder="dd-mm-aaaa"
              placeholderTextColor="rgba(255,255,255,0.7)"
              underlineColorAndroid='transparent'
              returnKeyType="next"
              //onSubmitEditing={() => }
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputUno}
            />
          </View>
          <View style={styles.filtrosDos}>
            <Text style={styles.texto}> Cliente: </Text>
            <TextInput
    					placeholder="Cliente a buscar"
    					placeholderTextColor="rgba(255,255,255,0.7)"
    					underlineColorAndroid='transparent'
    					returnKeyType="next"
    					//onSubmitEditing={() => this.passwordInput.focus()}
    					autoCapitalize="none"
    					autoCorrect={false}
    					style={styles.inputDos}
            />
            <Text style={styles.texto}> Fábrica: </Text>
            <TextInput
              placeholder="Fábrica a buscar"
              placeholderTextColor="rgba(255,255,255,0.7)"
              underlineColorAndroid='transparent'
              returnKeyType="next"
              //onSubmitEditing={() => this.passwordInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputDos}
            />
          </View>
          <View style={styles.filtrosTres}>
              <Text style={styles.texto}> Favoritas </Text>
              <Image source={require('../../../images/estrella.jpg')}/>
              <Switch/>
              <TouchableOpacity style={styles.filtrar}>
                <Text style={styles.textoFiltrar}>Filtrar</Text>
              </TouchableOpacity>
          </View>


        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#A9D0F5',
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      flexDirection: 'column'
    },
    filtrosUno: {
      marginTop: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    filtrosDos: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    filtrosTres: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    texto: {
      fontSize: 13,
      fontWeight: '100',
    },
    inputUno: {
    height: 30,
    width: 95,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFFFFF',
    justifyContent: 'center',
      paddingVertical: 5,
    },
    inputDos: {
      height: 30,
      width: 110,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginBottom: 10,
      color: '#FFFFFF',
      justifyContent: 'center',
      marginRight: 20,
      marginLeft: 5,
      paddingVertical: 5,
    },
    filtrar: {
      marginLeft: 170,
      height: 30,
      width: 50,
      marginBottom: 10,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      paddingVertical: 5,
    },
    textoFiltrar: {
      textAlign: 'center',
      justifyContent: 'center',
      color: '#2E9AFE',
      fontWeight: '200'
    }
});
