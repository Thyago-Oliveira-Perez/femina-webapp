import * as S from './styles';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  title?: string | null;
  type?: 'button' | 'submit' | 'reset';
  themeColor?:string;

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
  themeColor = '#7a0000',
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