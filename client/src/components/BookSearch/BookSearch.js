import React from 'react';
import '../Bookcards/BookCard.css';

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} placeholder="Search by Title Author or Subject"/>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button className="btn btn-beige shadow-none" {...props} style={{ float: "right", marginBottom: 10 }}>
      {props.children}
    </button>
  );
}
