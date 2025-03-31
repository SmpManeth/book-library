import React ,{ useContext} from "react";
import { BooksContext } from "../BooksContext";

export default function Books() {
    const books = useContext(BooksContext);


    return (
        <div>
        <h2>Books</h2>
        <ul>
            {books.map((book) => (
            <li key={book.id}>{book.title} by { book.author}</li>
            ))}
        </ul>
        </div>
    );
    }
