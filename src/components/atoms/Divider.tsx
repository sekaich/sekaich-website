import React, { FC } from 'react';
import styled from 'styled-components';
import { Divider as MuiDivider } from '@mui/material';

type Props = {
  lineStyle?: 'dotted' | 'solid';
  orientation?: 'vertical' | 'horizontal';
  variant?: 'fullWidth' | 'middle';
  flexItem?: true | false;
};

export const Divider: FC<Props> = ({ lineStyle, orientation, variant, flexItem }) => {
  return (
    <StyledMuiDivider
      className={lineStyle}
      orientation={orientation}
      variant={variant}
      flexItem={flexItem}
    />
  );
};

const StyledMuiDivider = styled(MuiDivider)`
  border-width: 0px 0px 1.8px;
  border-right-width: 1.8px;
  border-style: dotted;
  border-color: #cecece;
  &.solid {
    border-width: 1px;
    border-style: solid;
    border-color: #b0b0b0;
  }
`;
