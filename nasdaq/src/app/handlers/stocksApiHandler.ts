import axios from 'axios'
import appConfig from '../configs/app.config.json'

const getStocksUrl =`${appConfig.polygonUrl}${appConfig.services.stocks}`

const getStocks = () => { return axios.get(getStocksUrl.replace('{0}', appConfig.apiKey)) }
const polygonHandler = { getStocks };
export default polygonHandler;