import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      list: ['Beef Pulao', 'Chapli Kabab', 'Kaleji', 'Gola Kabab', 'Pae', 'Reshmi Kabab', 'Behari Boti', 'Dhaga Kabab', 'Hunter Beef', 'Sajji'],
      result:[]
    }
    this.search=this.search.bind(this)
  }
  

search(e){
  const {list}=this.state;
  console.log(e.target.value);
  const text = e.target.value;


    const result=list.filter(item=>{
      const lowerItem= item.toLowerCase();
      const lowerText=text.toLowerCase();
    return lowerItem.substring(0, lowerText.length).indexOf(lowerText) !== -1
  })
  this.setState({
    result,text
  })
  
}


renderHeader(){
  return(
    <input type="text" placeholder="Khao Peo Jan Banao List" onChange={this.search}/>
  )
}

  renderBody(){
        const {list,result,text}=this.state;
        const items= text ? result : list 

     return(
       <div>
            {text && <h1>Khao peo jan banao list ==== "{text}"</h1>}
            <ol>
              {items.map((el,index)=>{
               return <li key={index}>{el}</li>
              })}
            </ol>
       </div>
     )
  }
  
  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }
}

export default Search;
