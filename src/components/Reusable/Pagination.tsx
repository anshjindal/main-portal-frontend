import React from 'react';

type PaginationProps = {
  page: number;
  totalPages: number;
  updatePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, updatePage }) => (
  <div className="flex justify-center mt-4">
    <button
      onClick={() => updatePage(Math.max(page - 1, 1))}
      disabled={page === 1}
      className="mx-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
    >
      Previous
    </button>
    <span className="px-4 py-2">{`Page ${page} of ${totalPages}`}</span>
    <button
      onClick={() => updatePage(page < totalPages ? page + 1 : page)}
      disabled={page >= totalPages}
      className="mx-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
);

export default Pagination;
