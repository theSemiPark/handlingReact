import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  //category 뒤의 물음표는 cagegory값이 선택적이라는 뜻.
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
