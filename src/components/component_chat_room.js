

import firebase from 'firebase'
import React, { Component } from 'react'
import {
	Text, 
	View, 
	FlatList,
	TextInput, 
	KeyboardAvoidingView, 
	TouchableOpacity
	} from 'react-native';

import { send, subscribe } from 'react-native-training-chat-server';
//Change Firebase APP Name To Run Them Jointly

const NAME = 'José Manuel';
const CHANNEL = 'Reactivate';

class ChatRoom extends Component {

	state = {
		typing: "",
		messages: [],
	};

	componentDidMount() {
		subscribe(CHANNEL, messages => {

			this.setState({messages});
    	});
  	}

  	async sendMessage() {
	  await send({
	    channel: CHANNEL,
	    sender: NAME,
	    message: this.state.typing
	  });
	  this.setState({
	    typing: '',
	  });
	}

	renderItem({item}) {
		return <Text>{item.message}</Text>    			
	}

	render() {
		return (
			<View style={styles.containerStyle}>
				<FlatList 
		       		data={this.state.messages} 
		       		renderItem={this.renderItem.bind(this)} 
		       		inverted
		      	/>
		  		<View style={styles.footer}>
					<TextInput
						value={this.state.typing}
						onChangeText={text => this.setState({typing: text})}
						style={styles.input}
						underlineColorAndroid="transparent"
						placeholder="Start Experience"
					/>
					<TouchableOpacity onPress={this.sendMessage.bind(this)}>
						<Text style={styles.send}>Send</Text>
					</TouchableOpacity>
				</View>
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
  }, 
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
  send: {
    alignSelf: 'center',
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
};

export default ChatRoom




