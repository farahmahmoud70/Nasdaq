import { cleanup, render } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

describe('Header', () => {
  const header = render(<Header />);

  it('shows correct snapshot for the header wrapper styled component', () => {
    const headerWrapperElm = header.findByTestId('header-wrapper');
    expect(headerWrapperElm).toMatchSnapshot();
  });

  it('shows correct snapshot for the header logo styled component', () => {
    const headerLogoElm = header.findByTestId('header-logo');
    expect(headerLogoElm).toMatchSnapshot();
  });
});
