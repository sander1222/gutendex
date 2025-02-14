import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import BookList from "./components/bok.jsx"; // Import your BookList component
import Bok from "./Bok.jsx"; // Import your Bok component for the individual book page

const categories = [
  "Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Fantasy",
  "Morality",
  "Society",
  "Power",
  "Justice",
  "Adventure",
  "Tragedy",
  "War",
  "Philosophy",
];

export default function App() {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("Fiction");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://gutendex.com/books/?topic=${category}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.results || []);
        setTotalPages(Math.ceil((data.count || 1) / 10));
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, [category, page]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<BookList books={books} setBooks={setBooks} />}
        />
        <Route path="/book/:id" element={<Bok />} />
      </Routes>
    </Router>
  );
}
