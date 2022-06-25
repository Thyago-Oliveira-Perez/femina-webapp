import * as S from './styles';
import { IoIosArrowDown } from 'react-icons/io';
import { FormControl, SelectChangeEvent } from '@mui/material';

interface SelectProps {
  label?: string;
  themeColor?:string;
  requiredType?: 'obrigatório' | 'requerido' | boolean;
  children?: React.ReactNode;
  onChange?: (e: SelectChangeEvent<unknown>) => void;
  value?: unknown;
  defaultValue?: unknown;
  disabled?: boolean;
  style?: React.CSSProperties;
  shrink?: boolean;
  name?: string;
}

export const Select = ({
  label,
  themeColor = '#7a000',
  children,
  defaultValue,
  onChange,
  value,
  requiredType,
  disabled,
  style,
  shrink,
  name,
}: SelectProps) => {

  return (
      <FormControl fullWidth>
        <S.SelectLabel
          variant="filled"
          themeColor={themeColor}
          required={Boolean(requiredType)}
          requiredType={requiredType}
          {...(shrink && { shrink: true })}
        >
          {label}
        </S.SelectLabel>
        <S.SelectWrapper
          name={name}
          disabled={disabled}
          style={style}
          IconComponent={(props) => (
            <IoIosArrowDown
              {...props}
              color={'#9B4A46'}
              size={16}
            />
          )}
          label={label}
          fullWidth
          variant="filled"
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
        >
          {children}
        </S.SelectWrapper>
      </FormControl>
    
  );
};
