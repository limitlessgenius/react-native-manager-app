

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux'

import { fetchExperiences } from '../actions'

import { Button, CardSection, Spinner, RoundButton, Card } from './common' 

class ExperiencesList extends Component {

	componentWillMount() {
		this.props.fetchExperiences()	


		
	}

	renderExperience({item}) {
		return (
			<View>
				<RoundButton>{item.name}</RoundButton>
			</View>
			
		)	
	}

	render() {
		return(
			<FlatList
				horizontal={true}
				data={this.props.experiences}
				renderItem={this.renderExperience.bind(this)}
			/>
			
		)
	}
}

const mapStateToProps = ({ experiences }) => {

	console.log(experiences)

	return { experiences }
}

export default connect(mapStateToProps, { fetchExperiences })(ExperiencesList)
/*

*/








