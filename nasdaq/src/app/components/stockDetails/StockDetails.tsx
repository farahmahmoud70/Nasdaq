// libs
import styled from 'styled-components';

// overmind
import { useAppState } from 'app/store';

// UI & components
import nasdaqLogo from 'app/style/images/nasdaq.png'

const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
`;

const BackBtnWrapper = styled.div`
width:100%;
height:auto;
display:flex;
background-color:#304269;
padding: 15px 5px;
`;

const StockDetailsWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-wrap: wrap;
overflow-y: auto;
`;

const SecWrapper = styled.div`
flex: 1 1 auto;
height:auto;
padding: 12px 40px 0px;
    border-left: 1px solid #D9E8F5;
    margin: 8px 0px;
`

const LogoBoxWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:auto;
height:auto;
max-height:50%;
max-width:80%;
padding: 10px;
border: 1px solid #D9E8F5;
border-radius: 4px;
margin-bottom: 28px;
background-color: #304269;
`

const LogoWrapper = styled.img`
width:auto;
height:auto;
max-width:250px;
`

const InfoWrapper = styled.div`
display: flex;
    width: 100%;
    flex-direction: column;
   margin-bottom: 28px;
   >div{
margin:0px 0px 10px 10px;

[dir='rtl'] & {
    margin: 0px 10px 10px 0px;
  }
}
`

const TitleWrapper = styled.span`
font-size: 14px;
font-weight: bold;
color: #304269;
margin: 0px 10px 0px 0px;
[dir='rtl'] & {
    margin: 0px 0px 0px 10px;
  }
`

const ContentWrapper = styled.span<{ errorColor?: string | undefined }>`
color: ${props => props.errorColor ? props.errorColor : '#80a1cc'};
font-size: 14px;
margin-top: 4px;
`

const DescriptionWrapper = styled.div`
color: #80a1cc;
font-size: 14px;
margin-top: 4px;
max-height: 140px;
overflow-y: auto;
padding: 4px 0px;
`

const SecTitleWrapper = styled.h2`
color: #F26101;
margin-bottom: 10px;
`

const StockDetails = () => {
    const stockDetailsState = useAppState().stockDetails.stockDetails;
    return (
        <Wrapper>
            <BackBtnWrapper>
                <button>{'back'}</button>
                <span>{'Continue Exploring, press the back btn'}</span>

            </BackBtnWrapper>
            <StockDetailsWrapper>
                <SecWrapper>
                    <LogoBoxWrapper>

                    <LogoWrapper src={stockDetailsState.branding?.logo_url || nasdaqLogo} />
                    </LogoBoxWrapper>
                    <InfoWrapper>
                        <SecTitleWrapper>{'Stock Info'}</SecTitleWrapper>
                        <div>
                            <TitleWrapper>
                                {'name:'}
                            </TitleWrapper>
                            <ContentWrapper>
                                {stockDetailsState.name}
                            </ContentWrapper>
                        </div>
                        <div>
                            <TitleWrapper>
                                {'ticker:'}
                            </TitleWrapper>
                            <ContentWrapper>
                                {stockDetailsState.ticker}
                            </ContentWrapper>
                        </div>

                    </InfoWrapper>
                </SecWrapper>
                <SecWrapper>

                    <InfoWrapper>
                        <SecTitleWrapper>{'Statistics'}</SecTitleWrapper>
                        {stockDetailsState.tickerDailyDetailsError ? <div>
                            <ContentWrapper errorColor={'#B22222'}>
                                {'There is no available statistics about the stock for the previous day'}
                            </ContentWrapper>

                        </div> : <>
                            <div>
                                <TitleWrapper>
                                    {'Close:'}
                                </TitleWrapper>
                                <ContentWrapper>
                                    {stockDetailsState.close}
                                </ContentWrapper>
                            </div>
                            <div>
                                <TitleWrapper>
                                    {'Open:'}
                                </TitleWrapper>
                                <ContentWrapper>
                                    {stockDetailsState.open}
                                </ContentWrapper>
                            </div>
                            <div>
                                <TitleWrapper>
                                    {'High:'}
                                </TitleWrapper>
                                <ContentWrapper>
                                    {stockDetailsState.high}
                                </ContentWrapper>
                            </div>

                            <div>
                                <TitleWrapper>
                                    {'Low:'}
                                </TitleWrapper>
                                <ContentWrapper>
                                    {stockDetailsState.low}
                                </ContentWrapper>
                            </div>


                            <div>
                                <TitleWrapper>
                                    {'Volume:'}
                                </TitleWrapper>
                                <ContentWrapper>
                                    {stockDetailsState.volume}
                                </ContentWrapper>
                            </div>
                        </>}


                    </InfoWrapper>

                    <InfoWrapper>
                        <SecTitleWrapper>{'Additional Info..'}</SecTitleWrapper>

                        {(!stockDetailsState.home_url || !stockDetailsState.sic_description || !stockDetailsState.description) ?
                            <div>
                                <ContentWrapper errorColor={'#B22222'}>
                                    {'There is no available additional Info about the stock'}
                                </ContentWrapper>
                            </div> :

                            <>

                                <TitleWrapper>
                                    {'Company Website:'}
                                </TitleWrapper>
                                <ContentWrapper>
                                    {stockDetailsState.home_url}
                                </ContentWrapper>
                                <div>
                                    <TitleWrapper>
                                        {'Industry:'}
                                    </TitleWrapper>
                                    <ContentWrapper>
                                        {stockDetailsState.sic_description}
                                    </ContentWrapper>
                                </div><div>
                                    <TitleWrapper>
                                        {'Description:'}
                                    </TitleWrapper>
                                    <DescriptionWrapper>
                                        {stockDetailsState.description}
                                    </DescriptionWrapper>
                                </div></>

                        }

                    </InfoWrapper>
                </SecWrapper>

            </StockDetailsWrapper>

        </Wrapper>
    );
}
export default StockDetails;