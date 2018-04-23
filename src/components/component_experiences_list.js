

import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux'

import { fetchExperiences } from '../actions'

import { Button, CardSection, Spinner, RoundButton, Card } from './common' 

import { Actions } from 'react-native-router-flux'

class ExperiencesList extends Component {

	componentWillMount() {
		this.props.fetchExperiences()	
	}

	onButtonPress (selectedActivity) {
		
		Actions.usersList({selectedActivity})

	}

	renderExperience({item}) {

		return (
			<View>
				<RoundButton 
					customStyle={styles.roundButtonCustomStyle}
					onPress={this.onButtonPress.bind(this, item.name)}
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








