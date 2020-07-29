import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
// state 선언하지 않고 코드 Spliting 하기
const SplitMe = React.lazy(() => import("./SplitMe"));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        {/* Suspense는 리액트 내장 함수. 코드 스플리팅된 컴포넌트를 로딩하도록 발동시킬 수 있다.
        로딩이 끝나지 않았을 때 보여줄 UI를 설정할 수 있다. */}
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
