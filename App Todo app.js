import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      todos:[],
      text: '',
      currentIndex: null
    
    }

    this.updateText=this.updateText.bind(this)
    this.add=this.add.bind(this)
    this.cancel=this.cancel.bind(this)
  }

updateText(e){
  this.setState({
    text: e.target.value
  })

}


add(e){
   const {text,todos}=this.state;
   todos.push(text)
   console.log(todos);

   this.setState({
     todos,
     text: ''
   })

}

edit(index){
const {todos}= this.state;
console.log(todos);
this.setState({text: todos[index],
  currentIndex: index

})
// console.log(text);
}

cancel(){
  this.setState({
    currentIndex: null,
    text:''
  })
}

delete(index){
  const {todos}= this.state;
  todos.splice(index,1)
  this.setState({
    todos,
    currentIndex: null
  })
}

renderTodos(){
  const {todos}=this.state;
  return <ol>
      {todos.map((item,index)=>{ 
        return <li key={index}>
        {item}
      <button onClick={this.edit.bind(this, index)}>Edit</button>
      <button onClick={this.delete.bind(this,index)}>Delete</button>
      </li>
      })
      }
    </ol>
}


  render() {
    const {currentIndex}=this.state;
    return (
      <div>
        <input type="text" onChange={this.updateText} value={this.state.text}/>
     
     
      {currentIndex == null ? 
      <button onClick={this.add}>Add</button>
      :
      <div>
     <button onClick={()=>{}}>Update</button>
    <button onClick={this.cancel}>Cancel</button>
    </div>}

    <br/>
    {currentIndex != null && <h1>You are editing this index #{currentIndex + 1}</h1>} 

      {this.renderTodos()}
      </div>
    )
  }
}
