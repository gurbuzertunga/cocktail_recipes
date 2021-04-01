import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers';

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
