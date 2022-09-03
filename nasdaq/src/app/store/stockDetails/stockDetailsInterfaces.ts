export interface StockDetails {
  branding?:
    | {
        logo_url: string | undefined;
      }
    | undefined;
  ticker: string;
  name: string;
  close?: number | undefined;
  high?: number | undefined;
  low?: number | undefined;
  open?: number | undefined;
  volume?: number | undefined;
  homepage_url?: string | undefined;
  sic_description?: string | undefined;
  description?: string | undefined;
  tickerDailyDetailsError?: string | undefined;
}
export interface StockDetailsState {
  isLoading: boolean;
  isFulFilled: boolean;
  stockDetails: StockDetails;
}

export interface ActionTickerDetails {
  name: string;
  ticker: string;
  branding?:
    | {
        logo_url: string | undefined;
      }
    | undefined;
  homepage_url?: string | undefined;
  sic_description?: string | undefined;
  description?: string | undefined;
}

export interface ActionTickerDailyDetails {
  close?: number | undefined;
  high?: number | undefined;
  low?: number | undefined;
  open?: number | undefined;
  volume?: number | undefined;
  tickerDailyDetailsError?: string | undefined;
}

export interface ActionStockDetails
  extends ActionTickerDetails,
    ActionTickerDailyDetails {}
