import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import * as _ from 'lodash';
import styled from 'styled-components';
import { Layout } from 'components/templates';
import StockListTable from 'components/molecules/rs/StockListTable';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomerList(): JSX.Element {
  return (
    <>
      <Layout>
        <StockListTable />
      </Layout>
    </>
  );
}

const StyledCustomerList = styled.div`
  width: 100%;
  > ul {
    padding: 10px;
    background: #ffffff;
    > li {
      display: flex;
      > p {
        padding: 4px;
      }
    }
  }
`;
