import React, { Component } from 'react';
import { createMeme } from './actions/index';
import { connect } from 'react-redux';


class MemesItems extends Component {
    constructor(){
        super();

        this.state = {
            hovered: false
        }
    }

    postMeme() {
        // console.log('this.props',this.props);
        const {text0, text1} =  this.props;
        const memeObj= {
            template_id: this.props.meme.id,
            text0,
            text1
        }
        // this.props.newMeme(memeObj);
        this.props.createMeme(memeObj);
    }
    render() {
        return (
            <div className="meme-item"
            onMouseEnter={()=> this.setState({hovered: true})}
            onMouseLeave={()=>this.setState({hovered: false})}
            onClick={()=> this.postMeme()}
            
            >
                <img src={this.props.meme.url} 
                alt={this.props.meme.name}
                // className="meme-img"
                className={this.state.hovered ?"meme-img darken-img ": "meme-img"}
                />
                {/* <p className="meme-txt"> */}
                <p className={this.state.hovered ?  "meme-txt" : "no-txt"}>
                    {this.props.meme.name}
                </p>
            </div>
        );
    }
}

// function mapStateToProps(){
//     return{

//     }
// }

export default connect (null, { createMeme })(MemesItems);
