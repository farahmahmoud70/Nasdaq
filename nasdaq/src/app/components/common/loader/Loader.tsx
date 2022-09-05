// libs
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;

const LoaderWrapper = styled.img`
  width: 120px;
`;

interface LoaderInterface {
  loaderIcon: string;
  id: string;
  title: string;
  alt: string;
  dataTestID?: string;
}

const Loader = ({
  loaderIcon,
  id,
  title,
  alt,
  dataTestID,
}: LoaderInterface) => {
  return (
    <Wrapper>
      <LoaderWrapper
        src={loaderIcon}
        id={id}
        title={title}
        alt={alt}
        data-testid={dataTestID}
      ></LoaderWrapper>
    </Wrapper>
  );
};
export default Loader;
