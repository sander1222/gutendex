// import { useEffect, useState } from "react";

// const categories = [
//   "Fiction",
//   "Mystery",
//   "Thriller",
//   "Romance",
//   "Fantasy",
//   "Morality",
//   "Society",
//   "Power",
//   "Justice",
//   "Adventure",
//   "Tragedy",
//   "War",
//   "Philosophy",
// ];

// export default function BookList({ setBooks }) {
//   const [category, setCategory] = useState("Fiction");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     console.log(`Fetching books for category: ${category}, page: ${page}`);

//     fetch(`https://gutendex.com/books/?topic=${category}&page=${page}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("API response:", data);
//         setBooks(data.results || []); // Update books in App.jsx
//         setTotalPages(Math.ceil((data.count || 1) / 10));
//       })
//       .catch((error) => console.error("Error fetching books:", error));
//   }, [category, page, setBooks]);

//   return (
//     <div>
//       <select onChange={(e) => setCategory(e.target.value)} value={category}>
//         {categories.map((cat) => (
//           <option key={cat} value={cat}>
//             {cat}
//           </option>
//         ))}
//       </select>
//       {/* <button disabled={page === 1} onClick={() => setPage(page - 1)}>
//         Prev
//       </button>
//       <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
//         Next
//       </button> */}
//     </div>
//   );
// }

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
  const [query, setQuery] = useState("");
  const [books, setBooksLocal] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    fetch(`https://gutendex.com/books/?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Search results:", data.results);
        setBooksLocal(data.results || []);
      })
      .catch((error) => console.error("Error fetching books:", error));
  };

  useEffect(() => {
    console.log(`Fetching books for category: ${category}, page: ${page}`);

    fetch(`https://gutendex.com/books/?topic=${category}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setBooksLocal(data.results || []);
        setTotalPages(Math.ceil((data.count || 1) / 10));
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, [category, page]);

  return (
    <div>
      {/* Search Bar */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Category selection */}
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Display Books */}
      <div>
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <h3>{book.title}</h3>
              <p>{book.author || "Unknown Author"}</p>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}
