import React, { FC } from 'react';
import styled from 'styled-components';
import { TextField, Stack, Typography } from '@mui/material';
import { Icon } from 'components/atoms/Icon';

export const TimeForm: FC = () => {
  return (
    <>
      <StyledStack direction='row' alignItems='center' spacing={1}>
        <div className='icon'>
          <Icon iconType='time' />
        </div>
        <TextField disabled placeholder='19' sx={{ width: '60px' }} />
        <Typography>:</Typography>
        <TextField disabled placeholder='00' sx={{ width: '60px' }} />
      </StyledStack>
    </>
  );
};

const StyledStack = styled(Stack)`
  padding: 0 16px;
  .icon {
    padding: 0 9px 0 9px;
  }
`;
