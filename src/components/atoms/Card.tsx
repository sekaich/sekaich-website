import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Card as MuiCard, Typography } from '@mui/material';

type Props = {
  caption?: string;
  title?: string;
  pagePath?: string;
  children: ReactNode;
};

export const Card: FC<Props> = ({ caption, title, children, pagePath }) => {
  return (
    <>
      <StyledMuiCard>
        <div className='card-header'>
          <Typography variant='h3'>
            <span>{caption}</span>
            {title}
          </Typography>
          {pagePath && <Typography className='move-detail-btn'>一覧を見る</Typography>}
        </div>
        {children}
      </StyledMuiCard>
    </>
  );
};

const StyledMuiCard = styled(MuiCard)`
  padding: 24px 32px;
  border-radius: 8px;
  .card-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: dotted #cecece;
    h3 {
      display: flex;
      align-items: center;
      padding-right: 16px;
      font-size: 26px;
      font-weight: bold;
      ::before {
        content: '';
        display: block;
        margin-right: 12px;
        width: 16px;
        height: 16px;
        background: #84c51e;
      }
    }
    .move-detail-btn {
      color: #029745;
      font-weight: bold;
    }
  }
`;
