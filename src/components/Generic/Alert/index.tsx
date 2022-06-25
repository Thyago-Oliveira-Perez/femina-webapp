import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

import { IconButton } from "@mui/material";
import { BiError, BiErrorCircle, BiInfoCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface AlertProps {
  message?: string;
  alertStatus?: boolean;
  setAlertStatus?: Dispatch<SetStateAction<boolean>>;
  type?: "error" | "success" | "info" | "warning";
  variant?: "filled" | "standard";
  closeButton?: boolean;
}

export const Alert = ({
  message,
  setAlertStatus,
  alertStatus,
  closeButton = true,
  type = "error",
  variant = "filled",
}: AlertProps) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertStatus && setAlertStatus(false);
  };

  return (
    <S.AlertContainer
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      onClose={handleClose}
      open={alertStatus}
    >
      <S.AlertType
        elevation={6}
        severity={type}
        variant={variant}
        iconMapping={{
          error: <BiError />,
          success: <AiOutlineCheckCircle />,
          info: <BiInfoCircle />,
          warning: <BiErrorCircle />,
        }}
        action={
          closeButton == true ? (
            <IconButton onClick={handleClose}>
              <S.CloseIcon variant={variant} type={type} />
            </IconButton>
          ) : (
            ""
          )
        }
      >
        <S.AlertMessage>{message}</S.AlertMessage>
      </S.AlertType>
    </S.AlertContainer>
  );
};
