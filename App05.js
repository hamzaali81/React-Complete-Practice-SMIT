import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

//install as a separate module prop-types
//built in type checking to validate props
//array,bool,func,number,object,string,symbol

//npm i prop-types --save

//2.
//props not passed at all????
//isRequired defaultProps

//3.object with particular shape

const Person = ({ person:{img, name, age,info} }) => {
//  const {img,name,age}=props.person;
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
      <h4>info: {info}</h4>
      {/* <h4>info: {info || 'some default'}</h4> */}
    </article>
  );
};

// Person.propTypes = {
//   img: PropTypes.string.isRequired,
//   name:PropTypes.string.isRequired,
//   age:PropTypes.number.isRequired
// }

// Person.defaultProps = {
//   img: "https://randomuser.me/api/portraits/thumb/men/74.jpg",
//   name: "koko",
//   age: 34
// }

Person.propTypes={
   person: PropTypes.shape({
     img: PropTypes.string.isRequired,
     name:PropTypes.string.isRequired,
     age:PropTypes.string.isRequired,
     info:PropTypes.string.isRequired 
   })
}
Person.defaultProps= {
  person: {
    info: "My Default info work"

  }
}

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        // img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        // name: "hamza",
        age: 21,
        
      },
      { id: 2, img: "https://randomuser.me/api/portraits/thumb/men/75.jpg", name: "ali", age: 22, },
      { id: 3, img: "https://randomuser.me/api/portraits/thumb/men/75.jpg", name: "ahmed", age: 23,info:"about ahmed" },
    ]
  }

render() {
  return <section>
    {/* {this.state.people.map((el) => (
      <Person 
      key={el.id} 
      img={el.img} 
      name={el.name} 
      age={el.age} />
    ))} */}
    
    {this.state.people.map((el) => (
      <Person person={el}/>
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
