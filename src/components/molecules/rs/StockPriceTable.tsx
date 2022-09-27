import React, { useEffect, useState } from 'react';
import * as _ from 'lodash';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

function addPlus(num: number) {
  const n = num > 0 ? `+${num}` : `${num}`;
  return `現在RS対比 ${n}`;
}

export default function StockListTable({ prices }: any): JSX.Element {
  const count = `全${prices.length}銘柄`;
  const isLoading = prices.length === 0;

  return (
    <div style={{ padding: '4px 12px' }}>
      <h3 style={{ padding: 0, margin: 0 }}>
        日本版RS | {!isLoading ? prices.length : <CircularProgress />} | {count}
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
                <TableCell align="center" width="100px">
                  日付
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
              {prices.map((row: any) => (
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
                  <TableCell align="center">{row.date}</TableCell>
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
