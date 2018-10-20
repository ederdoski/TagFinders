import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

function Example(props){
	return(
		<View style = {styles.container}> 
			<View style = {styles.left}> 
				<Image  
				style  = {styles.img}
				source = {props.img}
				/>
			</View>

			<View styles = {styles.right}> 
				<Text style = {styles.title}> {props.title} </Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:
	{
		flexDirection: 'row',
		paddingRight: 10,
		paddingBottom: 10,
		paddingTop: 10,
	},
	img:
	{
		height: 80,
		width: 120,
		resizeMode:'contain'
	},
	right:
	{
		paddingLeft: 20,
	},
	title:
	{
		flex: 1,
		textAlign: 'center',
  		textAlignVertical: 'center',
		fontSize: 25,
		color: '#44546b'
	}

})

export default Example;