import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './demoRouter/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import Papi from './demoContext/Papi';
import { ThemeContextProvider } from './demoContext/ThemeContext';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <ThemeContextProvider>
//     <Papi />
//   </ThemeContextProvider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
