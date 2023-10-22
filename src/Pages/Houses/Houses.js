import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Houses.module.css";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

function Houses() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [houses, setHouses] = useState([]);

  const fetchHouses = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/houses"
      );
      const data = await response.json();
      setHouses(data);
    } catch (error) {
      console.error("Error fetching house data: ", error);
    }
  };

  useEffect(() => {
    fetchHouses();
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const housesToDisplay = houses.slice(startIndex, endIndex);

  return (
    <section>
      <div>
        <ul className={styles["lax"]}>
          {housesToDisplay.map((house) => (
            <li key={house.id} className={styles["nax"]}>
              {house.name || house.aliases}
              <br />
              coatOfArms: {house.coatOfArms}
              <br />
              Region: {house.region}
              <br />
              Titles:{house.titles}
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

export default Houses;
