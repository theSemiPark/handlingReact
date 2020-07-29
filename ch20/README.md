## 20장 서버 사이드 렌더링

클라이언트 사이드 렌더링 : UI 렌더링을 브라우저에서 모두 처리한다.
- 화면이 보이기 위해서는 자바스크립트를 실행해야 하므로, 실행 시간이 필요하다.

서버 사이드 렌더링 : UI를 서버에서 렌더링하며, 사용자가 html을 전달받을 때 그 내부에 렌더링 된 결과물이 보인다.

장점
> 검색 엔진이 우리가 만든 웹 애플리케이션의 페이지를 원활하게 수집할 수 있다.<br>
> 초기 렌더링 성능을 개선할 수 있다.

단점
> 브라우저가 해야 할 일을 서버가 대신 처리하는 것이므로 서버 리소스가 사용된다.<br>
> 프로젝트의 구조가 복잡해질 수 있다.