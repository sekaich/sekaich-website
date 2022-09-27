import * as _ from 'lodash';
import { axios, PATHS } from './instance';

export default function getAxios(): any {
  return axios;
}

export async function getLatestStocks() {
  const res = await axios.post(PATHS.LATEST, {});
  const list: any = _.sortBy(res.data.list, 'rs_rank');
  return list;
}

export async function getLatestStocksLimit(limit: number) {
  const res = await axios.post(PATHS.LATEST_LIMIT, { limit });
  const list: any = _.sortBy(res.data.list, 'rs_rank');
  return list;
}

export async function getStockPrices(symbol: string) {
  const res = await axios.post(PATHS.STOCK_PRICES, { symbol, limit: 500 });

  return res.data;
}
