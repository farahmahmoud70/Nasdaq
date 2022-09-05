// libs
import styled from 'styled-components';

// Ui & components
import Text from 'app/components/common/text/Text';
import nasdaqLogo from 'app/style/images/nasdaq.png';

const Wrapper = styled.footer`
    width: 100%;
    height:auto;
    background-color: #304269;
    border-top:1px solid gray;
    display flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 8px;
`;

const HWrapper = styled.div`
    width: 100%;
    height:auto;
    display flex;
    flex-direction:column;
    justify-content: center;
    align-items: space-between;
    padding: 8px 0px;
`;

const NasdaqLogo = styled.img`
  width: 120px;
  margin-left: 12px;
`;

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <Wrapper data-testid={'footer-wrapper'}>
      <HWrapper data-testid={'footer-Hwrapper'}>
        <NasdaqLogo
          src={nasdaqLogo}
          data-testid={'footer-logo'}
          id={'footer-logo'}
          title={'footer-logo'}
          alt={'footer-logo'}
        />
        <Text
          align={'center'}
          color={'#FFFFFF'}
          pt={4}
          pleft={0}
          fs={14}
          dataTestID={'footer-description'}
        >
          {
            'Nasdaq is a stock market app. It should show all stocks listed in Nasdaq exchange with their ticker, name, and details.'
          }
        </Text>
      </HWrapper>

      <HWrapper>
        <Text align={'end'} color={'#FFFFFF'} pt={4} pleft={10} fs={14}>
          {'Farah Mahmoud'}
        </Text>

        <Text
          align={'end'}
          color={'#FFFFFF'}
          pt={4}
          pleft={10}
          fs={14}
          dataTestID={'footer-copyrights'}
        >{`\u00a9 ${currentYear} Nasdaq. All Rights Reserved.`}</Text>
      </HWrapper>
    </Wrapper>
  );
};
export default Footer;
