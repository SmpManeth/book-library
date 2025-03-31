import React, { useContext, useEffect } from "react";
import { BooksContext } from "../BooksContext";
import { useParams } from "react-router-dom";

export default function Book() {
  const { bookId } = useParams();
  const books = useContext(BooksContext);

  const book = books.find((b) => b.id === parseInt(bookId));

  if (books.length === 0) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }


  return (
    <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.description}</p>
    </div>
  );
}
