import React, { Component } from 'react';
import TopBar from './TopBar'
import ListBooksContent from './ListBooksContent'
import OpenSearchButton from './OpenSearchButton'

class HomePage extends Component {
   render() {

      const { books } = this.props

      return (
         <div className="list-books">
            <TopBar/>
            <ListBooksContent books={books} handleShelfChange={this.props.handleShelfChange}/>
            <OpenSearchButton livros={books}/>
         </div>
      )
   }
}
 
export default HomePage;