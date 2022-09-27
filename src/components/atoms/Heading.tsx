import React, { FC, ReactText } from 'react';
import styled from 'styled-components';
import { Typography as MuiTypography, TypographyTypeMap } from '@mui/material';

type Props = {
  variant?: TypographyTypeMap['props']['variant'];
  children: ReactText;
};

export const Heading: FC<Props> = ({ variant, children }) => {
  return (
    <>
      <StyledMuiTypography variant={variant}>{children}</StyledMuiTypography>
    </>
  );
};

const StyledMuiTypography = styled(MuiTypography)`
  h3& {
  }
  h4& {
    padding-left: 10px;
    height: fit-content;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.1;
    border-left: 5px solid #d3ef19;
  }
`;
