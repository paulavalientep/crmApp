/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import App from './src/js/components/App';
import PropTypes from 'prop-types';

import PouchDB from 'pouchdb-react-native';


PouchDB.plugin(require('pouchdb-load'));

var createReactClass = require('create-react-class');


//Creacion de la base de datos PouchDB
const db = new PouchDB('myDB');
const remoteDB = false;


if (db !== null) {
  console.log('Base de datos creada!!!!');
} else {
  console.log('Base de datos NOOOO creada');
}

//Creacion de la aplicacion con la base de datos
var crmApp = createReactClass({
  getInitialState: function(){
    return {datos: []};
  },
  componentDidMount: function(){

    var self = this;

    db.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
      console.log(" DENTRO DE LA DB HAY -------------------------------->",result);
      if(result.length>0){
        console.log("Los docs ya estan cargados");
        /*var onlydocs = result.rows.map(function(x) {
          return x.doc;
        });
        self.setState({datos:onlydocs});*/
      }else{
        console.log('Cargando docs a pouch...');
        var visitasLogged = [];

        fetch("https://dcrmt.herokuapp.com/api/session",
              { method: "POST",
                credentials: 'same-origin',
                headers: {
                  'Accept': 'application/x-www-form-urlencoded',
                  "Content-Type": "application/x-www-form-urlencoded" },
                body: "login=paula&password=valiente1234"
        }).then(function(r) {
          fetch('https://dcrmt.herokuapp.com/api/users/logged/visits', {
              method: 'GET',
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }


          }).then(function(r) {
                   console.log('GGGGEEEEETTTTTT', r)
                   visitasLogged = JSON.parse(r._bodyText);
                   console.log('VisitasLOGGGEEEDDD', visitasLogged)
                   db.bulkDocs(visitasLogged).then(function (response) {
                     console.log('HE METIDO ESTOOOOOOOOOO',response)
                   }).catch(function (err) {
                     console.log('las visitas que tengo, me han llegado??', visitasLogged)
                     console.log('NOOOOO se pueden meter porque:', err);
                   }).then(function(){
                     var onlydocs = result.rows.map(function(x) {
                       return x.doc;
                     })
                     self.setState({datos:onlydocs});
                   }).catch(function(err){
                     console.log('No se puede hacer map --->', err)
                   })
            }).catch(function(err) {
              console.log("ERROR GET ---> ", err)
            })


        }).catch(function(err) {
        	console.log("ERROR POST ---> ", err)
        });
      }
    }).catch(function (err){
      console.log('No se pueden sacar alldocs --->', err);
    });
  },
//BORRAR BASE DE DATOS, meter dentro arriba
    /*db.destroy().then(function (response) {
      console.log('BORRO BASE DE DATOSSSSSSSSSS')
      console.log(response)
    }).then(function () {
      db.allDocs({
        include_docs: true,
        attachments: true
      }).then(function (result) {
        console.log('******CONTENIDO BASE DE DATOS', result)
      }).cath(function (err){
        console.log(err);
      });
    }).catch(function (err) {
      console.log(err);
    });*/

  render: function() {
    console.log('Me voy a App');
    return (
      <App datosSacados={this.state.datos} />
    );
  }
});



AppRegistry.registerComponent('crmApp', () => crmApp);
