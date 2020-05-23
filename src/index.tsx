import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { CookiesProvider } from 'react-cookie';

import configureStore from '@store/index';
import Search from '@components/Search/Search';

import './index.css';

// Main style file
import '@styles/index.scss';

export const { store, history } = configureStore();

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CookiesProvider>
        <section className="app">
          <Search />
        </section>
      </CookiesProvider>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
