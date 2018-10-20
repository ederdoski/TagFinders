import React, { Component } from 'react';
import { Image, StyleSheet} from 'react-native';

function Cimage(props){
	return(
		<Image style={styles.img} source = {{uri: props.uri}} />
	)
}

const styles = StyleSheet.create({
	img:{
		marginTop: 10,
		resizeMode: 'contain',
		height: 150
	}
  })

export default Cimage;