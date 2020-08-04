import React, { Component } from "react";
import "./App.css";

//4.Controlled uncontrolled inputs
//JS
//const input = document.getElementById('mytext)
//const inputValue= input.value
//React
//value, onChange

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    people: [],
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    
    
    // if(e.target.name ==='name'){
    //   const textValue = e.target.value;
      
      this.setState({
        // firstname: textValue,
         [e.target.name]: [e.target.value]
      });
    // }
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    const firstname= this.state.firstname;
    const lastname= this.state.lastname;
    console.log(firstname,lastname);

    if(firstname.length>0 && lastname.length>0){
      const person = ` ${firstname} ${lastname}`
      this.setState({
        people:[...this.state.people,person],
        firstname : "",
        lastname: ""
      })
    }
  }

  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              type="text"
              name="firstname"
              placeholder="first name"
              value={this.state.firstname}
            />
             <input
              onChange={this.handleChange}
              type="text"
              name="lastname"
              placeholder="last name"
              value={this.state.lastname}
            />
            <p>{this.state.firstname}</p>
            <button type="submit">Submit</button>
            <h4>people</h4>
    <p>{this.handleSubmit}</p>
          </form>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
