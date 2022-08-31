import styled from 'styled-components';
import { useAppState } from '../../../store/index'
import Card from '../../common/card/Card';

const ContentWrapper = styled.div`
    height:100%;
    width:100%;
    display: flex;
    flex-wrap: wrap; 
`

const ExploreGrid = () => {
    const stocks = useAppState().stocks;


    return (
        <ContentWrapper>
            {
                stocks.stocks.map((stock: { ticker: string, fullName: string }, index: number) => {
                    console.log(stock.fullName)
                    return <Card key={`${stock.ticker}_${index}`} stock={stock} />
                })
            }
        </ContentWrapper>
    );
}
export default ExploreGrid;