import React, { Component } from 'react';
import {TouchableWithoutFeedback} from 'react-native'
import {Text, Card, CardItem, Icon} from 'native-base'
import { Col, Grid } from 'react-native-easy-grid';

import Style         from './styles.js'

class ListCards extends Component {

   onPressExample(uri) {
      this.props.callback(uri);
   }

	render(){
		return(

      		<Card style = {{marginTop: 20}}>
               <CardItem>
                  <TouchableWithoutFeedback onPress={() => this.onPressExample("https://www.facebook.com/Ederdoski")} >
                     <Grid>
                        <Col size={1}>
                           <Icon name="logo-facebook" style={{color: '#4267b2'}} />
                        </Col>
                        
                        <Col size={3}>
                           <Text style={{alignSelf:'flex-start'}}>Facebook</Text>
                        </Col>
                       
                       <Col size={1}>
                           <Icon style={{alignSelf:'flex-end'}} name="arrow-round-forward" />
                       </Col>
                     </Grid>
                  </TouchableWithoutFeedback>
               </CardItem>

               <CardItem>
                  <TouchableWithoutFeedback onPress={() => this.onPressExample("https://www.linkedin.com/in/edermar-dominguez-70986011b/")} >
                     <Grid>
                        <Col size={1}>
                           <Icon name="logo-linkedin" style={{color: '#0173b2'}} />
                        </Col>
                        
                        <Col size={3}>
                           <Text style={{alignSelf:'flex-start'}}>LinkedIn</Text>
                        </Col>
                       
                       <Col size={1}>
                           <Icon style={{alignSelf:'flex-end'}} name="arrow-round-forward" />
                       </Col>
                    </Grid>
                  </TouchableWithoutFeedback>
               </CardItem>

               <CardItem>
                  <TouchableWithoutFeedback onPress={() => this.onPressExample("https://twitter.com/EderDoski")} >
                     <Grid>
                        <Col size={1}>
                           <Icon name="logo-twitter" style={{color: '#21a3f3'}} />
                        </Col>
                        
                        <Col size={3}>
                           <Text style={{alignSelf:'flex-start'}}>Twitter</Text>
                        </Col>
                       
                       <Col size={1}>
                           <Icon style={{alignSelf:'flex-end'}} name="arrow-round-forward" />
                       </Col>
                    </Grid>
                  </TouchableWithoutFeedback>
               </CardItem>

                <CardItem>
                  <TouchableWithoutFeedback onPress={() => this.onPressExample("https://www.youtube.com/channel/UCrvwuRyxVarbVmLDB4GKgZQ?view_as=subscriber")} >
                     <Grid>
                        <Col size={1}>
                           <Icon name="logo-youtube" style={{color: '#ff0101'}} />
                        </Col>
                        
                        <Col size={3}>
                           <Text style={{alignSelf:'flex-start'}}>Youtube</Text>
                        </Col>
                       
                       <Col size={1}>
                           <Icon style={{alignSelf:'flex-end'}} name="arrow-round-forward" />
                       </Col>
                    </Grid>
                  </TouchableWithoutFeedback>
               </CardItem>

               <CardItem>
                  <TouchableWithoutFeedback onPress={() => this.onPressExample("https://plus.google.com/104289972519897456455")} >
                     <Grid>
                        <Col size={1}>
                           <Icon name="logo-googleplus" style={{color: '#dd5144'}} />
                        </Col>
                        
                        <Col size={3}>
                           <Text style={{alignSelf:'flex-start'}}>Google Plus</Text>
                        </Col>
                       
                       <Col size={1}>
                           <Icon style={{alignSelf:'flex-end'}} name="arrow-round-forward" />
                       </Col>
                    </Grid>
                  </TouchableWithoutFeedback>
               </CardItem>
            </Card>
      
		)
	}
}

export default ListCards;