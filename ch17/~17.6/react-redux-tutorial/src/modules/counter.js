import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 => 추후 이 함수를 다른 파일에서 불러와 사용할 수 있음
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// counter 모듈의 초기 상태
const initialState = {
  number: 0,
};

// 리듀서 함수
const counter = handleActions(
  {
    // 각 액션에 대한 업데이트 함수
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  // 초기 상태
  initialState,
);
export default counter;
