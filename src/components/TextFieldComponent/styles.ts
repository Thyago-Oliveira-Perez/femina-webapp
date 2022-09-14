import { TextField } from '@mui/material';

import styled from 'styled-components';

export const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#9B4A46',
    
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#9B4A46',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#C2C2C2',
    },
    '&:hover fieldset': {
      borderColor: '#7A0000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#9B4A46',
    },
  },
});