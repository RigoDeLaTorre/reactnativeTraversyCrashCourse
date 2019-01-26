/** @format */
import React from 'react'
import { View, Text, AppRegistry } from 'react-native'
import Component4 from './src/components/Component4/Component4'
// import App from './App';
// import {name as appName} from './app.json';
const App = () => (
	<View>
		<Component4 />
	</View>
)
AppRegistry.registerComponent('AwesomeProject', () => App)
