import React, { Component, useState } from 'react';
import Container from './component/Container/Container'
import Login from './screen/Login/Login';
import AddForm from './screen/AddForm/AddForm';
import Dashboard from './screen/Dashboard/Dashboard';
import './App.css'

const BASE_URL='https://hn.algolia.com/api/v1';
const PATH_SEARCH='/search';
const PATH_PARAM='query=';
const DEFAULT_QUERY = 'redux';

// const [ mode,setMode ] =useState('online')

class App extends Component {
  constructor(){
    super();
 
    
    this.state={
      user: false,
      text:'hello world',
      result: {},
      searchTerm: 'angular',
      mode: 'online'
    }
    // this.onLogin=this.onLogin.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
      this.search = this.search.bind(this);
      
    }
    
    // componentDidMount(){
      //   fetch(`${BASE_URL}${PATH_SEARCH}?${PATH_PARAM}${DEFAULT_QUERY}`)
    // .then(response => response.json())
    // .then(result => console.log('result*****',result))
    // .catch(error => error);
    // }
    
    setSearchTopStories(result) {
      this.setState({ result });

    }
    componentDidMount() {
      const { searchTerm } = this.state;
      
      // const { searchTerm } = this.state;
      // fetch(`${BASE_URL}${PATH_SEARCH}?${PATH_PARAM}${searchTerm}`)
      // .then(response => response.json())
      // .then(result => this.setSearchTopStories(result))
      // .catch(error => error);
      this.search(searchTerm);
    }
    
    search(searchTerm){
      console.log(searchTerm,'searchTerm');
        // const { searchTerm } = this.state;

        fetch(`${BASE_URL}${PATH_SEARCH}?${PATH_PARAM}${searchTerm}`)
        .then(response => response.json())
        .then(result => {
          this.setSearchTopStories(result);
          return localStorage.setItem("user",JSON.stringify(result))
          //     
          
          
          
        })
        .catch(error =>{
          let collection= localStorage.getItem("user");
          // const {mode} = this.state;
          this.setSearchTopStories(JSON.parse(collection));
          //       return <div class="alert alert-info" role="alert">
          //       offline Mode connection issues
          // </div>   
          
            this.setState({
              mode: 'offline'
            })
          
        }
        
          // alert("Code block",error)
        );
          // error);
      }

    // onLogin(userObj){
    //   // console.log(userObj);
    //   this.setState({user: true})
    //     }
         
  render() {
    const {mode} = this.state;

    // const {user,text}=this.state;
    const {result}=this.state;
    console.log(result);
    return (
      <div>

{
        mode === 'offline' ? 
        <div class="alert alert-warning" role="alert">
Internet connection Problem 
</div> : null
      }
{/* <Container>
     {!user && <Login 
     text="hello world" onLogin={this.onLogin}/>}
     <input onChange={(e)=>{this.setState({text: e.target.value})}}/>
      {text !== 'Sylani' && <Dashboard text={text}/>}
       <AddForm />
</Container> */}
<h1>Search List</h1>
     <input className="form" type="text" onChange={(e)=>{this.search(e.target.value)}} placeholder="Search List"/>   
      <h1>Result</h1>
      {/* <ul>
        {result.hits && result.hits.map((item)=>{
        return <li>{item.title}</li>
        })}
      </ul> */}
      <ul>
        {result.hits && result.hits.length ? result.hits.map((item)=>{
        return <li>{item.title}</li>
        })  :<h1>OOPs Not found!!</h1>}
       
      
    
      </ul>

      
      
      </div>
    );
  }
}

export default App;
