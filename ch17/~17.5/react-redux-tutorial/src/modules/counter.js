// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 => 추후 이 함수를 다른 파일에서 불러와 사용할 수 있음
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// counter 모듈의 초기 상태
const initialState = {
  number: 0,
};

// 리듀서 함수
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
