import React, { Component } from 'react';

class Book extends Component {
   
   state = {
      value: ""
   }

   componentWillMount() {
      this.setState({ 
         value: this.props.info.shelf 
      });
   }

   handleChange = (event) => {
      const { info } = this.props
      this.props.handleShelfChange(info, event.target.value);
   }

   
   render() { 
      
      const { info } = this.props
      let tumb=""

      if (info.imageLinks)
         tumb = info.imageLinks.thumbnail
      else
         tumb =""


      return (  
         <div className="book">
            <div className="book-top">
               <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${tumb}")` }}></div>
               <div className="book-shelf-changer">
                  <select value={this.state.value} onChange={this.handleChange}>
                     <option value="none" disabled>Move to...</option>
                     <option value="currentlyReading">Currently Reading</option>
                     <option value="wantToRead" >Want to Read</option>
                     <option value="read">Read</option>
                     <option value="none">None</option>
                  </select>
               </div>
            </div>
            <div className="book-title">{info.title}</div>
            <div className="book-authors">{info.authors}</div>
         </div>
      )
   }
}
 
export default Book;