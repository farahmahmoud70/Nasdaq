// libs
import ReactDOM from 'react-dom/client';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { BrowserRouter } from 'react-router-dom';

// overmind
import { config, devTool } from './app/overmind/index';

import reportWebVitals from './reportWebVitals';

// Components & UI
import App from './App';
import './index.css';
import React from 'react';

const overmind = createOvermind(config, devTool);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https:// bit.ly/CRA-vitals
reportWebVitals();
