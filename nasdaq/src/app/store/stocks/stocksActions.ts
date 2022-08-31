import { Context } from '../index'
import { ActionStocks } from './stocksInterfaces';



export const getStocks = async (context: Context) => {
    const stocks: ActionStocks = await context.effects.stocks.getStocksApi()
    stocks.data.results.forEach((stock: { ticker: string; name: string }) => context.state.stocks.stocks.push({ ticker: stock.ticker, fullName: stock.name }));
}