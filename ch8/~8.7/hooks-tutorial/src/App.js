import React from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';
 
const App = () => {
  return (
    <>
      <Counter />
      <hr/>
      <Info/>
      <hr/>
      <Average/>
    </>
  );
};
export default App;