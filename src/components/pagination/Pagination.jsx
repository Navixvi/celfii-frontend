import { ChevronFirst, ChevronLeft, ChevronRight, ChevronLast } from "lucide-react";

const PaginationButton = ({ disabled, onClick, Icon, ariaLabel }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
      disabled ? "text-gray-400 cursor-not-allowed" : "hover:text-red-600"
    }`}
    aria-label={ariaLabel}
  >
    <Icon className="w-5 h-5" />
  </button>
);

const Pagination = ({ currentPage, totalPages, onPageChange, maxVisiblePages = 5 }) => {
  const generatePageNumbers = () => {
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const halfVisible = Math.floor(maxVisiblePages / 2);
      startPage = Math.max(1, currentPage - halfVisible);
      endPage = Math.min(totalPages, currentPage + halfVisible);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex items-center justify-center w-full gap-4 mt-7">
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => currentPage > 1 && onPageChange(1)}
        Icon={ChevronFirst}
        ariaLabel="Ir a la primera página"
      />

      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        Icon={ChevronLeft}
        ariaLabel="Ir a la página anterior"
      />

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`hidden md:block mx-2 p-1 ${
            page === currentPage ? "text-red-500" : " border-b-2 border-white hover:border-red-600"
          }`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      <span className="text-red-500 md:hidden">{currentPage}</span>

      {currentPage < totalPages - 2 && <span className="hidden md:block">...</span>}

      {currentPage < totalPages - 1 && (
        <button
          onClick={() => onPageChange(totalPages)}
          className="hidden p-1 text-black border-b-2 border-white md:block hover:text-red-600 hover:border-red-600"
          aria-label={`Ir a la última página (${totalPages})`}
        >
          {totalPages}
        </button>
      )}

      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        Icon={ChevronRight}
        ariaLabel="Ir a la página siguiente"
      />

      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => currentPage < totalPages && onPageChange(totalPages)}
        Icon={ChevronLast}
        ariaLabel="Ir a la última página"
      />
    </div>
  );
};

export default Pagination;
