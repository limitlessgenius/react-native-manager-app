

import firebase from 'firebase'
import React, { Component } from 'react'
import { View, Text } from 'react-native'

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
	return (
		<View>CHAT ROOM</View>
    );
  }
}
export default ChatRoom




