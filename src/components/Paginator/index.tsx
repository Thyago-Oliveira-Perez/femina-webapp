import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { IPageable } from "../../types/pageable.types";
import * as S from "./styles";

interface PaginationProps {
  totalOfPages: number;
  setPage: React.Dispatch<React.SetStateAction<IPageable>>;
  page: IPageable;
}

export const PaginationComponent = ({
  totalOfPages,
  setPage,
  page,
}: PaginationProps) => {
  const handlePageChange = (value: any) => {
    setPage({
      ...page,
      ...{
        currentPage: value,
      },
    });
  };

  return (
    <S.StyledPagination>
      <button
        onClick={() => {
          handlePageChange(page.currentPage - 1);
        }}
      >
        {"<"}
      </button>
      <p>{page.currentPage + 1}</p>
      {" de "}
      <p>{totalOfPages}</p>
      <button
        onClick={() => {
          handlePageChange(page.currentPage + 1);
        }}
      >
        {">"}
      </button>
    </S.StyledPagination>
  );
};
