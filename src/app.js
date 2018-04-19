
import React, { Component } from 'react'
import firebase from 'firebase'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: "AIzaSyDFZM5rssK2a01Qk92E_7zR006nVU3xQ6c",
			authDomain: "manager-dev-c287d.firebaseapp.com",
			databaseURL: "https://manager-dev-c287d.firebaseio.com",
			projectId: "manager-dev-c287d",
			storageBucket: "manager-dev-c287d.appspot.com",
			messagingSenderId: "401751975593"
		};

		firebase.initializeApp(config);
	}
	render() {
		return(
			<Provider store={createStore(reducers)}>
				<View>
					<Text>REACT NATIVE APP</Text>
				</View>
			</Provider>
		)
	}
}

export default App











