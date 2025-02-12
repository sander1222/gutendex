import { useState } from "react";
import BookList from "../App.jsx";
import "./shelf.css";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <BookList setBooks={setBooks} />
      <div className="bookshelf">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} className="book">
              {/* <h3>{book.title}</h3> */}
              {/* <p>By: {book.authors?.map((author) => author.name).join(", ")}</p> */}
              {book.formats["image/jpeg"] && (
                <img src={book.formats["image/jpeg"]} alt={book.title} />
              )}
            </div>
          ))
        ) : (
          <p>Loading books...</p>
        )}
      </div>
    </div>
  );
}

export default App;
