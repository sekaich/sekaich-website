import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ListItem as MuiListItem, Typography } from '@mui/material';

type Props = {
  date?: string;
  text: string;
  pagePath?: string;
  children?: ReactNode;
};

export const ListItem: FC<Props> = ({ date, text }) => {
  return (
    <>
      <StyledMuiListItem>
        <Typography className='date'>{date}</Typography>
        <Typography className='text'>{text}</Typography>
      </StyledMuiListItem>
    </>
  );
};

const StyledMuiListItem = styled(MuiListItem)`
  display: flex;
  padding: 6px 0;
  cursor: pointer;
  .date {
    padding-right: 12px;
    color: #a5a5a5;
    font-size: 14px;
  }
  .text {
    height: 24px;
    box-sizing: border-box;
    &:hover {
      font-weight: bold;
      border-bottom: solid 2px #83c41e;
    }
  }
`;
