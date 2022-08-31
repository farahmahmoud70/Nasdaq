import { useEffect } from 'react';
import styled from 'styled-components';
import { useActions } from '../../store';
import ExploreGrid from './exploreGrid/ExploreGrid';

const Wrapper = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items:center;
padding: 20px 60px;
overflow-y: auto;
}
`

const GridTitleWrapper = styled.div`
font-size: xx-large;
font-weight:bold;
color:#F26101;
margin-bottom: 20px;
width: 100%;
text-align: center;
`

const Explore = () => {
    const stockActions = useActions().stocks;
    useEffect(() => { stockActions.getStocks() }, []);

    return (
        <Wrapper>
            <GridTitleWrapper>{'Stocks Market'}</GridTitleWrapper>
            <ExploreGrid />
        </Wrapper>
    );
}
export default Explore;