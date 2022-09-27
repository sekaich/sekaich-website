import Axios from 'axios';
import * as _ from 'lodash';

const BASE_URL = 'https://api.kaburank.app';

// const BASE_URL = 'http://127.0.0.1:3000';

export const PATHS = {
  LATEST: '/search/get_latest_stocks',
  LATEST_LIMIT: '/search/get_latest_stocks_limit',
  BY_DATE: '/search/get_stocks_by_date',
  STOCK_PRICES: '/search/get_stock_prices',
};

const AUTH_KEY = 'X-AUTH-SUPABASE';

let headers: any = { 'Content-Type': 'application/json' };
headers[AUTH_KEY] = 'NONE';

export const axios = Axios.create({ baseURL: BASE_URL, headers, timeout: 30000 });

// Add a request interceptor
axios.interceptors.request.use(
  async function (config) {
    if (true) {
      headers[AUTH_KEY] = 'TOKEN';
    }

    config.headers = headers;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);
