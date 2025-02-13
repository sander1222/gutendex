import { useState } from "react";
import BookList from "../App.jsx";
import "./shelf.css";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <BookList setBooks={setBooks} />
      <div className="bookshelf-container">
        {/* Show loading message if books array is empty */}
        {books.length === 0 && (
          <p className="loading-message">Loading books...</p>
        )}
        <div className="bookshelf">
          {books.length > 0
            ? books.map((book, index) => (
                <div key={index} className="book">
                  {book.formats["image/jpeg"] && (
                    <img src={book.formats["image/jpeg"]} alt={book.title} />
                  )}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default App;
