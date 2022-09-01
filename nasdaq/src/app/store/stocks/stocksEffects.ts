import polygonHandler from '../../handlers/stocksApiHandler';

export const getStocksApi = (nextUrl?:string) =>
    polygonHandler.getStocks(nextUrl);
