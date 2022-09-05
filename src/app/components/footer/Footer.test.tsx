import { cleanup, render, waitFor } from '@testing-library/react';
import Footer from './Footer';

afterEach(cleanup);

describe('Footer', () => {
  const footer = render(<Footer />);

  it('shows correct snapshot for the footer wrapper styled component', () => {
    const footerWrapperElm = footer.findByTestId('footer-wrapper');
    expect(footerWrapperElm).toMatchSnapshot();
  });

  it('shows correct snapshot for the footer Hwrapper styled component', async () => {
    const footerHWrapperElm = footer.findByTestId('footer-Hwrapper');
    waitFor(() => expect(footerHWrapperElm).toHaveStyleRule('height', 'auto'));
    expect(footerHWrapperElm).toMatchSnapshot();
  });

  it('shows correct snapshot for the footer logo styled component', async () => {
    const footerLogoElm = footer.findByTestId('footer-logo');
    waitFor(() => {
      expect(footerLogoElm).toHaveStyleRule('width', '120px');
      expect(footerLogoElm).toHaveStyleRule('margin-left', '12px');
    });

    expect(footerLogoElm).toMatchSnapshot();
  });

  it('shows correct footer description', async () => {
    const footerDescriptionElm = footer.findByTestId('footer-description');
    waitFor(() =>
      expect(footerDescriptionElm).toHaveTextContent(
        'Nasdaq is a stock market app. It should show all stocks listed in Nasdaq exchange with their ticker, name, and details.'
      )
    );
    expect(footerDescriptionElm).toMatchSnapshot();
  });

  it('shows correct footer copyrights', async () => {
    const footerDescriptionElm = footer.findByTestId('footer-copyrights');

    waitFor(() =>
      expect(footerDescriptionElm).toHaveTextContent(
        `\u00a9 ${new Date().getFullYear()} Nasdaq. All Rights Reserved.`
      )
    );
    expect(footerDescriptionElm).toMatchSnapshot();
  });
});
