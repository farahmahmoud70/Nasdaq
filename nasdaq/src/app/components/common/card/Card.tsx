// libs
import styled from 'styled-components';

interface CardInterface {
    stock: { ticker: string, fullName: string},
    onCardClick: (ticker: string) => void; 
}

const CardContentWrapper = styled.div`
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid #91BED4;
border-radius: 4px;
box-shadow: 0px 1px 3px #D9E8F5;
`

const StockInfoWrapper = styled.div`
width: 100%;
height: 75%;
display: flex;
flex-direction: column;
justify-content: space-around;
border-bottom: 1px solid #D9E8F5;
box-shadow: 0px 3px 2px -2px #91bed4;
padding:16px;
`

const ShowDetailsBtnWrapper = styled.div`
width: 100%;
height: 25%;
text-align: left;
display: flex;
align-items: center;
justify-content: flex-end;
padding:0px 10px ;
`

const ShowDetailsBtn = styled.button`
background: transparent;
    border: none;
    color: #F26101;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
        color: #304269;
    }
`

const TitleWrapper = styled.div`
font-size: 16px;
    font-weight: bold;
    color: #80a1cc;
`

const ContentWrapper = styled.div`
color: #304269;
font-size: 12px;
margin-top:4px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`


const Card = ({ stock, onCardClick }: CardInterface, ) => {

    const onShowDetailsClick = () => {
        onCardClick?.(stock.ticker)
    }
    return (
            <CardContentWrapper>
                <StockInfoWrapper>
                    <div>

                        <TitleWrapper>{'Thicker'}</TitleWrapper><ContentWrapper title={stock.ticker}>{stock.ticker}</ContentWrapper>
                    </div>

                    <div>

                        <TitleWrapper>{'Full Name'}</TitleWrapper><ContentWrapper title={stock.fullName}>{stock.fullName}</ContentWrapper>
                    </div>

                </StockInfoWrapper>

                <ShowDetailsBtnWrapper>
                    <ShowDetailsBtn onClick={onShowDetailsClick}>
                        {'Show more details..'}
                    </ShowDetailsBtn>
                </ShowDetailsBtnWrapper>

            </CardContentWrapper>
    );
}
export default Card;