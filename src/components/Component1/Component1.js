/** @format */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import App from './App';
// import {name as appName} from './app.json';
export default class Component1 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Rigo',
			showName: true,
			message: this.props.message
		}
	}
	static defaultProps = {
		message: 'hi there'
	}
	render() {
		//react-native log-android will log to console when android emulator is refreshed
		console.log('testing')
		let name = this.state.showName ? this.state.name : 'no name'
		return (
			<View>
				<Text>{this.state.message}</Text>
				<Text>{name}</Text>
			</View>
		)
	}
}
