

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
				<RoundButton 
					customStyle={styles.roundButtonCustomStyle}
				>
					{item.name}
				</RoundButton>
			</View>
		)	
	}

	render() {
		return(
			<View style={styles.pannelStyle}>
				<FlatList
					centerContent={true}

					numColumns={3}
					data={this.props.experiences}
					renderItem={this.renderExperience.bind(this)}
				/>
			</View>
		)
	}
}

const styles = {

	roundButtonCustomStyle: {
		marginRight: 15, 
		marginBottom: 15
	},

	pannelStyle: {
		backgroundColor: 'white', 
		alignItems: 'center', 
		justifyContent: 'center', 
		flex: 1, 
	}
}

const mapStateToProps = ({ experiences }) => {

	console.log(experiences)

	return { experiences }
}

export default connect(mapStateToProps, { fetchExperiences })(ExperiencesList)
/*

*/








