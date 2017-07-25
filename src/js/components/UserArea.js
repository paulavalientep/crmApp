import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Tablero from './Tablero.js';
import Cabecera from './Cabecera.js';
import Filtros from './Filtros.js';

export default class UserArea extends Component {
  render () {
    return (
      <View style={styles.container} >
        <Cabecera/>
        <Filtros/>
        <Tablero misVisitas={this.props.misDatos}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});
