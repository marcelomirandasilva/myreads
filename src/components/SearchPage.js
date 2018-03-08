import React, { Component } from 'react'
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    livrosDaPesquisa: []
  }

  componentWillMount() {
    this.setState({
      value: this.props.livros.shelf
    });
  }

  onChangeQuery = (event) => {
    // Valor pesquisado
    const valor = event.target.value
    if(valor){
      BooksAPI.search(valor).then((resultados) => {
        //verifica se retornou algo 
        if (Array.isArray(resultados))
        {
          const novoResultado = resultados.map(vBook => {
            vBook.shelf = this.props.retornaShelf(vBook.id)
            return vBook
          })

          this.setState({
            livrosDaPesquisa: novoResultado
          })
        } else {
          this.setState({
            livrosDaPesquisa: ""
          })
        }
      })
    } else {
      this.setState({
        livrosDaPesquisa: ""
      })
    }
  }

  render(){
    return(
        <div className="search-books">
          <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.onChangeQuery}/>
              </div>
          </div>
          <div className="search-books-results">
              <ol className="books-grid"> 
                {Array.isArray(this.state.livrosDaPesquisa) && this.state.livrosDaPesquisa.map(livro => (
                  
                  <li key={livro.id}>
                    <Book info={livro} handleShelfChange={this.props.handleShelfChange} />
                  </li>

                ))}
              </ol>
          </div>
        </div>
    )
  }
}

export default SearchPage