import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Row, Container } from "../components/Grid/Grid";
import BookCard from "../components/Bookcards/Bookcard"
import { Input, FormBtn } from "../components/BookSearch/BookSearch"
import API from "../utils/API";

//function to reformat googleBook object to match our db schema
const formatResults = googleResults => {
  const books = [];

  googleResults.map(book => {

    const formattedBook = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors
        ? book.volumeInfo.authors
        : ['Author(s) Not Available.'],
      description: book.volumeInfo.description
        ? book.volumeInfo.description
        : 'No Description Available.',
      googleId: book.id,
      image: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : "https://dummyimage.com/128x206/c4bfb2/051421.jpg&text=No+Image+:/",
      link: book.volumeInfo.canonicalVolumeLink
    };

    books.push(formattedBook);
    return books
  });
  return books;
}

class Books extends Component {
  state = {
    books: [],
    search: ""
  };

  searchBooks = query => {
    API.search(query)
      .then(res => {
        const formattedBooks = formatResults(res.data.items);
        this.setState({ books: formattedBooks })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  saveBook = event => {
    const savedBook = this.state.books.find(book => book.googleId === event.target.id);

    API.saveBook(savedBook)
      .then(res => {
        console.log(res.status);
        alert("Book Saved!")
      })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <Container fluid text-center>
        <Row>
          <div className="col-md-10 offset-md-1">
            <Jumbotron><h1>Welcome to Google Books Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search Here"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </div>
          <div className="col-md-8 offset-md-2">
          </div>
          {this.state.books.length ? (

            <BookCard
              books={this.state.books}
              buttonAction={this.saveBook}
              buttonClass="btn btn-beige mt-1 mr-1 shadow-none"
              buttonText="Save Book"
            />) : (<div className="col-md-8 offset-md-2 text-center">
              <h3>No Results Yet</h3>
            </div>
            )}
        </Row>
      </Container>
    )
  }

}


export default Books;