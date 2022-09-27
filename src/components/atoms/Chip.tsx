import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Chip as MuiChip } from '@mui/material';

type Props = {
  label: string;
  variant?: 'outlined';
  chipType?: 'bubble';
};

export const Chip: FC<Props> = ({ label, variant, chipType }) => {
  return (
    <>
      <StyledChip
        className={`${chipType === 'bubble' && 'bubble'}`}
        label={label}
        variant={variant}
      />
    </>
  );
};

const StyledChip = styled(MuiChip)`
  &.bubble {
    margin-right: 6px;
    height: 28px;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 6px;
    background: #009845;
    &:after {
      content: '';
      position: relative;
      right: -8px;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 10px solid #009845;
    }
    .MuiChip-label {
      padding-right: 2px;
    }
  }
`;
