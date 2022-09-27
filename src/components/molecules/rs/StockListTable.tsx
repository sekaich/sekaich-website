import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import * as _ from 'lodash';
import styled from 'styled-components';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

export default function StockListTable(): JSX.Element {
  const [stocks, setStocks] = useState([]);
  const [day, setDay] = useState('');
  const [count, setCount] = useState(0);

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const BASE_URL = 'https://rsjp-t7svawcxta-an.a.run.app';
  // const BASE_URL = 'http://127.0.0.1:3000';
  const LATEST = '/search/get_latest_stocks';
  const LATEST_LIMIT = '/search/get_latest_stocks_limit';
  const BY_DATE = '/search/get_stocks_by_date';

  const axios = Axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 30000,
  });

  const initFetchStocks = async () => {
    const res = await axios.post(LATEST_LIMIT, { limit: 100 });
    const list: any = _.sortBy(res.data.list, 'rs_rank');
    setStocks(list);
    setDay(res.data.date);
    setCount(res.data.count);
  };

  const secondFetchStocks = async () => {
    const res = await axios.post(LATEST, {});
    const list: any = _.sortBy(res.data.list, 'rs_rank');
    setStocks(list);
    setDay(res.data.date);

    setCount(res.data.count);
  };

  function addPlus(num: number) {
    const n = num > 0 ? `+${num}` : `${num}`;
    return `現在RS対比 ${n}`;
  }

  useEffect(() => {
    initFetchStocks();

    setTimeout(secondFetchStocks, 5000);
  }, []);

  return (
    <div style={{ padding: '4px 12px' }}>
      <h3 style={{ padding: 0, margin: 0 }}>
        日本版RS | {day !== '' ? day : <CircularProgress />} | 全{count}銘柄
      </h3>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer component={Paper} sx={{ maxHeight: '84vh' }}>
          <Table sx={{ minWidth: 650 }} size="small" stickyHeader>
            <TableHead>
              <TableRow
                sx={{
                  '> .MuiTableCell-root': {
                    padding: 0,
                    fontSize: '13px',
                    color: 'white',
                    fontWeight: 600,
                    backgroundColor: 'black',
                    height: 10,
                  },
                }}>
                <TableCell align="center" width="42px">
                  #
                </TableCell>
                <TableCell align="center" width="100px">
                  シンボル
                </TableCell>
                <TableCell align="left" padding="none" size="small">
                  銘柄名
                </TableCell>
                <TableCell align="center" width="100px" padding="none" size="small">
                  市場
                </TableCell>
                <TableCell align="center" padding="none" size="small">
                  始値
                </TableCell>
                <TableCell align="center" padding="none" size="small">
                  終値
                </TableCell>
                <TableCell align="center" padding="none" size="small">
                  高値
                </TableCell>
                <TableCell align="center" padding="none" size="small">
                  安値
                </TableCell>
                <TableCell align="center" padding="none" size="small">
                  出来高
                </TableCell>
                <TableCell align="center" width="90px">
                  RSスコア
                </TableCell>
                <TableCell align="center" width="48px">
                  RS
                </TableCell>
                <TableCell align="center" width="48px">
                  RS10
                </TableCell>
                <TableCell align="center" width="48px">
                  RS21
                </TableCell>
                <TableCell align="center" width="48px">
                  RS63
                </TableCell>
                <TableCell align="center" width="48px">
                  RS126
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stocks.map((row: any) => (
                <TableRow
                  key={row.symbol}
                  sx={{
                    '> .MuiTableCell-root': {
                      padding: '2px',
                      fontSize: '13px',
                      color: 'white',
                      fontWeight: 600,
                      backgroundColor: 'black',
                      height: 18,
                    },
                  }}>
                  <TableCell align="center">{row.rs_rank}</TableCell>
                  <TableCell align="center" component="th" scope="row" width={'80px'}>
                    <a
                      target="_blink"
                      style={{ color: 'pink', textDecorationLine: 'underline' }}
                      href={`https://www.buffett-code.com/company/${row.symbol}/stockprice`}>
                      {row.symbol}
                    </a>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link href={`/stock/${row.symbol}`}>
                      <a
                        target="_blink"
                        style={{ color: 'lightgray', textDecorationLine: 'underline' }}>
                        {row.name}
                      </a>
                    </Link>
                  </TableCell>
                  <TableCell align="center">{row.market_class}</TableCell>
                  <TableCell align="center">{row.open}</TableCell>
                  <TableCell align="center">{row.close}</TableCell>
                  <TableCell align="center">{row.high}</TableCell>
                  <TableCell align="center">{row.low}</TableCell>
                  <TableCell align="center">{row.volume?.toLocaleString()}</TableCell>

                  <TableCell align="center">{row.rs_base_score}</TableCell>
                  <TableCell align="center">{row.rs}</TableCell>
                  <TableCell align="center" title={addPlus(row.vs_rs_prev_10)}>
                    {row.rs_prev_10}
                  </TableCell>
                  <TableCell align="center" title={addPlus(row.vs_rs_prev_21)}>
                    {row.rs_prev_21}
                  </TableCell>
                  <TableCell align="center" title={addPlus(row.vs_rs_prev_63)}>
                    {row.rs_prev_63}
                  </TableCell>
                  <TableCell align="center" title={addPlus(row.vs_rs_prev_126)}>
                    {row.rs_prev_126}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
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
