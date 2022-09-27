import React, { FC } from 'react';
import styled from 'styled-components';
import { TextField, Stack, Typography } from '@mui/material';
import { Icon } from 'components/atoms/Icon';

export const DateForm: FC = () => {
  return (
    <>
      <StyledStack className='parts-control' direction='row' alignItems='center'>
        <div className='icon'>
          <Icon iconType='calender' />
        </div>
        <TextField disabled placeholder='日付選択' sx={{ width: '180px' }} />
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
