import React, { Component } from 'react';
import { Form,FormControl,Button } from 'react-bootstrap';
import './App.css';
import AgeState from './AgeState/ageState'

class App extends Component {
  constructor(){
    super();
    this.state={
      newDate: '',
      birthday: '1999-02-27',
      showStats: false
    }

    this.FormValue=this.FormValue.bind(this)
    this.submitBirthDay=this.submitBirthDay.bind(this)
  }

  FormValue(e){
    console.log(e.target.value,this.state);
    this.setState({
      newDate: e.target.value
    })
  }
 
  submitBirthDay(){
    const { newDate } = this.state;
    console.log(this.state);
    this.setState({
      birthday: newDate,
      showStats: true
    })
  }


  render() {
    return (
      <div className="App">
          <h2>Input Your Birthday!</h2>
        <Form inline>
          
          <FormControl type="date"
          onChange={this.FormValue}
          >

          </FormControl>
            {' '}
                <Button onClick={this.submitBirthDay}>
Submit
                </Button>
                
                  {
                    this.state.showStats ?
                    <div className="fade age-stats"> 
                    <AgeState date={this.state.birthday} /> 

                    </div>
                    :
                    <div></div>
                  }
        </Form>
      </div>
    );
  }
}

export default App;
