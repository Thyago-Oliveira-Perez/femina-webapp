import * as S from './styles';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  title?: string | null;
  type?: 'button' | 'submit' | 'reset';
  themeColor?:
    | 'primary'
    | 'success'
    | 'error'
    | 'light'
    | 'primary-1'
    | 'primary-2'
    | 'secondary-1'
    | 'secondary-2'
    | 'grey'
    | 'light-1'
    | 'light-2'
    | 'light-3'
    | 'none';

  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  border?: boolean;
  disableRipple?: boolean;
  disablePaddingInline?: boolean;
  iconTop?: boolean;
  iconSize?: string;
}

export const ButtonComponent = ({
  disabled,
  title,
  themeColor = 'primary',
  onClick,
  width,
  height,
  style,
  fullWidth,
  disableRipple,
  disablePaddingInline,
  border = true,
  iconTop,
  iconSize,
  type
}: ButtonProps) => {
  return (
    
      <S.StyledButton
        iconSize={iconSize}
        isTitled={Boolean(title)}
        disabled={disabled}
        themeColor={themeColor}
        onClick={onClick}
        width={width}
        height={height}
        style={style}
        fullWidth={fullWidth}
        border={border}
        disableRipple={disableRipple}
        disablePaddingInline={disablePaddingInline}
        iconTop={iconTop}
        type={type}
      >
        {title}
      </S.StyledButton>
    
  );
};
