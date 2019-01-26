/** @format */
import React, { Component } from 'react'
import { ListView, View, Text, StyleSheet } from 'react-native'
// import App from './App';
// import {name as appName} from './app.json';

const users = [
	{ name: 'John Doe' },
	{ name: 'Brad Traversy' },
	{ name: 'Steve Smith' },
	{ name: 'Janneete Williams' }
]
export default class Component4 extends Component {
	constructor() {
		super()
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			userDataSource: ds.cloneWithRows(users)
		}
	}
	renderRow(user, sectionId, rowId, highlightRow) {
		return (
			<View style={styles.row}>
				<Text style={styles.rowText}>{user.name}</Text>
			</View>
		)
	}

	render() {
		//react-native log-android will log to console when android emulator is refreshed

		return (
			<ListView
				dataSource={this.state.userDataSource}
				renderRow={this.renderRow.bind(this)}
			/>
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
