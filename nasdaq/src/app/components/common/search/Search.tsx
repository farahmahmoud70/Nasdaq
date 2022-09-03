// libs
import styled from 'styled-components';

const SearchWrapper = styled.div`
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
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
  width: ${(props) => props.searchIconWidth || 'auto'};
  height: ${(props) => props.searchIconHeight || 'auto'};
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
  onSearchChange: (searchTerm: string) => void;
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
  onSearchChange,
}: SearchInterface) => {
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    onSearchChange(e.currentTarget.value);
  };

  return (
    <SearchWrapper>
      <SearchInputWrapper
        placeholder={searchPlaceholder}
        onChange={onChange}
        value={searchValue}
        id={searchInputId}
      />
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
