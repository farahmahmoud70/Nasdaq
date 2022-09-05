import { derived } from 'overmind';
import { State } from './stocksInterfaces';

export const state: State = {
  isLoading: false,
  stocks: [],
  nextUrl: '',
  nextSearchUrl: '',
  stockSearchRes: [],
  isStockSearchRes: false,
  isStocksNextUrl: derived((state: State) => (state.nextUrl ? true : false)),
  currDisplayedStocks: derived((state: State) =>
    state.stockSearchRes.length ? state.stockSearchRes : state.stocks
  ),
};
