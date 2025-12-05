export const PaginationControls = ({ currentPage, totalPages, goToPage }) => (
  <div className="pagination">
    <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
      Previous
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={() => goToPage(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);
