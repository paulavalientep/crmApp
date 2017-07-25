//Cabecera para nombre usuario, config, menu...

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Visita from './Visita.js';


export default class Cabecera extends Component {
  render () {
    return (
      <View style={styles.container}>

        <View style={styles.containerArriba}>
          <Text style={styles.cabecera}>Bienvenid@ Paula</Text>
          <View style={styles.logoContainer}>
            <TouchableOpacity style={styles.logo}>
              <Image source={require('../../../images/logout.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logo}>
              <Image source={require('../../../images/sync.jpg')}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerAbajo}>
          <Text style={styles.cabecera}>Este es el listado de tus visitas</Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginTop: 10,
    marginBottom:10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
  },
  containerArriba: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center'
  },
  containerAbajo: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginLeft: 10,
    alignItems: 'flex-end'
  },
  cabecera: {
    fontSize: 18,
    fontWeight: '700',
  },

  logo: {
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
    backgroundColor: '#FFF',
    width:30,
    height:30
  },

  logoContainer: {
    flexDirection: 'row',
    marginLeft: 110
  }
});
