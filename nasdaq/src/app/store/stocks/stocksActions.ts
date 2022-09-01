import { Context } from '../index'
import { ActionStocks } from './stocksInterfaces';



export const getStocks = async (context: Context) => {
    context.actions.stocks._toggleLoadingState()
    const stocks: ActionStocks = await context.effects.stocks.getStocksApi(context.state.stocks.nextUrl)
    stocks.data.results.forEach((stock: { ticker: string; name: string }) => context.state.stocks.stocks.push({ ticker: stock.ticker, fullName: stock.name }));
    context.actions.stocks._getNextUrl(stocks);
    context.actions.stocks._toggleLoadingState()
}

export const _toggleLoadingState = (context: Context) => {
    context.state.stocks.isLoading = !context.state.stocks.isLoading
}

export const _getNextUrl = (context: Context, stocks:ActionStocks) => {
    context.state.stocks.nextUrl = stocks.data.next_url;
}