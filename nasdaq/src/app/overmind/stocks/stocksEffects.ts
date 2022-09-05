import polygonHandler from '../../handlers/stocksApiHandler';

export const getStocksApi = (nextUrl?: string) =>
  polygonHandler.getStocks(nextUrl);

export const stockSearchApi = (searchTerm: string, nextSearchUrl?: string) =>
  polygonHandler.stockSearch(searchTerm, nextSearchUrl);
