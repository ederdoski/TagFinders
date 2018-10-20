import React, { Component } from 'react';
import { Font } from 'expo';
import {H2, Button, Text, Container, Content, Form, Item, Label, Input} from 'native-base'

import Header        from '../components/header.js'
import Style         from './styles.js'
import ListCards     from './list-cards.js'

class Home extends Component {
	
  state = {
	   uri: '',
      fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ fontLoaded: true });
  }

	sendUri = () => {
		const { uri } = this.state
		this.props.navigation.navigate('Detail', {uri: this.state.uri});
	}

   getTouchOfListExamples(uri){
      this.props.navigation.navigate('Detail', {uri: uri});
   }

	render(){
		return(

      this.state.fontLoaded ? (
         <Container>
            <Header title = 'TagFinder'/>

            <Content style = {Style.container}>

              <H2 style={{textAlign: 'center'}}>
                 Extrae datos estructurados de cualquier sitio web
              </H2>

             <Form>
                 <Item floatingLabel last>
                   <Label>Ingrese una URL</Label>
                   <Input/>
                 </Item> 

                 <Button block style={{marginTop: 20}} onPress={this.sendUri}><Text> Enviar </Text></Button>
              </Form>

              <ListCards callback={this.getTouchOfListExamples.bind(this)}/>

            </Content>
         </Container>
      ) : null
      
		)
	}
}

export default Home;