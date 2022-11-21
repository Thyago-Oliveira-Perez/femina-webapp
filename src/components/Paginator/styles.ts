import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

export const StyledPagination = styled(Pagination)`
    &&& {
        .MuiPaginationItem-root {
            border: 1px solid #A77371;
        }

        .MuiPaginationItem-root.Mui-selected {
            background-color: #7A0000;
            color: white;
        }
    }
`;
