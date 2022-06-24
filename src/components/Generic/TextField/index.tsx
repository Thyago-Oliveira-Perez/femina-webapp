import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { IconsProps } from "../../../types/Icons";
import IoEyeSharp from "react-icons/io";
import BsEyeSlashFill from "react-icons/bs"

import * as S from "./styles";

interface TextFieldProps {
  label?: string;
  requiredType?: 'obrigatório' | 'requerido' | boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  icon?: IconsProps;
  iconEnd?: IconsProps;
  disabled?: boolean;
  style?: React.CSSProperties;
  defaultValue?: string | number;
  value?: string | number | null;
  type?:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'date'
    | 'money'
    | 'telephone'
    | 'cellphone'
    | 'cpf'
    | 'cnpj'
    | 'cep';
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onIconEndClick?: () => void;
  iconEndVisibility?: boolean;
  name?: string | undefined;
  shrink?: boolean;
}

export const TextFieldComponent = ({
  label,
  requiredType,
  onChange,
  icon,
  iconEnd,
  disabled,
  style,
  defaultValue,
  value,
  type,
  placeholder,
  onFocus,
  onIconEndClick,
  name,
  shrink = true
}: TextFieldProps) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <>
      <S.StyledTextField
        variant="outlined"
        label={label}
        name={name}
        placeholder={placeholder}
        type={visiblePassword ? 'text' : type}
        requiredType={requiredType}
        required={Boolean(requiredType)}
        style={style}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        onFocus={onFocus}
        
      />
    </>
  );
};
