// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Characters.module.css";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

// Create a Characters component
function Characters() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [characters, setCharacters] = useState([]); // Store character data fetched from the API
  const [pageNumber, setPageNumber] = useState(1);
  // Function to fetch character data from an API
  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://www.anapioficeandfire.com/api/characters?page=${pageNumber}&pageSize=10`
      );
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.error("Error fetching character data: ", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
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

  // Calculate the characters to display on the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const charactersToDisplay = characters.slice(startIndex, endIndex);

  return (
    <section className={styles["section__container"]}>
      <div>
        <ul>
          {charactersToDisplay.map((character) => (
            <li key={character.id}>
              <Link to={`/character?api=${character.url}`}>
                {character.name || character.aliases}
              </Link>
              <br />
              Culture: {character.culture}
              <br />
              Gender: {character.gender}
              {/* Add icon based on gender */}
            </li>
          ))}
        </ul>
      </div>
      <footer className={["app__footer"]}>
        <PaginationComponent />
      </footer>
    </section>
  );
}

export default Characters;
