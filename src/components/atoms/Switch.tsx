import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { FormControl, FormControlLabel, Switch as MuiSwitch } from '@mui/material';

type Props = {
  label: string;
};

export const Switch: FC<Props> = ({ label }) => {
  return (
    <>
      <StyledFormControl>
        <FormControlLabel control={<MuiSwitch />} label={label} />
      </StyledFormControl>
    </>
  );
};

const StyledFormControl = styled(FormControl)`
  .MuiFormControlLabel-label {
    color: #868686;
    font-size: 16px;
    font-weight: bold;
  }
`;
