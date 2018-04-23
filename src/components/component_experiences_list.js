

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

import { fetchExperiences } from '../actions'


class ActivitiesList extends Component {
	render() {
		this.props.fetchExperiences()
		return(
			<View>
				<Text>LIST OF EXPERIENCES</Text>
			</View>
		)
	}
}

export default connect(null, { fetchExperiences })(ActivitiesList)








