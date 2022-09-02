import { ActionStockDetails, ActionTickerDailyDetails, ActionTickerDetails } from './stockDetailsInterfaces';
import { Context } from '../index'
import { getPrevDay } from '../../handlers/dateHandler';
import { appConfig } from '../../configs/app.config';



export const getStockDetails = async (context: Context, ticker: string) => {
    const prevDay = getPrevDay()
    context.actions.stockDetails._toggleLoadingState()
    let tickerDetails: ActionTickerDetails = await (await context.effects.stockDetails.getTickerDetailsApi(ticker)).data.results;
    tickerDetails = {name: tickerDetails.name,
        ticker: tickerDetails.ticker,
        branding: tickerDetails.branding? {logo_url: `${tickerDetails.branding.logo_url}?apiKey=${appConfig.apiKey}` } : undefined,
        home_url: tickerDetails.home_url ,
        sic_description: tickerDetails.sic_description ,
        description: tickerDetails.description }
    let tickerDailyDetails: ActionTickerDailyDetails  = await (await context.effects.stockDetails.getTickerDailyDetailsApi(ticker, prevDay)).data;
    tickerDailyDetails={close: tickerDailyDetails.close,
        high: tickerDailyDetails.high,
        low: tickerDailyDetails.low,
        open: tickerDailyDetails.open,
        volume: tickerDailyDetails.volume,
        tickerDailyDetailsError: tickerDailyDetails.tickerDailyDetailsError}
    const stockDetails: ActionStockDetails = {...tickerDetails, ...tickerDailyDetails};
    context.state.stockDetails.stockDetails = stockDetails;
    context.actions.stockDetails._toggleFulFiledState(true)
    context.actions.stockDetails._toggleLoadingState()
}

export const _toggleLoadingState = (context: Context) => {
    context.state.stockDetails.isLoading = !context.state.stockDetails.isLoading
}

export const _toggleFulFiledState = (context: Context, isFulFilled: boolean) => {
    context.state.stockDetails.isFulFilled = isFulFilled;
}
