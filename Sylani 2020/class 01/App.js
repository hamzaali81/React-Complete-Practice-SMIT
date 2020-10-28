import React, { Component } from 'react';
import BaberIMG from './Images/baber.jpg';

const Header = (props)=>{
  console.log('props=====>',props);
  const {name,tyari,username} = props;
  return(
    <div>
      <h1>{name}</h1>
      <h2>{tyari}</h2>
  <h3>{username}</h3>
  {/* <button onClick={()=>{props.get_props("hello")}}>Check button</button> */}
  <button onClick={()=>{props.get_props("hello")}}>Check button</button>
    </div>
  )
}


export default class App extends Component {
  constructor(props){
    super(props);
     
    this.state = {
      name: 'hamza ahmed',
      email: 'hamza54834@gmail.com',
      value: ""
    }
    this.set_name = this.set_name.bind(this);
  }

  get_props=(data)=>{
       console.log(data,this.state);
       this.setState({
         name: 'kesa diya'
       })

  }
  // get_props=(data)=>{
  //      console.log(data);
  // }

  set_name(e){
    console.log('Running');
    // console.log(this.state.name);
    this.setState({
      name: this.state.value
    })
  }

  // set_name = ()=>{
  //    console.log(this.state.name);
  // }
  
  
  handleChange(e){
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  
  
  
  
  render() {
     const {name,email} = this.state;
    //  const {handleChange,set_name} = this;

    return (
      <div>

        <Header style={{backgroundColor:'red'}} get_props={this.get_props} name="kesa diya" username={this.state.name} tyari="kancha" />Foji bhai
        <h1>Hello</h1>
    <h2>{name}</h2>
    <h2>{email}</h2>

        <button onClick={this.set_name}>Set_Name</button><br/>
        <input type="text" onChange={(e)=>this.setState({value: e.target.value})}/>
        {/* <button onClick={set_name}>Set_Name</button> */}
        <input type="text" name="name" placeholder="Enter the value" 
        // onChange={(e)=>  this.setState({name: e.target.value})
        // onChange={(e)=>  this.setState({name: e.target.value})
        onChange={(e)=>this.handleChange(e)}
        // onChange={(e)=>{handleChange(e)}
          // console.log(e.target.value)
  
        
          />
        <input type="text" placeholder="Enter the name" name="email" onChange={(e)=>this.handleChange(e)} placeholder="Enter the Email"/>
        <br/>
        <img src={BaberIMG} alt="baber" width="50%" height="50%" style={{margin: "10px", padding: "10px"}}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod. Tempora officia distinctio aliquid accusamus quod non deserunt nobis? Dolor quis incidunt perferendis sequi! Necessitatibus dolore accusantium veniam non doloribus.</p>
        <Header/>
      </div>
    )
  }
}
