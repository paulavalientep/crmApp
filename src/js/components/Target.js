//Targets de la visita
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Target extends Component {

/* _estado: function () {
    var estadoObjetivo = null;
    if (this.props.dato.success === "false"){
      return estadoObjetivo = "Fallido";
    } else if (this.props.dato.success === "true"){
      return estadoObjetivo = "Cumplido";
    } else {
      return estadoObjetivo = "PENDIENTE";
    }
  },*/
  render() {
    return (
      <Text>{this.props.dato.Company.name}: {this.props.dato.TargetType.name} - /*{ESTADO}*/ </Text>
    );
  }

}
