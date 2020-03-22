import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Row, Container } from "../components/Grid/Grid";
import API from "../utils/API";
import Bookcard from "../components/Bookcards/Bookcard"
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();

  }

  loadBooks = () => {
    console.log("loading books")
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <div className="col-md-10 offset-md-1">
            <Jumbotron className="banner">
              <h1>Your Bookshelf Awaits!</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <Bookcard
                books={this.state.books}
                buttonAction={this.deleteBook}
                buttonClass="btn mt-1 mr-1 btn-beige shadow-none"
                buttonText="Delete Book"
              />
            ) : (<div className="col-md-8 offset-md-2 text-center">
              <h3>No Results to Display</h3>
            </div>
              )}
                        <div className="col-md-2">
            <Link to="/">← Back to Search</Link>
          </div>
          </div>
        </Row>
        <Row>

        </Row>
      </Container>
    )
  }

}

export default Books;