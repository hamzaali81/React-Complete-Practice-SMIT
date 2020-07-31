import React, { Component } from 'react';
import Book from '../book/book';
import books from '../bookData/bookData';

class Booklist extends Component {
   constructor(props){
       super(props);
       this.state={
        books: books

       }
    //    this.handleDelete=this.handleDelete.bind(this)
   }
   
handleDelete= id =>{
    // console.log('I m Mr log',id);
    console.log(this.state.books);
    const sortedBooks = this.state.books;
   const deleteList= sortedBooks.filter( item => 
        item.id !== id
        )
    console.log(sortedBooks);

    this.setState({
        books: deleteList
    })
}   
   
    render() {

//         const books = this.state.books.map(el=> el.book);
// console.log(books);
        return (
            <div>
                <h3>Our Goal</h3>
          {this.state.books.map((item)=><Book key={item.id} info={item} handleDelete={this.handleDelete}></Book>)}
          {/* <button onClick={this.handleDelete}>Delete</button> */}
          {/* <button handleDelete={this.handleDelete}>Click Me</button> */}
            </div>
        );
    }
}

export default Booklist;