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
      console.log(
        `call api with page size: ${pageSize} and page number: ${pageNumber} `
      );
      const response = await fetch(
        `https://www.anapioficeandfire.com/api/characters?page=${pageNumber}&pageSize=${pageSize}}`
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

  return (
    <section className={styles["section__container"]}>
      <div>
        <ul>
          {characters.map((character) => (
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
        <PaginationComponent
          currentPage={currentPage}
          pageSize={pageSize}
          totalPages={10}
          onPageChange={(page) => {
            console.log("log pafe", page);
            setPageNumber(page);
            setCurrentPage(page);
          }}
          onPageSizeChange={(size) => {
            console.log("log size", size);
            setPageSize(size);
          }}
        />
      </footer>
    </section>
  );
}

export default Characters;
