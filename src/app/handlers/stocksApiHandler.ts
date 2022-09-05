import axios from 'axios';
import { appConfig } from '../configs/app.config';

const getStocksUrl = `${appConfig.polygonUrl}${appConfig.services.stocks}`;
const getTickerDetailsUrl = `${appConfig.polygonUrl}${appConfig.services.tickerDetails}`;
const getTickerDailyDetailsUrl = `${appConfig.polygonUrl}${appConfig.services.tickerDailyDetails}`;
const stockSearchUrl = `${appConfig.polygonUrl}${appConfig.services.stockSearch}`;

const auth = `Bearer ${appConfig.apiKey}`;

const getStocks = (nextUrl?: string) => {
  return axios.get(nextUrl ? nextUrl : getStocksUrl, {
    headers: {
      Authorization: auth,
    },
  });
};
const getTickerDetails = (ticker: string) => {
  return axios.get(getTickerDetailsUrl.replace('{0}', ticker), {
    headers: {
      Authorization: auth,
    },
  });
};
const getTickerDailyDetails = (ticker: string, date: string) => {
  return axios
    .get(getTickerDailyDetailsUrl.replace('{0}', ticker).replace('{1}', date), {
      headers: {
        Authorization: auth,
      },
    })
    .catch((err) => ({
      data: { tickerDailyDetailsError: err.response.data.message },
    }));
};
const stockSearch = (searchTerm: string, nextSearchUrl?: string) => {
  return axios.get(
    nextSearchUrl
      ? `${nextSearchUrl}&apiKey=${appConfig.apiKey}`
      : stockSearchUrl.replace('{0}', searchTerm),
    {
      headers: {
        Authorization: auth,
      },
    }
  );
};
const polygonHandler = {
  getStocks,
  getTickerDetails,
  getTickerDailyDetails,
  stockSearch,
};
export default polygonHandler;
