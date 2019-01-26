/** @format */
import React from 'react'
import { View, Text, AppRegistry } from 'react-native'
import Component3 from './src/components/Component3/Component3'
// import App from './App';
// import {name as appName} from './app.json';
const App = () => (
	<View>
		<Component3 />
	</View>
)
AppRegistry.registerComponent('AwesomeProject', () => App)
