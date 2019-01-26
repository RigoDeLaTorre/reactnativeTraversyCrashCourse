/** @format */
import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
// import App from './App';
// import {name as appName} from './app.json';
export default class Component3 extends Component {
	constructor() {
		super()
		this.state = {
			textValue: 'Hello'
		}
	}

	onChangeText(value) {
		this.setState({
			textValue: value
		})
	}
	render() {
		//react-native log-android will log to console when android emulator is refreshed

		return (
			<View>
				<TextInput
					onChangeText={value => this.onChangeText(value)}
					placeholder="enter text"
					value={this.state.textValue}
				/>
				<Text>{this.state.textValue}</Text>
			</View>
		)
	}
}
