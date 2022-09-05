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
  children: string;
  bold?: boolean;
  color: string;
  align: string;
  pt: number;
  pleft: number;
  fs: number;
  dataTestID?: string;
  id: string;
}

const Text = ({
  bold = false,
  color,
  align,
  pt,
  pleft,
  fs,
  children,
  dataTestID,
  id,
}: TextInterface) => {
  return (
    <TextStyle
      bold={bold}
      color={color}
      align={align}
      pt={pt}
      pleft={pleft}
      fs={fs}
      data-testid={dataTestID}
      id={id}
    >
      {children}
    </TextStyle>
  );
};
export default Text;
