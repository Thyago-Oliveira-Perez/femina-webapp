import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { IPageable } from "../../types/pageable.types";
import * as S from "./styles";
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import { IconButton } from "@mui/material";

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
      <IconButton
        onClick={() => {
          handlePageChange(page.currentPage - 1);
        }}
      >
        <IoIosArrowBack/>
      </IconButton>
      <p>{page.currentPage + 1}</p>
      {" de "}
      <p>{totalOfPages}</p>
      <IconButton
        onClick={() => {
          handlePageChange(page.currentPage + 1);
        }}
      >
        <IoIosArrowForward/>
      </IconButton>
    </S.StyledPagination>
  );
};
