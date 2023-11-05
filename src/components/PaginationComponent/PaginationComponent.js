import React, { useState } from "react";

const PaginationComponent = ({
  currentPage,
  pageSize,
  totalPages,
  onPageChange,
  onPageSizeChange,
}) => {
  const [isFirstPage, setIsFirstPage] = useState(currentPage === 1);
  const [isLastPage, setIsLastPage] = useState(currentPage === pageSize + 1);

  let evaluateFirstPage = () => {
    setIsFirstPage(currentPage === 1);
  };

  let evaluateLastPage = () => {
    setIsLastPage(currentPage === pageSize + 1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      console.log("çurrent page: ", newPage);
      onPageChange(newPage);
    }
    evaluateFirstPage();
    evaluateLastPage();
  };
  return (
    <div className="paginationComponent">
      <button
        onClick={() => handlePageChange(currentPage--)}
        disabled={isFirstPage}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        disabled={isLastPage}
        onClick={() => handlePageChange(currentPage++)}
      >
        Next
      </button>
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
      >
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={50}>50 per page</option>
      </select>
    </div>
  );
};

export default PaginationComponent;
