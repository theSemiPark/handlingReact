## 18장 리덕스 미들웨어를 통한 비동기 작업 관리

리액트 프로젝트에서 API서버를 연동할 때는 API 요청 등 비동기 작업을 관리해야 한다.

리덕스 미들웨어 : 액션과 리듀서의 중간자. 액션을 디스패치했을 때 리듀서에 앞서 사전에 지정된 작업들을 처리한다.
