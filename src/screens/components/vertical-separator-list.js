import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function VerticalSeparatorList(props){
	return(
		<View style =
			{[
				styles.separator, 
				{
				 borderTopColor: (props.color) ? props.color : '#1d1d1d'
				}
			]}>
		</View>
	)
}

const styles = StyleSheet.create({
	separator:{
		borderTopWidth: 1,
	}
})

export default VerticalSeparatorList;