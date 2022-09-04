// libs
import styled from 'styled-components';

// UI & Components
import nasdaqLogo from 'app/style/images/nasdaq.png';

const Wrapper = styled.header`
    width: 100%;
    background-color: #FFFFFF;
    text-align: center;
    border-bottom:1px solid gray;
    color:  #041330;
    height: auto;
    display flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    box-shadow: 0px 1px 3px grey;
    z-index:3;
    background-color:#D9E8F5;
`;

const NasdaqLogo = styled.img`
  width: 160px;
`;

const Header = () => {
  return (
    <Wrapper>
      <NasdaqLogo src={nasdaqLogo} />
    </Wrapper>
  );
};
export default Header;
