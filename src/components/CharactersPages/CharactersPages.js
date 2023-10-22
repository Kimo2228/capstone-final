import React, { useState } from "react";
import PaginationComponent from "../PaginationComponent/PaginationComponent";

const CharactersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const totalPages = 100; // Replace with the actual total number of pages

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Fetch characters data for the new page here
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    // Refetch characters data with the new page size here
  };

  return (
    <div>
      {/* Display your characters data here */}
      {/* Example: <CharacterList characters={characters} /> */}

      <PaginationComponent
        currentPage={currentPage}
        pageSize={pageSize}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default CharactersPage;
