import React, { Component } from "react";

class Counter extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }*/ // constructor 메소드를 선언한 state 초기값 지정

  state = {
    number: 0,
    fixedNumber: 0,
  }; // state 초기값 지정의 또 다른 방식

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={() => {
            //this.setState를 사용해 새로운 값을 넣을 수 있음

            //setState를 사용해 값을 업데이트하고 난 다음,
            //특정 작업을 처리하고 싶을 때는 setState의 두 번재 파라미터로 callback 함수 등록
            this.setState({ number: number + 1 }, () => {
              console.log("방금 setState가 호출되었습니다.");
              console.log(this.state);
            });
            //this.setState({ number: this.state.number + 1 });
            //이렇게 두 줄 써도 값 1밖에 올라가지 않는다.

            //this.setState를 사용해 state 값을 업데이트 할 때는 비동기처리
            /*
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));*/
            // 이렇게 쓰면 2씩 더해진다
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
