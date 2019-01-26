/** @format */
import React from 'react'
import { View, Text, AppRegistry } from 'react-native'
import Component5 from './src/components/Component5/Component5'
// import App from './App';
// import {name as appName} from './app.json';
const App = () => (
	<View>
		<Component5 />
	</View>
)
AppRegistry.registerComponent('AwesomeProject', () => App)
