import { FC } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

export const Footer: FC = () => {
  return (
    <>
      <StyledFooter>
        <div>
          <Typography>©KABURANK All Right Reserved</Typography>
        </div>
      </StyledFooter>
    </>
  );
};

const StyledFooter = styled.div`
  width: 100%;
  padding: 4px;
  background: linear-gradient(to right, #6a6a69 25%, #000000);
  margin-top: 5px;
  > div {
    display: flex;
    margin: auto;
    width: inherit;
    max-width: 1280px;
    > p {
      color: #ffffff;
      text-align: center;
      width: 100%;
      font-size: 12px;
    }
  }
`;
