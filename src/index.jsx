import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Routes from './Routes'

ReactDOM.render(
  <BrowserRouter>
    <Routes />
    <GlobalStyle />
  </BrowserRouter>,
  document.getElementById('root')
);