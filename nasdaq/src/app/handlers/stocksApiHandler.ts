import axios from 'axios'
import appConfig from '../configs/app.config.json'

const getStocksUrl =`${appConfig.polygonUrl}${appConfig.services.stocks}`
const getSockDetailsUrl =`${appConfig.polygonUrl}${appConfig.services.stockDetails}`

const getStocks = (nextUrl?:string) => { return axios.get(nextUrl? `${nextUrl}&apiKey=${appConfig.apiKey}`:getStocksUrl.replace('{0}', appConfig.apiKey)) }
const getSockDetails = (ticker: string) => { return axios.get(getSockDetailsUrl.replace('{0}', ticker).replace('{1}', appConfig.apiKey)) }
const polygonHandler = { getStocks, getSockDetails };
export default polygonHandler;