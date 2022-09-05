// libs
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// overmind
import { useActions, useAppState } from 'app/overmind';

// UI & components
import InfiniteScroll from 'app/components/common/infiniteScroll/InfiniteScroll';
import Card from 'app/components/common/card/Card';

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  padding: 10px;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: center;
  justify-items: center;
`;

const ExploreGrid = () => {
  const stocks = useAppState().stocks;
  const isStockDetailsLoading = useAppState().stockDetails.isLoading;
  const isStocksLoading = useAppState().stocks.isLoading;
  const isStockDetailsFulFilled = useAppState().stockDetails.isFulFilled;
  const stockDetailsAction = useActions().stockDetails;
  const isStocksNextUrl = useAppState().stocks.isStocksNextUrl;
  const stockActions = useActions().stocks;
  const navigate = useNavigate();

  const onCardClick = (ticker: string) => {
    stockDetailsAction.getStockDetails(ticker);
  };

  const loadMoreStocks = () => {
    stockActions.getStocks();
  };

  useEffect(() => {
    if (!isStockDetailsLoading && isStockDetailsFulFilled) {
      navigate('/stockDetails');
    }
  }, [isStockDetailsLoading, isStockDetailsFulFilled]);

  useEffect(() => {
    if (!stocks.stocks.length) {
      stockActions.getStocks();
    }
  }, []);

  return (
    <>
      <InfiniteScroll
        hasMoreData={isStocksNextUrl}
        isLoading={isStocksLoading}
        onBottomHit={loadMoreStocks}
        loadOnMount={false}
      >
        <ContentWrapper>
          {stocks.currDisplayedStocks.map(
            (stock: { ticker: string; fullName: string }, index: number) => (
              <Card
                key={`${stock.ticker}_${index}`}
                id={`${stock.ticker}_${index}`}
                stock={stock}
                onCardClick={onCardClick}
              />
            )
          )}
        </ContentWrapper>
      </InfiniteScroll>
    </>
  );
};
export default ExploreGrid;
