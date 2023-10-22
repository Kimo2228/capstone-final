/*import { createContext, useState, useCallback } from "react";

const INITIAL_PAGINATION = {
  isPagination: false,
  enablePagination: function () {},
  disablePagination: function () {},
};

export const PaginationContext = createContext(INITIAL_PAGINATION);

function PaginationProvider({ children }) {
  const [isPagination, setIsPagination] = useState(
    INITIAL_PAGINATION.isPagination
  );

  const enablePagination = useCallback(() => {
    setIsPagination(true);
  }, []);

  const disablePagination = useCallback(() => {
    setIsPagination(false);
  }, []);

  return (
    <PaginationContext.Provider
      value={{ isPagination, enablePagination, disablePagination }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export default PaginationProvider;*/
