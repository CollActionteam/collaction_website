
const range = (start: number , end: number ) => {
  return [ ...Array(end).keys()].map((el) => el + start);
};

type paginationItemType = {
   page: number,
   currentPage: number,
   onPageChange: (arg0: any) => void
};

type PaginationType = {
  currentPage: any,
  total: number, 
  limit: number, 
  onPageChange: any
}

const PaginationItem = ({page,
   currentPage,
   onPageChange} : paginationItemType) => {
  return (
    <button onClick={() => onPageChange(page)} className="">
      <span className="text-collaction-400 p-5">{page}</span>
    </button>
  );
};

const Pagination = ( {currentPage, total, limit, onPageChange} : PaginationType ) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  return (
    <div className="flex">
      {pages.map((page) => (
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