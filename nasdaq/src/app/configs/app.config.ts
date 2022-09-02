interface AppConfig {
  polygonUrl: string
  apiKey: string
  services: Services
}

interface Services {
  stocks: string
  tickerDetails: string
  tickerDailyDetails: string
  stockSearch: string
}
export const appConfig: AppConfig = {
  polygonUrl: 'https://api.polygon.io/',
  apiKey: 'to71aHthPCFjSCfAO9NX4Nt8EzR55yGO',
  services: {
    stocks: 'v3/reference/tickers?active=true&sort=ticker&order=asc&limit=15&apiKey={0}',
    tickerDetails: 'v3/reference/tickers/{0}?apiKey={1}',
    tickerDailyDetails: 'v1/open-close/{0}/{1}?adjusted=true&apiKey={2}',
    stockSearch: 'v3/reference/tickers?active=true&sort=ticker&order=asc&limit=15&search={0}&apiKey={1}'
  }
}
