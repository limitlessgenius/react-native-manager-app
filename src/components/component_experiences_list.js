

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux'

import { fetchExperiences } from '../actions'

import { Button, CardSection } from './common' 

class ExperiencesList extends Component {

	componentWillMount() {
		this.props.fetchExperiences()	
	}

	renderExperience({item}) {
		return (
			<CardSection>
				<Text>{item.name}</Text>
			</CardSection>
		)	
	}

	render() {
		return(
			<FlatList
				data={this.props.arrExperience}
				renderItem={this.renderExperience.bind(this)}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	const arrExperience = []
	

	return { arrExperience: state.experiences }
}

export default connect(mapStateToProps, { fetchExperiences })(ExperiencesList)
/*

*/








