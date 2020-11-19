import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style/style.css';
import MemesItems from './MemesItems';
import { Form,FormGroup,FormControl,FormLabel } from 'react-bootstrap';
import MyMeme from './myMeme';

class App extends Component {
  constructor(){
    super();

    this.state = {
        memeLimit: 10,
        text0: '',
        text1: ''
    }
  }

  
  render() {
    return (
      <div>
        <h2><u>Welcome to meme Generator!</u></h2>
        <MyMeme />
        <h4><i>Write Some Text</i></h4>
         <Form inline>
           <FormGroup>
             <FormLabel>Top</FormLabel>
             {' '}
             <FormControl type="text" onChange={(e)=> this.setState({text0: e.target.value})}></FormControl>
           </FormGroup>
           {' '}

           <FormGroup>
             <FormLabel>Bottom</FormLabel>
             <FormControl type="text" onChange={(e)=> this.setState({text1: e.target.value})}></FormControl>
             {' '}
           </FormGroup>
           </Form>

        {
          this.props.memes.slice(0,this.state.memeLimit).map((meme, index)=>{
            return (
            <MemesItems 
            key={index} 
            meme={meme} 
            text0={this.state.text0}
            text1={this.state.text1}
            />
            // <MemesItems key={index}>{meme.name}</MemesItems>
            )
          })
        }

        <div className="meme-button" onClick={()=>{this.setState({memeLimit: this.state.memeLimit+10})}}>Load more 10 memes....</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state

}

export default connect(mapStateToProps,null)(App);
