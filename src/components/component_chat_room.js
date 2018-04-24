

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { GiftedChat } from 'react-native-gifted-chat';

// FRESH START
class ChatRoom extends Component {

  state = {
    messages: [],
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }

}
export default ChatRoom


