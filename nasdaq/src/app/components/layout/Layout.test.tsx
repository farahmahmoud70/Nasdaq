import { cleanup, render, waitFor } from '@testing-library/react';
import { Layout } from './Layout';

afterEach(cleanup);

test('Layout styled component should be rendered', () => {
  const layoutElm = render(<Layout />);
  waitFor(() => {
    expect(layoutElm).toHaveStyleRule('height', '100vh');
  });
  expect(layoutElm).toMatchSnapshot();
});
