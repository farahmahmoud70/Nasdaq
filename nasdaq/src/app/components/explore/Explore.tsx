import styled from 'styled-components';
import ExploreGrid from './exploreGrid/ExploreGrid';

const Wrapper = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items:center;
overflow-y: hidden;
position :relative;
}
`

const GridTitleWrapper = styled.div`
font-size: xx-large;
font-weight:bold;
color:#F26101;
width: 100%;
text-align: left;
`

const ExploreGridWrapper = styled.div`
width:100%;
height: calc(100% - 88px);
top: 88px;
position: relative;
`

const ExploreHeaderWrapper = styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-around;
align-items:center;

`

const ExploreFixedWrapper = styled.div`
width:100%;
height:auto;
padding:20px;
position :fixed;
z-index: 2;
background: #ffffff;
border-bottom:1px solid #304269;
box-shadow: 0px 1px 3px #91bed4;
`

const Explore = () => {

    return (
        <Wrapper>
            <ExploreFixedWrapper>

                <ExploreHeaderWrapper>
                    <GridTitleWrapper>{'Stocks Market'}</GridTitleWrapper>

                </ExploreHeaderWrapper>
            </ExploreFixedWrapper>

            <ExploreGridWrapper>
                <ExploreGrid />
            </ExploreGridWrapper>
        </Wrapper>
    );
}
export default Explore;