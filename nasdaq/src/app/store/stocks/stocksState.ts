import { derived } from 'overmind';
import { State } from './stocksInterfaces';

export const state: State = {
    isLoading:false,
    stocks: [],
    nextUrl:'',
    isStocksNextUrl: derived((state: State) => state.nextUrl? true: false)
}