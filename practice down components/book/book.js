import React, { Component } from 'react';

class Book extends Component {


    render() {
        const {id,book,author}=this.props.info;
        const { handleDelete }= this.props;
        // console.log(id);
        return (
            <div>
                <h4>book: {book}</h4>
                <h5>author: {author}</h5>
                <button onClick={()=>handleDelete(id)}>Click Me</button>

            </div>
        );
    }
}

export default Book;