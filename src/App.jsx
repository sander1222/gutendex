import { useEffect, useState } from "react";
  

const categories = [
  "Fiction",
  "Myestery",
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

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("Fiction");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    console.log(`Fetching books for category: ${category}, page: ${page}`);

    fetch(`https://gutendex.com/books/?topic=${category}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setBooks(data.results || []);
        setTotalPages(Math.ceil((data.count || 1) / 10));
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, [category, page]);
}
