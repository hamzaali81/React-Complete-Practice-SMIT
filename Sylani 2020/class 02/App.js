import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: ['hamza','ali',''],
      value: ''
    }
    
  }
  
  mainList=(e)=>{
    console.log(e.target.value);
    // const {value} = this.state;
    this.setState({
      value : e.target.value
    })
  }
  
  addBtn =(e)=>{
    console.log('kha hai bahi',e);
    this.setState({
    todos: [...this.state.todos,this.state.value],
    value: ''

    })

  }

  deleteBtn= (i)=>{
    //  this.state.todos
    console.log('delete hoja bhai',i);
    console.log(this.state.todos);
    // this.state.todos.splice(0,1);
    this.state.todos.splice(i,1);
    this.setState({
       todos: this.state.todos
    })
  }

  editBtn(i){
    console.log('edit bhai',i);
    console.log(this.state.todos[i].slice(0,i.length));
    this.state.todos[i].slice(0,i.length);
    this.setState({
      value: this.state.todos[i].slice(0,i.length)
    })
  }

  
  render() {
   const {todos,value} = this.state;
    return (
      <div>
        <h1>Todos List</h1>
        <input value={value} type="text" onChange={this.mainList} placeholder="Enter the List"/>
        <button onClick={this.addBtn}>Add</button>
        <ul>
          {todos.map((v,i)=>{
            return <li key={i}>
              {v}
            <button onClick={()=>{this.editBtn(i)}}>Edit</button> 
             <button onClick={()=>this.deleteBtn(i)}>Delete</button>

            </li>
          })}
        </ul>

      </div>
    );
  }
}

export default App;
