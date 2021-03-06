
import React, { Component } from 'react'
import { View, Text, FlatList, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { fetchExperiences } from '../actions'
import { Button, CardSection, Spinner, RoundButton, Card } from './common' 
import { Actions } from 'react-native-router-flux'

import * as Animatable from 'react-native-animatable';

class ExperiencesList extends Component {

	componentWillMount() {
		this.props.fetchExperiences()	
	}

	onButtonPress (selectedExperience) { 

		Actions.usersList({selectedExperience}) 

	}

	renderExperience({item}) {

		return (
			<Animatable.View animation="zoomIn">
				<RoundButton 
					customStyle={styles.roundButtonCustomStyle}
					onPress={this.onButtonPress.bind(this, item.name)}
				/>
				<Text style={{alignSelf: 'center', paddingRight: 17, color: 'white'}}>{item.name}</Text>
			</Animatable.View>
		)	
	}

	render() {
		return(
			<ImageBackground style={{ flex: 1 }} source={require('../img/ibiza_sunset.jpg')}>
				<View style={styles.pannelStyle}>
					<FlatList
						centerContent={true}
						numColumns={3}
						data={this.props.experiences}
						renderItem={this.renderExperience.bind(this)}
					/>
				</View>	
			</ImageBackground>

		)
	}
}

const styles = {

	roundButtonCustomStyle: {
		marginRight: 15, 
		marginBottom: 10, 
		marginTop: 10
	},

	pannelStyle: {
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








