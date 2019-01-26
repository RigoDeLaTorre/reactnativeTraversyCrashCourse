/** @format */
import React, { Component } from 'react'
import { View, Text, AppRegistry, Navigator } from 'react-native'
import NavigationExperimental from 'react-native-deprecated-custom-components'
import Component5 from './src/components/Component5/Component5'
import Component6 from './src/components/Component6/Component6'
// import App from './App';
// import {name as appName} from './app.json';

export default class App extends Component {
	renderScene(route, navigator) {
		switch (route.id) {
			case 'component5':
				return <Component5 navigator={navigator} title="component5" />
			case 'component6':
				return <Component6 navigator={navigator} title="component6" />
		}
	}
	render() {
		return (
			<NavigationExperimental.Navigator
				initialRoute={{ id: 'component5' }}
				renderScene={this.renderScene}
				configureScreen={(route, routeStack) =>
					NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom
				}
			/>
		)
	}
}
AppRegistry.registerComponent('AwesomeProject', () => App)
