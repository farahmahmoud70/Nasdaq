// libs
import styled from 'styled-components';

const TextStyle = styled.div<{
  bold?: boolean;
  color: string;
  align: string;
  pt: number;
  pleft: number;
  fs: number;
}>`
  ${(props) => (props.bold ? 'font-weight: bold' : null)};
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
  padding-top: ${(props) => props.pt}px;
  padding-left: ${(props) => props.pleft}px;
  font-size: ${(props) => props.fs}px;
`;

interface TextInterface {
  children?: any;
  bold?: boolean;
  color: string;
  align: string;
  pt: number;
  pleft: number;
  fs: number;
}

const Text = ({
  bold = false,
  color = 'black',
  align,
  pt,
  pleft,
  fs,
  children,
}: TextInterface) => {
  return (
    <TextStyle
      bold={bold}
      color={color}
      align={align}
      pt={pt}
      pleft={pleft}
      fs={fs}
    >
      {children}
    </TextStyle>
  );
};
export default Text;
