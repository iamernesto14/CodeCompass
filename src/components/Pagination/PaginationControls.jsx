import React from "react";

export default function PaginationControls({ currentPage, totalPages, onPrevious, onNext }) {
  return (
    <div className="flex justify-center items-center space-x-5 text-base xl:text-h7 2xl:text-h5 mt-8 md:mt-16">
      <button
        disabled={currentPage === 1}
        className="text-accent text-lg flex items-center gap-x-1 font-semibold disabled:text-dim-gray transition-all duration-300 ease-in-out hover:text-gray"
        onClick={onPrevious}
      >
        <span className="text-base">&lt;</span> Previous
      </button>
      <div>
        {currentPage} of {totalPages}
      </div>
      <button
        disabled={currentPage === totalPages}
        className="text-accent text-lg flex items-center gap-x-1 font-semibold disabled:text-dim-gray transition-all duration-300 ease-in-out hover:text-gray"
        onClick={onNext}
      >
        Next <span className="text-base">&gt;</span>
      </button>
    </div>
  );
}
