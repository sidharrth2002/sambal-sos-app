import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './service-worker';
import { ChakraProvider } from '@chakra-ui/react';

const history = createHistory()

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Router history={history}>
          <ChakraProvider>
              <App />
          </ChakraProvider>
        </Router>
      </Provider>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();