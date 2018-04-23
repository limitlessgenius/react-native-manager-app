

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux'

import { fetchExperiences } from '../actions'

import { Button } from './common' 

// https://manager-dev-c287d.firebaseio.com/experiences.json
// experiences end point

class ExperiencesList extends Component {

	componentWillMount() {
		this.props.fetchExperiences()	
	}

	render() {

		return(
			<View>
				<Text>LIST OF EXPERIENCES</Text>
			</View>
		)
	}
}

const mapStateToProps = (state) => {

	console.log('STATE', state)
	return {
		experiences: state.experiences
	}
}

export default connect(mapStateToProps, { fetchExperiences })(ExperiencesList)








