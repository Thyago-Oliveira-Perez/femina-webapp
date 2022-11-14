import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import * as S from './styles'

interface PaginationProps {
    totalPages: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    page: number;
}

export const PaginationComponent = ({totalPages, setPage, page}:PaginationProps) => {
    
    const handlePageChange = (event: any, value: any) => {
        setPage(value);
    };

    return (
        <Stack spacing={2}>
          
          <S.StyledPagination 
            page={page} 
            count={totalPages} 
            onChange={handlePageChange} 
            siblingCount={1} 
            variant="outlined" 
            shape="rounded" 
            />
        </Stack>
      );
}