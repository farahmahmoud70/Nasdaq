import { cleanup, screen, waitFor } from '@testing-library/react';
import App from 'App';
import { config } from 'app/overmind';
import { createOvermindMock } from 'overmind';
import { Provider } from 'overmind-react';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

beforeEach(() => {
  const overmind = createOvermindMock(config);
  <Provider value={overmind}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>;
});

describe('Explore page', () => {
  it('shows correct snapshot for the explore wrapper styled component', () => {
    const exploreWrapperElm = screen.findByTestId('explore-page');
    expect(exploreWrapperElm).toMatchSnapshot();
  });

  it('shows correct snapshot for the explore title styled component', async () => {
    const exploreTitleElm = screen.findByTestId('explore-title');
    waitFor(() => expect(exploreTitleElm).toHaveStyleRule('width', '100%'));
    expect(exploreTitleElm).toMatchSnapshot();
  });

  it('shows correct loading state before content loads', async () => {
    const exploreLoaderElm = screen.findByTestId('loader');
    waitFor(() => {
      expect(exploreLoaderElm).toBeInTheDocument();
    });
  });
});
