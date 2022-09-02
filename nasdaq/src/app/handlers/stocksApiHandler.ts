import axios from 'axios'
import { appConfig } from '../configs/app.config'

const getStocksUrl =`${appConfig.polygonUrl}${appConfig.services.stocks}`
const getTickerDetailsUrl =`${appConfig.polygonUrl}${appConfig.services.tickerDetails}`
const getTickerDailyDetailsUrl =`${appConfig.polygonUrl}${appConfig.services.tickerDailyDetails}`
const stockSearchUrl =`${appConfig.polygonUrl}${appConfig.services.stockSearch}`

const getStocks = (nextUrl?:string) => { return axios.get(nextUrl? `${nextUrl}&apiKey=${appConfig.apiKey}`:getStocksUrl.replace('{0}', appConfig.apiKey)) }
const getTickerDetails = (ticker: string) => { return axios.get(getTickerDetailsUrl.replace('{0}', ticker).replace('{1}', appConfig.apiKey)) }
const getTickerDailyDetails = (ticker: string, date: string) => { return axios.get(getTickerDailyDetailsUrl.replace('{0}', ticker).replace('{1}', date).replace('{2}', appConfig.apiKey)).catch(err=> ({data:{tickerDailyDetailsError: err.response.data.message}})) }
const stockSearch = (searchTerm: string, nextSearchUrl?:string) =>{ return axios.get(nextSearchUrl? `${nextSearchUrl}&apiKey=${appConfig.apiKey}`:stockSearchUrl.replace('{0}',searchTerm).replace('{1}', appConfig.apiKey)) }
const polygonHandler = { getStocks, getTickerDetails, getTickerDailyDetails,stockSearch };
export default polygonHandler;