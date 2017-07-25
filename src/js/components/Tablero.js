import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Visita from './Visita.js';

export default class Tablero extends Component {
  render () {
    var miListaVisitas = this.props.misVisitas;
    var miMapeo = miListaVisitas.map(function(item, index){
        return <Visita key={index} dato={item}></Visita>
    });

    return (
      <ScrollView>{miMapeo}</ScrollView>
    )
  }
}

const styles = StyleSheet.create({
	visitContainer: {
		backgroundColor: '#E0E6F8',
    alignItems: 'center',
    marginTop: 10
	}
});
