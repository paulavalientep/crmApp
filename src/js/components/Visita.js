//Instancia de visita
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Navigator } from 'react-native';
import Target from './Target.js';

export default class Visita extends Component {

  render () {
    var objetivos = this.props.dato.Targets.map(function (item, index){
      return <Target key={ index } dato={item}></Target>
    });

    return (
      <View style={styles.container}>

        <View style={styles.details}>

          <Text style={styles.textVisitFechas}>{this.props.dato.plannedFor}/{this.props.dato.fulfilledAt}</Text>
          <Text style={styles.textVisitCustomer}>{this.props.dato.Customer.name}</Text>
          <Text style={styles.textVisitNotes}>{this.props.dato.notes}</Text>

          <View>{objetivos}</View>
        </View>

        <View style={styles.buttonViewVisita}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>></Text>
            </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5882FA',
    marginBottom:10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  details: {
    backgroundColor: '#5882FA',
    height: 135,
    marginBottom:10,
    marginLeft: 5,
    marginRight: 5,
    paddingHorizontal: 10,
    width: 320
	},
  buttonViewVisita: {
    backgroundColor: '#5882FA',
    height: 110,
    width: 25,
    marginRight: 20
  },
  textVisitFechas: {
    marginTop: 10,
    color: '#FFF',
    textAlign: 'left',
    fontWeight: '100',
    fontSize: 13
  },
  textVisitCustomer: {
    color: '#FFF',
    textAlign: 'left',
    fontWeight: '300',
    fontSize: 20
  },
  textVisitNotes: {
    color: '#FFF',
    textAlign: 'left',
    fontStyle: 'italic',
    fontWeight: '100',
    fontSize: 15
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'left',
    fontWeight: '500',
    fontSize: 30,
    marginRight: 10,
    marginTop: 40
  }
});
