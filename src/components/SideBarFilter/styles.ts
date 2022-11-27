import styled from 'styled-components';
import { Select, SwipeableDrawer } from '@mui/material';

export const Container = styled.div`
    width: 200px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const TitleFilter = styled.div`
    display: flex;
    justify-content: space-between;
    h3 {
        color: #7A0000;
    }
`;

export const FilterContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const ButtonArea = styled.div`
    width: 100%;
    margin-top: 2rem;
`;

