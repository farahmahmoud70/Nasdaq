// libs
import styled from 'styled-components';

// UI & components
import clearSearch from 'app/style/images/close.png';

const SearchWrapper = styled.div`
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 12px;
}
`;

const SearchInputWrapper = styled.input`
  outline: none !important;
  border-color: #304269;
  border-width: 1px;
  border-radius: 12px;
  padding: 10px;
  height: min-content;
  margin-right: 12px;
  width: 100%;
  &:focus {
    border-color: transparent;
    box-shadow: 0 0 2px #f26101;
  }
`;

const SearchIconWrapper = styled.img<{
  searchIconWidth: number;
  searchIconHeight: number;
}>`
  width: ${(props) => `${props.searchIconWidth}px` || 'auto'};
  height: ${(props) => `${props.searchIconHeight}px` || 'auto'};
`;

const ClearSearch = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 48px;
  cursor: pointer;
`;

type SearchInterface = {
  searchInputId: string;
  searchPlaceholder: string;
  searchIcon: string;
  searchIconId: string;
  searchValue: string;
  searchIconAlt: string;
  searchIconTitle: string;
  searchIconWidth: number;
  searchIconHeight: number;
  dataTestID?: string;
  clearInputTestID?: string;
  searchInputTestID?: string;
  onSearchChange: (searchTerm: string) => void;
  onSearchClear?: () => void;
};

const Search = ({
  searchInputId,
  searchPlaceholder,
  searchIcon,
  searchValue,
  searchIconId,
  searchIconAlt,
  searchIconTitle,
  searchIconWidth,
  searchIconHeight,
  dataTestID,
  clearInputTestID,
  searchInputTestID,
  onSearchChange,
  onSearchClear,
}: SearchInterface) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    onSearchChange(e.currentTarget.value);
  };

  const onClear = (): void => {
    onSearchClear && onSearchClear();
  };

  return (
    <SearchWrapper data-testid={dataTestID}>
      <SearchInputWrapper
        placeholder={searchPlaceholder}
        onChange={onChange}
        value={searchValue}
        id={searchInputId}
        data-testid={searchInputTestID}
      />
      {searchValue && (
        <ClearSearch
          src={clearSearch}
          alt={'clearSearch'}
          onClick={onClear}
          data-testid={clearInputTestID}
        />
      )}
      <SearchIconWrapper
        src={searchIcon}
        alt={searchIconAlt}
        id={searchIconId}
        title={searchIconTitle}
        searchIconWidth={searchIconWidth}
        searchIconHeight={searchIconHeight}
      />
    </SearchWrapper>
  );
};
export default Search;
