import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Houses.module.css";
import PaginationComponent from "../../components/PaginationComponent/PaginationComponent";

function Houses() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [houses, setHouses] = useState([]);

  const fetchHouses = async () => {
    try {
      const response = await fetch(
        `https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=${pageSize}}`
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

  return (
    <section>
      <div>
        <ul className={styles["lax"]}>
          {houses.map((house) => (
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

export default Houses;
