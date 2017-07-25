import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content"/>
				<TextInput
					placeholder="username"
					placeholderTextColor="rgba(255,255,255,0.7)"
					underlineColorAndroid='transparent'
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					style={styles.input}
					//cambiamos state de username
					onChangeText={(username) => this.setState({username})}
					//value={this.state.username}
				/>
				<TextInput
					placeholder="password"
					underlineColorAndroid='transparent'
					placeholderTextColor="rgba(255,255,255,0.7)"
					secureTextEntry
					returnKeyType="go"
					ref={(input) => this.passwordInput = input}
					style={styles.input}
					//Cambiamos state de password
					onChangeText={(password) => this.setState({password})}
					//value={this.state.password}
				/>
				<TouchableOpacity style={styles.buttonContainer} onPress={this.login}>
					<Text style={styles.buttonText}>LOGIN</Text>

				</TouchableOpacity>
			</View>
		);
	}

	//Definir estado inicial
	// contructor(props) {
	// 	super(props);
	// 	this.state = {username: '', password: ''};
	// }

	//Función para cuando pulsemos botón
	login = () => {
		//Comprobar datos con DB hacer fetch POST

		//.then((response) => response.json())

	}

}


const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 10,
		color: '#FFFFFF',
		paddingHorizontal: 10,
	},
	buttonContainer: {
		backgroundColor: '#2980b9',
		paddingVertical: 15
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700'
	}
});
