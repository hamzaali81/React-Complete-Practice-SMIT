import React, { Component } from 'react';
import { connect } from 'react-redux';


class MyMeme extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log('ya this.props hai',this.props);
        return (
            <div>
                {
                    this.props.myMemes.map((meme,index) => {
                        console.log('meme',meme);
                        return (
                            <img 
                            key={index}
                            src={meme.data.url} 
                            alt="my-meme"
                            className="my-meme-img"
                            />
                        )
                    })
                }
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log('state mymeme',state);
   return {
       myMemes: state.myMemes
   }
}

export default connect(mapStateToProps,null)(MyMeme);
