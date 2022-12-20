const range = (start: number, end: number) => {
  return [...Array(end).keys()].map(el => el + start);
};

type paginationItemType = {
  page: number;
  currentPage: number;
  onPageChange: (arg0: any) => void;
};

type PaginationType = {
  currentPage: any;
  total: number;
  limit: number;
  onPageChange: any;
};

const PaginationItem = ({
  page,
  currentPage,
  onPageChange,
}: paginationItemType) => {
  return (
    <button
      className={`p-5 border-collaction ${
        currentPage == page ? 'border-t-4' : 'border-t-2'
      }`}
      onClick={() => onPageChange(page)}
    >
      <span
        className={`text-sm ${currentPage == page ? 'font-bold' : 'font-thin'}`}
      >
        {page}
      </span>
    </button>
  );
};

const Pagination = ({ currentPage, total, onPageChange }: PaginationType) => {
  const pages = range(1, total);
  return (
    <div className="flex py-8">
      {pages.map(page => (
        <PaginationItem
          page={page}
          key={page}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      ))}
    </div>
  );
};
export default Pagination;
