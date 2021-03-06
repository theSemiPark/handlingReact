import React, {useState} from 'react';
import Counter from './Counter';
import Info from './Info';
 
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Counter />
      <div>
      <button
      onClick={() => {
        setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
    {visible && <Info />}
    </div>
    </>
  );
};
export default App;