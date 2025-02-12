import { useEffect, useState } from "react";

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

export default function BookList({ setBooks }) {
  const [category, setCategory] = useState("Fiction");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    console.log(`Fetching books for category: ${category}, page: ${page}`);

    fetch(`https://gutendex.com/books/?topic=${category}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setBooks(data.results || []); // Update books in App.jsx
        setTotalPages(Math.ceil((data.count || 1) / 10));
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, [category, page, setBooks]);

  return (
    <div>
      {/* <select onChange={(e) => setCategory(e.target.value)} value={category}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button> */}
    </div>
  );
}
