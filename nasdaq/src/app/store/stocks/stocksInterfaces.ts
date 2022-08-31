// stocksState interface
export type StateStocks = {
    ticker: string
    fullName: string
}
export type State = {
    stocks: StateStocks[]
    isLoading: boolean
}

// stocksActions interface
export interface ActionStocks {
    data: {
        results: Array<{ ticker: string; name: string }>
    }
}