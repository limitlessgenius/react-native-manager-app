

import firebase from 'firebase'
import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native';

import { send, subscribe } from 'react-native-training-chat-server';
//Change Firebase APP Name To Run Them Jointly

const NAME = 'José Manuel';
const CHANNEL = 'Reactivate';

class ChatRoom extends Component {

	state = {
		messages: [],
	};

	componentDidMount() {
		subscribe(CHANNEL, messages => {

		this.setState({messages});
    });
  }

  render() {
  	console.log('***IN CHAT ROOM')
	return (
		<View style={styles.containerStyle}>
			<FlatList 
	        	data={this.state.messages} 
	        	renderItem={this.renderItem} 
	        	inverted
	        />
        </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default ChatRoom




