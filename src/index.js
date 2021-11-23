import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './app/configureStore';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import NavBar from './containers/NavBar'

const store = configureStore({checkout: { basket: {cap: 0, shoe: 0, tshirt: 0} }})
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <NavBar/>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
