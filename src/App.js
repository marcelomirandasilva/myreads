import React from 'react'
import SearchPage from './components/SearchPage'
import HomePage from './components/HomePage'
import { BrowserRouter,Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  retornaShelf = (id) => {
    const retorno = this.state.books.filter( abacaxi => abacaxi.id === id)
    if (retorno.length)
      return retorno[0].shelf
    else  
      return "none"
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {

    BooksAPI.update(book, shelf)
      .then(data => {

        // Testar se o livro já existe no state
        const indiceDoLivro = this.state.books.findIndex(livroNoState => livroNoState.id === book.id)

        if(indiceDoLivro > -1){
          // Criar uma nova lista de livros, mudando apenas o livro com o id fornecido, para a shelf fornecida
          const newBooks = this.state.books.map(livro => {

            if (livro.id === book.id)
              livro.shelf = shelf

            return livro
          })

          this.setState({
            books: newBooks
          })
        } else {
          // O livro fornecido não existia no state, incluindo
          book.shelf = shelf
          const novosLivros = this.state.books.concat([book])

          this.setState({
            books: novosLivros
          })
        }
      })
  
  }
 
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={(props) => (
            <HomePage books={this.state.books} handleShelfChange={(book, shelf) => this.changeShelf(book, shelf)}/>
          )} />

          <Route path="/search" render={(props) => (
            <SearchPage livros={this.state.books} 
              handleShelfChange={(book, shelf) => this.changeShelf(book, shelf)}
              retornaShelf={this.retornaShelf}
            />
          )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
