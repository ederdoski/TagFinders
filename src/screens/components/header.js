import React from 'react';
import {Header, Body, Title} from 'native-base'

import Style from './styles.js'
import Color from './colors.js'

function setHeader(props){
	return(
		<Header noLeft 
             style = {Style.header}
             iosStatusbar = "light-content"
             androidStatusBarColor = {Color.statusBarColor}>
            
             <Body>
               <Title>{props.title}</Title>
             </Body>
        </Header>
	)
}

export default setHeader;