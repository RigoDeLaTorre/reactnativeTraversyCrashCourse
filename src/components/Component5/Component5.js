/** @format */
import React, { Component } from 'react'
import {
	ListView,
	View,
	Text,
	StyleSheet,
	TouchableHighlight
} from 'react-native'
// import App from './App';
// import {name as appName} from './app.json';

export default class Component5 extends Component {
	constructor() {
		super()
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
		this.state = {
			userDataSource: ds
		}
	}

	componentDidMount() {
		this.fetchUsers()
	}
	fetchUsers() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(response => {
				this.setState({
					userDataSource: this.state.userDataSource.cloneWithRows(response)
				})
			})
	}
	onPress(user) {
		this.props.navigator.push({
			id: 'component6'
		})
	}
	renderRow(user, sectionId, rowId, highlightRow) {
		return (
			<TouchableHighlight onPress={() => this.onPress(user)}>
				<View style={styles.row}>
					<Text style={styles.rowText}>{user.name}</Text>
				</View>
			</TouchableHighlight>
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
