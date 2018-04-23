

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux'

import { fetchExperiences } from '../actions'

import { Button, CardSection, Spinner, RoundButton } from './common' 

class ExperiencesList extends Component {

	componentWillMount() {
		this.props.fetchExperiences()	


		
	}

	renderExperience({item}) {
		return (
			<CardSection>
				<Button>{item.name}</Button>
			</CardSection>
		)	
	}

	render() {
		return(
			<View>
				<FlatList
					data={this.props.experiences}
					renderItem={this.renderExperience.bind(this)}
				/>
				<RoundButton />
			</View>
			
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








