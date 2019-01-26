/** @format */
import React, { Component } from 'react'
import { ListView, View, Text, StyleSheet } from 'react-native'
// import App from './App';
// import {name as appName} from './app.json';

export default class Component6 extends Component {
	render() {
		//react-native log-android will log to console when android emulator is refreshed

		return (
			<View>
				<Text>Testing component6</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#f4f4f4',
		marginBottom: 3
	},
	rowText: { flex: 1 }
})
