import React, { Component } from 'react';
import { Image } from 'react-native' 
import {Text, Container, Content} from 'native-base';

import API    from '../../utils/api.js';
import Cimage from '../components/image.js';
import Header from '../components/header.js'
import Style  from './styles.js'

class Detail extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
			apiResponse: [],
			loading: false
		}
	}

	async componentDidMount() {
    	const data = await API.getData(this.props.navigation.getParam('uri')); 
    	console.log(data);
    	this.setState({
    		apiResponse: data,
    		loading: true,
    	})

    }

	render(){

		let image;
		let author;
		let date;
		let description;

		if (this.state.loading) 
        {
        	if(this.state.apiResponse.image != null){
        		image  = <Cimage uri = {this.state.apiResponse.image.url}> </Cimage>
 			}else{
        		image  = <Image style = {{
        			 flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
   }} source = {require('../../../assets/error.png')} />
 			}

 			if(this.state.apiResponse.description != null)
	        {
	        	description = <Text style = {Style.description}>{this.state.apiResponse.description} </Text>
	        }

	        if(this.state.apiResponse.author != null)
	        {
	        	author = <Text style = {Style.publisher}>{this.state.apiResponse.author} </Text>
	        }

	        if(this.state.apiResponse.date != null)
	        {
	        	date = <Text style = {Style.publisher}>{this.state.apiResponse.date} </Text>
	        }
   		}	

		return(
			<Container> 
            <Header title = 'TagFinder'/>

            <Content style = {Style.container}>
               
               <Text style = {Style.title}>{this.state.apiResponse.title} </Text>
               {image}
               {date}
               {description}
               <Text style = {Style.uri}> URL = {this.props.navigation.getParam('uri')} </Text>
               {author}
               <Text style = {Style.publisher}>{this.state.apiResponse.publisher} </Text>
            </Content>
            
			</Container>
		)
	}
}

export default Detail;

