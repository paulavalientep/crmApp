import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

import Login from './Login';
import UserArea from './UserArea';
import DetalleVisita from './DetalleVisita';


console.log('ESTOY EN APP.JS');

//Pinta las visitas del usuario. Cambiar a false para ver pantalla de login
let isUser = true;


export default class App extends Component {
	render() {
		  if (isUser) {
        console.log('Hay usuario -> Pinto UserArea');
        return(
          <UserArea misDatos={this.props.datosSacados}/>
        );
      } else {
        console.log('Ǹo hay usuario -> Pinto Login');
        return(
          <Login />
        );
      }
  }
}
