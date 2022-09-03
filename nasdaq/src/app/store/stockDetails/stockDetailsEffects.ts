import polygonHandler from '../../handlers/stocksApiHandler';

export const getTickerDetailsApi = (ticker: string) =>
  polygonHandler.getTickerDetails(ticker);

export const getTickerDailyDetailsApi = (ticker: string, date: string) =>
  polygonHandler.getTickerDailyDetails(ticker, date);
