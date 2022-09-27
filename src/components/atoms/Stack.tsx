import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Stack as MuiStack } from '@mui/material';

type Props = {
  className?: string;
  center?: boolean;
  between?: boolean;
  column?: boolean;
  space?: number;
  children: ReactNode;
};

export const Stack: FC<Props> = ({
  className,
  center,
  between,
  column,
  space,
  children,
}) => {
  return (
    <StyledStack
      className={className}
      direction={column ? 'column' : 'row'}
      justifyContent={center ? 'center' : between ? 'space-between' : ''}
      alignItems={center ? 'center' : ''}
      spacing={space}>
      {children}
    </StyledStack>
  );
};

const StyledStack = styled(MuiStack)``;
