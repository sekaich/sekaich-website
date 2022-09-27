import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Select as MuiSelect, MenuItem } from '@mui/material';

type Props = {
  label: string;
  variant?: 'outlined';
  chipType?: 'bubble';
  children: ReactNode;
};

export const Select: FC<Props> = ({ label, variant, chipType,children }) => {
  return (
    <>
      <StyledSelect>
        {children}
      </StyledSelect>
    </>
  );
};

const StyledSelect = styled(MuiSelect)`
  &.bubble {
  }
`;
