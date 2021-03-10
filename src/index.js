import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import reportWebVitals from './reportWebVitals';
import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Open Sans:300,400,700'],
  },
});

dayjs.locale('ru');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
