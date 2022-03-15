import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import "./assets/css/meanmenu.css"
import "./assets/css/normalize.css"
import "./assets/css/slick.css"
import "./assets/css/animate.min.css"
import "./assets/css/nice-select.css"
// import "./assets/css/jquery-ui.css"
// import "./assets/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/stylePD.css'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
