import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Button as MuiButton, IconButton as MuiIconButton } from '@mui/material';

type Props = {
  annotation?: string;
  label?: string;
  classes?: string;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  routerPath?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  IconButton?: boolean;
  children?: ReactNode;
};

export const Button: FC<Props> = ({
  annotation,
  label,
  classes,
  fullWidth,
  onClick,
  disabled,
  routerPath,
  startIcon,
  endIcon,
  IconButton,
  children,
}) => {
  const router = useRouter();

  return (
    <>
      {IconButton ? (
        <StyledIconButton
          className={classes}
          onClick={(e) => {
            onClick && onClick(e);
            routerPath && router.push(routerPath);
          }}
          disabled={disabled}>
          {children}
        </StyledIconButton>
      ) : (
        <StyledButton
          className={classes}
          fullWidth={fullWidth}
          onClick={(e) => {
            onClick && onClick(e);
            routerPath && router.push(routerPath);
          }}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}>
          {annotation && <span>{annotation}</span>}
          {label}
          {children && children}
        </StyledButton>
      )}
    </>
  );
};

const StyledButton = styled(MuiButton)<{ disabled: boolean | undefined }>`
  padding: unset;
  height: 46px;
  background: linear-gradient(to right, rgba(180, 208, 2, 1) 25%, rgba(0, 152, 69, 1));
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    background: linear-gradient(
      to right,
      rgba(180, 208, 2, 0.8) 25%,
      rgba(0, 152, 69, 0.8)
    );
  }

  &.large {
    padding: 8px 24px;
    font-size: 24px;
  }

  &.grey {
    background: linear-gradient(to right, #cccccc 25%, #95a6a6);
  }

  &.green {
    background: #009845;
  }

  &.add-button {
    padding: 4px 16px;
    min-width: 120px;
    color: rgba(0, 0, 0, 0.87);
    background: #dfdfdf;

    &:hover {
      background: rgba(0, 152, 69, 0.04);
    }
  }

  &.icon-button {
    padding: 4px 16px;
    min-width: 120px;
    color: #868686;
    background: unset;

    &:hover {
      background: rgba(0, 152, 69, 0.04);
    }
  }

  &.transparent {
    font-size: 14px;
    background: unset;

    &:hover {
      background: rgba(0, 152, 69, 0.04);
    }
  }

  span {
    padding-right: 8px;
    font-weight: 300;
  }
`;

const StyledIconButton = styled(MuiIconButton)<{ disabled: boolean | undefined }>``;
