import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Bok() {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://gutendex.com/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      })
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);

  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.formats["image/jpeg"]} alt={book.title} />
      <p>{book.authors?.map((author) => author.name).join(", ")}</p>
      <p>{book.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}
