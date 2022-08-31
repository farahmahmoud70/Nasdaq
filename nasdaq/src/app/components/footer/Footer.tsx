import Text from '../common/text/Text';
import styled from 'styled-components';
import nasdaqLogo from '../../style/images/nasdaq.png';
const Wrapper = styled.footer`
    width: 100%;
    height:auto;
    background-color: #304269;
    border-top:1px solid gray;
    display flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px;
`

const HWrapper = styled.div`
    width: 100%;
    height:100%;
    display flex;
    flex-direction:column;
    justify-content: center;
    align-items: space-between;
`

const NasdaqLogo = styled.img`
    width: 120px;`


const Footer = () => {

    const currentYear: number = new Date().getFullYear();
    return (
        <Wrapper>

            <HWrapper>
                <NasdaqLogo src={nasdaqLogo} />
                <Text align={'center'} color={'#FFFFFF'} pt={4} pleft={10} fs={16}>{'Nasdaq is a stock market app. It should show all stocks listed in Nasdaq exchange with their ticker, name, and details.'}</Text>
            </HWrapper>

            <HWrapper>
                <Text align={'end'} color={'#FFFFFF'} pt={4} pleft={10} fs={16}>{'Farah Mahmoud'}</Text>

                <Text align={'end'} color={'#FFFFFF'} pt={4} pleft={10} fs={14}>{`\u00a9 ${currentYear} Nasdaq. All Rights Reserved.`}</Text>
            </HWrapper>

        </Wrapper>
    );
}
export default Footer;