import React from 'react';
import './BookCard.css';

// maps books for both search and saved pages, type of button decided in ternary on book having mongo _id or google id
function BookCard(props) {

    return (
        <div className="col-md-8 offset-md-2">
            {props.books.map(book => (
                <div className="card mt-4" key={book._id ? book._id : book.googleId}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h4 className="card-title">{book.title}</h4>
                            <div>
                                <a className="btn btn-beige mr-1 mt-1 shadow-none" href={book.link} target="_blank"
                                    rel="noopener noreferrer">View Book</a>
                                <button className={props.buttonClass}
                                    onClick={props.buttonAction}
                                    id={book._id ? book._id : book.googleId}>
                                    {props.buttonText}
                                </button></div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between mt-1">
                                <img src={book.image}
                                    className="align-self-start mr-3" alt="book cover" />
                                <p className="mb-0 overflow-hidden">{book.description}</p>
                            </div>
                            <h5 className="mt-2">Authored By: {book.authors.join(" & ")}</h5>


                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookCard;