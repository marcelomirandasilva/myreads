import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {
   render() {

      const { books } = this.props
      const { titleShelf } = this.props

      return ( 
         <div className="bookshelf">
            <h2 className="bookshelf-title">{titleShelf}</h2>
            <div className="bookshelf-books">
               <ol className="books-grid">
                 
                  {books.map(book => (
                     <li key={book.id}>
                        <Book info={book} handleShelfChange={this.props.handleShelfChange}/>
                     </li>
                  ))}

               </ol>
            </div>
         </div>
      )
   }
}
 
export default BookShelf;