import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Books.module.css";

// Create a Characters component
function Books() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [books, setBooks] = useState([]); // Store book data fetched from the API

  // Function to fetch book data from an API
  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books"
      );
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching book data: ", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [currentPage, pageSize]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handle page size change
  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1); // Reset to the first page when changing page size
  };

  // Calculate the book to display on the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const booksToDisplay = books.slice(startIndex, endIndex);

  return (
    <section className={styles["section__container"]}>
      <div>
        {/* Display the list of books */}
        <ul>
          {booksToDisplay.map((book) => (
            <li key={book.id}>
              <Link to={`/book?api=${book.url}`}>
                {book.name || book.aliases}
              </Link>
              <br />
              povCharacters: {book.povCharacters}
              <br />
              Authors: {book.authors}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Books;
