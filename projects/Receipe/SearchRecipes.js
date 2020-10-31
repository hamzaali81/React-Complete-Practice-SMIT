import React, { Component } from 'react';
import { Form,FormGroup,FormControl,FormLabel,Button } from 'react-bootstrap';

export default class SearchRecipes extends Component {
   constructor(){
       super();
       this.state ={
           ingredients: '',
           dish: ''
       }
   }

  search(){
      let { ingredients,dish } = this.state;
    
    //www.recipepuppy.com/api/?i=garlic,chicken&q=adobo
      const url = `http://www.recipepuppy.com/?i=${ingredients}&=${dish}`;
      console.log('this.state',this.state);
      console.log('url',url);
    fetch(url ,{ 
        method: 'GET'
    })
    .then((response)=> response.json())
    .then((json)=> console.log('receipe json',json))
    }







    render() {
        return (
            <div>
                  <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>
          {' '}
          <FormControl 
            type="text" 
            placeholder="garlic, chicken" 
            onChange={event => this.setState({ ingredients: event.target.value })}
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <FormLabel>Dish</FormLabel>
          {' '}
          <FormControl 
            type="text" 
            placeholder="adobo"
            onChange={event => this.setState({ dish: event.target.value })}
          />
        </FormGroup>
        {' '}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
            </div>
        )
    }
}
