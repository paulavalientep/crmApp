//Vista a mostrar tras pulsar una visita. No consigo enlazar con boton

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default class DetalleVisita extends Component {
  render () {
    return (
      <View style={styles.container}>
      <Text>Visita:</Text>
      <Text>Cliente: {this.props.misDatos.Customer.name}</Text>


      </View>
