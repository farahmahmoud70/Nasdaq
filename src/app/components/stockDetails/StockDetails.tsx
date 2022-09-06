// libs
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// overmind
import { useAppState } from 'app/overmind';

// UI & components
import nasdaqLogo from 'app/style/images/nasdaq.png';
import backArrow from 'app/style/images/backArrow.png';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const BackBtnWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background-color: #304269;
  padding: 15px 5px;
  align-items: center;
`;

const StockDetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const SecWrapper = styled.div<{ flexBasis?: string | undefined }>`
  flex: ${(props) => `1 1 ${props.flexBasis ? props.flexBasis : 'auto'} `};
  height: auto;
  padding: 12px 40px 0px;
  border-left: 1px solid #d9e8f5;
  margin: 8px 0px;
`;

const LogoBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  max-height: 50%;
  max-width: 80%;
  padding: 10px;
  border: 1px solid #d9e8f5;
  border-radius: 4px;
  margin-bottom: 28px;
  background-color: #304269;
`;

const LogoWrapper = styled.img<{
  maxWidth?: string | null;
}>`
  width: auto;
  height: auto;
  max-width: ${(props) => props.maxWidth || '40%'};
  max-height: 50%;
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 28px;
  > div {
    margin: 0px 0px 10px 10px;

    [dir='rtl'] & {
      margin: 0px 10px 10px 0px;
    }
  }
`;

const TitleWrapper = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #304269;
  margin: 0px 10px 0px 0px;
  [dir='rtl'] & {
    margin: 0px 0px 0px 10px;
  }
`;

const ContentWrapper = styled.span<{ errorColor?: string | undefined }>`
  color: ${(props) => (props.errorColor ? props.errorColor : '#80a1cc')};
  font-size: 14px;
  margin-top: 4px;
`;

const DescriptionWrapper = styled.div`
  color: #80a1cc;
  font-size: 14px;
  margin-top: 4px;
  max-height: 140px;
  overflow-y: auto;
  padding: 4px 0px;
`;

const SecTitleWrapper = styled.h2`
  color: #f26101;
  margin-bottom: 10px;
`;

const BackBtnTitleWrapper = styled.span`
  color: #ffffff;
  padding: 0px 0px 0px 8px;
`;

const BackBtn = styled.img`
  cursor: pointer;
`;

const StockDetails = () => {
  const stockDetailsState = useAppState().stockDetails.stockDetails;

  const navigate = useNavigate();

  const onBackBtnClick = () => {
    navigate(-1);
  };
  const logoInfo = stockDetailsState.branding?.logo_url
    ? stockDetailsState.ticker
    : 'nasdaq-logo';

  const hasAdditionalInfo =
    !stockDetailsState.homepage_url &&
    !stockDetailsState.sic_description &&
    !stockDetailsState.description;

  return (
    <Wrapper data-testid={'stock-details-wrapper'}>
      <BackBtnWrapper data-testid={'stock-back-btn-wrapper'}>
        <BackBtn src={backArrow} onClick={onBackBtnClick} />
        <BackBtnTitleWrapper>
          {'Continue Exploring, press the back btn'}
        </BackBtnTitleWrapper>
      </BackBtnWrapper>
      <StockDetailsWrapper>
        <SecWrapper>
          <LogoBoxWrapper>
            <LogoWrapper
              src={stockDetailsState.branding?.logo_url || nasdaqLogo}
              id={logoInfo}
              alt={logoInfo}
              title={logoInfo}
              maxWidth={stockDetailsState.branding?.logo_url ? null : '250px'}
              data-testid={'stock-logo'}
            />
          </LogoBoxWrapper>
          <InfoWrapper data-testid={'stock-info-wrapper'}>
            <SecTitleWrapper>{'Stock Info'}</SecTitleWrapper>
            <div>
              <TitleWrapper>{'Ticker:'}</TitleWrapper>
              <ContentWrapper>{stockDetailsState.ticker}</ContentWrapper>
            </div>
            <div>
              <TitleWrapper>{'Name:'}</TitleWrapper>
              <ContentWrapper>{stockDetailsState.name}</ContentWrapper>
            </div>
          </InfoWrapper>
        </SecWrapper>
        <SecWrapper flexBasis="50%">
          <InfoWrapper
            data-testid={'stock-statistics-wrapper'}
            data-error={
              stockDetailsState.tickerDailyDetailsError ? 'error' : ''
            }
          >
            <SecTitleWrapper>{'Statistics'}</SecTitleWrapper>
            {stockDetailsState.tickerDailyDetailsError ? (
              <div>
                <ContentWrapper
                  errorColor={'#B22222'}
                  data-testid={'statistics-error-wrapper'}
                >
                  {
                    'There is no available statistics about the stock for the previous day'
                  }
                </ContentWrapper>
              </div>
            ) : (
              <>
                <div>
                  <TitleWrapper>{'Close:'}</TitleWrapper>
                  <ContentWrapper>{stockDetailsState.close}</ContentWrapper>
                </div>
                <div>
                  <TitleWrapper>{'Open:'}</TitleWrapper>
                  <ContentWrapper>{stockDetailsState.open}</ContentWrapper>
                </div>
                <div>
                  <TitleWrapper>{'High:'}</TitleWrapper>
                  <ContentWrapper>{stockDetailsState.high}</ContentWrapper>
                </div>

                <div>
                  <TitleWrapper>{'Low:'}</TitleWrapper>
                  <ContentWrapper>{stockDetailsState.low}</ContentWrapper>
                </div>

                <div>
                  <TitleWrapper>{'Volume:'}</TitleWrapper>
                  <ContentWrapper>{stockDetailsState.volume}</ContentWrapper>
                </div>
              </>
            )}
          </InfoWrapper>

          <InfoWrapper
            data-testid={'stock-additional-info-wrapper'}
            data-error={
              hasAdditionalInfo ? 'additional-info-error-wrapper' : ''
            }
          >
            <SecTitleWrapper>{'Additional Info..'}</SecTitleWrapper>

            {hasAdditionalInfo ? (
              <div>
                <ContentWrapper errorColor={'#B22222'}>
                  {'There is no available additional Info about the stock'}
                </ContentWrapper>
              </div>
            ) : (
              <>
                <div>
                  <TitleWrapper>{'Company Website:'}</TitleWrapper>
                  <ContentWrapper>
                    <a
                      href={stockDetailsState.homepage_url}
                      target="_blank"
                      rel="noreferrer"
                      title={stockDetailsState.homepage_url}
                    >
                      {stockDetailsState.homepage_url}
                    </a>
                  </ContentWrapper>
                </div>
                <div>
                  <TitleWrapper>{'Industry:'}</TitleWrapper>
                  <ContentWrapper>
                    {stockDetailsState.sic_description}
                  </ContentWrapper>
                </div>
                <div>
                  <TitleWrapper>{'Description:'}</TitleWrapper>
                  <DescriptionWrapper>
                    {stockDetailsState.description}
                  </DescriptionWrapper>
                </div>
              </>
            )}
          </InfoWrapper>
        </SecWrapper>
      </StockDetailsWrapper>
    </Wrapper>
  );
};
export default StockDetails;
