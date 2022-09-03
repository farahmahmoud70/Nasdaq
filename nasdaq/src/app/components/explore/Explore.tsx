// libs
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// handlers
import { useDebounce } from 'app/handlers/useDebounce';

// UI & components
import Search from 'app/components/common/search/Search';
import searchIcon from 'app/style/images/exploreSearch.png';
import ExploreGrid from './exploreGrid/ExploreGrid';

// overmind
import { useActions, useAppState } from 'app/store';

const Wrapper = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items:center;
overflow-y: hidden;
position :relative;
margin-bottom:10px;
}
`;

const GridTitleWrapper = styled.div`
  font-size: xx-large;
  font-weight: bold;
  color: #f26101;
  width: 100%;
  text-align: left;
`;

const ExploreGridWrapper = styled.div`
  width: 100%;
  height: calc(100% - 88px);
  top: 88px;
  position: relative;
`;

const ExploreHeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ExploreFixedWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  position: fixed;
  z-index: 2;
  background: #ffffff;
  border-bottom: 1px solid #304269;
  box-shadow: 0px 1px 3px #91bed4;
`;

const Explore = () => {
  const stockActions = useActions().stocks;
  const stocks = useAppState().stocks;

  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (val: string) => {
    setSearchValue(val);
  };

  const debouncedSearchTerm: string = useDebounce<string>(searchValue, 500);

  //  Effect for API call
  useEffect(
    () => {
      // handle search from BE
      if (debouncedSearchTerm) stockActions.stockSearch(debouncedSearchTerm);

      // clear search result if the debounceSearchTerm was empty while there are stock search results
      if (!debouncedSearchTerm && stocks.stockSearchRes.length)
        stockActions.clearStockSearchRes();
    },
    [debouncedSearchTerm] //  Only call effect if debounced search term changes
  );
  return (
    <Wrapper>
      <ExploreFixedWrapper>
        <ExploreHeaderWrapper>
          <GridTitleWrapper>{'Stocks Market'}</GridTitleWrapper>
          <Search
            searchIconTitle={'explore ticker search'}
            searchIconAlt="explore-search"
            searchIconId="explore-search-icon"
            searchInputId="explore-search-input"
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            searchIcon={searchIcon}
            searchPlaceholder={'Search on more tickers'}
            searchIconWidth={24}
            searchIconHeight={24}
          />
        </ExploreHeaderWrapper>
      </ExploreFixedWrapper>

      <ExploreGridWrapper>
        <ExploreGrid />
      </ExploreGridWrapper>
    </Wrapper>
  );
};
export default Explore;
