import React, { useEffect, useState } from 'react';

import * as _ from 'lodash';
import moment from 'moment';
import { Layout } from 'components/templates';
import { getStockPrices } from 'services/api/search';
import { useRouter } from 'next/router';

import Chart from 'components/molecules/chart/chartjs';
import StockPriceTable from 'components/molecules/rs/StockPriceTable';
const { Line, Bar } = Chart;

import {
  VictoryBar,
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryAxis,
  VictoryCandlestick,
  VictoryZoomContainer,
  VictoryTheme,
} from 'victory';

export default function SymbolPage(): JSX.Element {
  const [stock, setStock]: any = useState(null);
  const [prices, setPrices]: any = useState([]);
  const [dates, setDates]: any = useState([]);
  const [rs, setRS]: any = useState([]);
  const [closes, setCloses]: any = useState([]);
  const [volumes, setVolumes]: any = useState([]);
  const [vs, setVS]: any = useState([]);
  const [AAA, setAAA]: any = useState([]);
  const [BBB, setBBB]: any = useState([]);

  const router = useRouter();
  const { symbol }: any = router.query;

  useEffect(() => {
    if (!router.isReady || _.isEmpty(symbol)) return;

    getStockPrices(symbol).then((r) => {
      setStock(r.data.stock);
      setPrices(r.data.prices);

      const chartData = _.take(r.data.prices, 500).reverse();
      setDates(_.map(chartData, 'date'));
      setRS(_.map(chartData, 'rs'));
      setCloses(_.map(chartData, 'close'));
      setVolumes(_.map(chartData, 'volume'));
      setVS(
        _.map(chartData, (p: any) => {
          return p.rs - p.rs_prev_21;
        }),
      );
      setAAA(
        _.map(r.data.prices, (p: any) => {
          p.x = moment(p.date, 'YYYY-MM-DD').toDate();
          return p;
        }),
      );

      const bbb: any = {};
      _.each(r.data.prices, (p: any) => {
        bbb[p.date] = p.close;
      });
      setBBB(bbb);
    });
  }, [router.query]);

  const graphData: any = {
    labels: dates,
    datasets: [
      {
        type: 'line',
        label: 'RS',
        data: rs,
        borderColor: 'rgb(251, 61, 125)',
        yAxisID: 'y-axis-1',
      },
      {
        type: 'line',
        label: '株価',
        data: closes,
        borderColor: 'rgb(121, 86, 244)',
        yAxisID: 'y-axis-2',
      },
      // {
      //   type: 'line',
      //   label: 'VS',
      //   data: vs,
      //   borderColor: 'rgb(0, 0, 0)',
      //   yAxisID: 'y-axis-3',
      // },
      {
        type: 'bar',
        label: '出来高',
        data: volumes,
        borderColor: 'rgb(52, 120, 107)',
        yAxisID: 'y-axis-3',
      },
    ],
  };
  const options: any = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          position: 'left',
          ticks: {
            max: 100,
            min: 0,
            stepSize: 1,
          },
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          position: 'right',
          ticks: { max: 5000, min: 0, stepSize: 200 },
        },
        {
          id: 'y-axis-3',
          type: 'linear',
          position: 'right',
          ticks: { max: 1.5, min: 0, stepSize: 0.5 },
        },
      ],
    },
  };

  return (
    <>
      <Layout>
        <div style={{ width: '1080px', minHeight: '1300px' }}>
          <p>
            {stock?.symbol} {stock?.name}
          </p>
          <p>
            {stock?.market_class} {stock?.industry} {stock?.date_of_public}
          </p>

          <div style={{ height: '500px', width: '1000px', backgroundColor: 'lightgray' }}>
            <VictoryChart width={1000} height={500} scale={{ x: 'time' }}>
              <VictoryAxis tickFormat={(t) => moment(t).format('YY-MM-DD')} />
              <VictoryAxis dependentAxis />
              {/* <VictoryLine
                data={_.map(prices, (p: any) => {
                  return { x: moment(p.date, 'YYYY-MM-DD').toDate(), y: p.close };
                })}
                padding={{ top: 10, bottom: 10 }}
                sortKey="x"
                sortOrder="descending"
                standalone={true}
                style={{
                  data: { stroke: '#c43a31' },
                  parent: { border: '1px solid #ccc' },
                }}
              /> */}
              <VictoryCandlestick
                candleRatio={0.4}
                scale={{ x: 'time', y: 'log' }}
                candleColors={{ positive: '#45f780', negative: '#c43a31' }}
                data={AAA}
              />
            </VictoryChart>
          </div>

          <div style={{ width: '1020px', height: '620px' }}>
            <Bar
              height={300}
              width={300}
              data={graphData}
              options={options}
              id="chart-key"
            />
          </div>

          <StockPriceTable prices={prices} />
        </div>
      </Layout>
    </>
  );
}
