import { Link } from "react-router-dom";

export default function BookList({ books, setBooks }) {
  return (
    <div>
      <div className="bookshelf">
        {books.length > 0
          ? books.map((book, index) => (
              <div key={index} className="book">
                <Link to={`/book/${book.id}`}>
                  {book.formats["image/jpeg"] && (
                    <img src={book.formats["image/jpeg"]} alt={book.title} />
                  )}
                  <h3>{book.title}</h3> {/* Optional book title */}
                </Link>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
