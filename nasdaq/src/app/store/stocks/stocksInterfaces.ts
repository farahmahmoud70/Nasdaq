// stocksState interface
export interface StateStocks {
    ticker: string
    fullName: string
}
export interface State {
    stocks: StateStocks[]
    isLoading: boolean,
    nextUrl?: string
    isStocksNextUrl: boolean
}

// stocksActions interface
export interface ActionStocks {
    data: {
        results: Array<{ ticker: string; name: string }>
        next_url?:string
    }
}