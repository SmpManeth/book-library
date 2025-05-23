import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";
import Book from "./components/Book";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "./components/notFound";
import SecretBooks from "./components/SecretBooks";
import {PrivateRoute} from "./components/PrivateRoute";


function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books />}></Route>
          <Route path="/books" element={<Navigate to="/" />}></Route>
          <Route path="/books/:bookId" element={<Book />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/secret" element={ <PrivateRoute Component={<SecretBooks></SecretBooks>}></PrivateRoute>}></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
