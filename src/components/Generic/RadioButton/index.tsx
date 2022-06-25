import { MouseEvent, MouseEventHandler } from 'react';
import * as S from './styles';

interface RadioButtonProps {
  value?: string | number | boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  fontWeight?: 'light' | 'bold';
  name?: string;
}

export function RadioButton({
  value,
  label,
  onChange,
  onClick,
  defaultChecked,
  disabled,
  required,
  checked,
  name,
  fontWeight
}: RadioButtonProps) {
  return (
    
      <div style={{ width: '100%' }}>
        <S.Container
          value={value}
          label={label}
          fontWeight={fontWeight}
          control={
            <S.StyledRadio
              name={name}
              onClick={onClick}
              onChange={onChange}
              checked={checked}
              defaultChecked={defaultChecked}
              disabled={disabled}
              required={required}
            />
          }
        />
      </div>
   
  );
}
