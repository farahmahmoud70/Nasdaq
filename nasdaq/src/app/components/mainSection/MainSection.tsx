import styled from 'styled-components';
import Explore from '../explore/Explore';

const ContentWrapper = styled.div`
    height:100%;
    width:100%;
    overflow:hidden;
`
const MainSection = () => {
    return (
        <ContentWrapper>
            <Explore />
        </ContentWrapper>
    );
}
export default MainSection;