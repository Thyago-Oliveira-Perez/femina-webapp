import { TextField } from '@mui/material';
import { setThemeColor } from '../../../utils/components/Generic';

import styled, { css } from 'styled-components';

interface StyledTextFieldProps {

  requiredType?: string | boolean;
}

export const StyledTextField = styled(TextField)<StyledTextFieldProps>`
  &&& {
    ${({ disabled }) => css`
      

   

      

      

      

     

      
    `}
  }
`;
