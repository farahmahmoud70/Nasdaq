// stocksState interface
export interface StateStocks {
  ticker: string;
  fullName: string;
}
export interface State {
  stocks: StateStocks[];
  stockSearchRes: StateStocks[];
  isLoading: boolean;
  nextUrl?: string;
  isStocksNextUrl: boolean;
  nextSearchUrl?: string;
  currDisplayedStocks: StateStocks[];
}

// stocksActions interface
export interface ActionStocks {
  data: {
    results: Array<{ ticker: string; name: string }>;
    next_url?: string;
  };
}
