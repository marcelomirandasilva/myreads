import React, { Component } from 'react'
import BookShelf from './BookShelf'


class ListBooksContent extends Component {
     

   render() {

      const { books } = this.props
      let currentlyReading = []
      let wantToRead = []
      let read = []
      
      if(books.length){
         currentlyReading = books.filter(book => book.shelf === "currentlyReading")
         wantToRead = books.filter(book => book.shelf === "wantToRead")
         read = books.filter(book => book.shelf === 'read')
      }
      
      return ( 
         <div className="list-books-content">
            <div>
               <BookShelf handleShelfChange={this.props.handleShelfChange} titleShelf={"Currently Reading"} books={currentlyReading}/>
               <BookShelf handleShelfChange={this.props.handleShelfChange} titleShelf={"Want to Read"} books={wantToRead}/>
               <BookShelf handleShelfChange={this.props.handleShelfChange} titleShelf={"Read"} books={read}/>
            </div>
         </div>
      )
   }
}
 
export default ListBooksContent