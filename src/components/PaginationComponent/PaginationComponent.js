import React from "react";

const PaginationComponent = ({
  currentPage,
  pageSize,
  totalPages,
  onPageChange,
  onPageSizeChange,
}) => {
  const isFirstPage = currentPage === 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="paginationComponent">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
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
