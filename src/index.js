import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Test_page from './Test_page';
import './css/bootstrap.min.css';
import App2 from './App2';
import Test_page2 from './Test_page2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Test_page /> */}
    <App2 />
    {/* <Test_page2 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

