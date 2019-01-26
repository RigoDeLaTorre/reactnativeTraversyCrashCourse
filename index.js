/** @format */
import React from 'react'
import { View, Text, AppRegistry } from 'react-native'
import Component2 from './src/components/Component2/Component2'
// import App from './App';
// import {name as appName} from './app.json';
const App = () => (
	<View>
		<Text>Hello World</Text>

		<Component2 />
	</View>
)
AppRegistry.registerComponent('AwesomeProject', () => App)
