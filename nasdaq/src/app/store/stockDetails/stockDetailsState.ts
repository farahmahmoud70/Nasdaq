import { StockDetails, StockDetailsState } from './stockDetailsInterfaces';

export const state: StockDetailsState = {
  isLoading: false,
  isFulFilled: false,
  stockDetails: {} as StockDetails,
};
