import * as S from './styles';

interface CheckboxProps {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  style?: React.CSSProperties;
}

export const Checkbox = ({
  label,
  onChange,
  checked,
  defaultChecked,
  disabled,
  required,
  style
}: CheckboxProps) => {
  return (
      <S.Container
        style={style}
        required={required}
        control={
          <S.StyledCheckbox
            onChange={onChange}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
          />
        }
        label={label}
      />
  );
};
