import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// 리액트 컴포넌트에서 스토어를 사용할 수 있도록 감싼다. store를 props로 전달해야
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
