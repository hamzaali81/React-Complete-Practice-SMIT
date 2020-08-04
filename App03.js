import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

//install as a separate module prop-types
//built in type checking to validate props
//array,bool,func,number,object,string,symbol

//npm i prop-types --save

const Person = ({ img, name, age }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
    </article>
  );
};

Person.propTypes = {
  img: PropTypes.string,
  name:PropTypes.string,
  age:PropTypes.number
}

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: "hamza",
        age: 21,
      },
      { id: 2, img: "https://randomuser.me/api/portraits/thumb/men/75.jpg", name: "ali", age: 22 },
      { id: 3, img: "https://randomuser.me/api/portraits/thumb/men/75.jpg", name: "ahmed", age: 23 },
    ]
  }

render() {
  return <section>
    {this.state.people.map((el) => (
      <Person 
      key={el.id} 
      img={el.img} 
      name={el.name} 
      age={el.age} />
    ))}
    
  </section>
}
}

class App extends Component {
  render() {
    return (
    <PersonList />
    );
  }
}

export default App;
