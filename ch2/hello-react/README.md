## 2장 JSX


### 2.1

모듈을 import하는 기능은 브라우저에 없다.
Node.js에서 지원하는 기능이며, 이를 브라우저에서도 사용하기 위해 번들러를 사용한다.
- 번들러 예) webpack, Parcel, browserify

리액트에서는 webpack을 주로 사용해(편의성과 확장성이 뛰어남) 불러온 모듈을 모두 합쳐서 하나의 파일을 생성한다.
이 프로젝트에서는 index.js가 번들러의 기능을 수행한다.
파일 불러오는 기능 웹팩의 로더(loader)가 담당한다
- 로더 예)css-loader, file-loader, babel-loader

원래 웹팩의 로더는 직접 설치하고 설정해야 하지만, 리액트에서는 create-react-app 에 포함된다.


### 2.2~3

JSX는 자바스크립트의 확장 문법.
브라우저가 실행되기 전에 코드가 번들링되는 과정에서 바벨을 사용해 JS 형태로 변환된다.
(바벨 : 자바스크립트의 컴파일러. 브라우저가 이해할 수 있는 문법으로 JS를 변환한다)
장점
	- 보기 쉽고 익숙하다
	- html 태그 뿐 아니라 컴포넌트 역시 JSX 안에서 작성할 수 있어 활용도가 높다

ReactDOM.render : 컴포넌트를 페이지에 렌더링하는 역할

Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는
하나의 DOM 트리구조로 이루어져야 한다는 규칙이 있다
트리를 감쌀 때 <div> 또는 <Frangment>를 주로 사용한다 (후자는 <></>로 축약사용 가능하다)


### 2.4

const : ES6에서 새로 도입. 상수 선언 / scope가 블록 단위
let : 동적인 값을 담을 수 있는 변수를 선언 / scope가 블록 단위
var  : ES6 이전에 썼던 키워드 / scope가 함수 단위

조건부 렌더링 :
JSX 내부의 자바스크립트 표현식에서 if문을 사용할 수 없다
조건부 렌더링 필요시 JSX 밖에서 if문 사용해 사전에 값 설정, 또는
{ } 안에 조건부 연산자(= 삼항연산자)를 사용한다.
조건을 만족할 경우에만 렌더링시 && 연산자를 사용할 수 있다

undefined를 렌더링 해서는 안된다. 부득이한 경우 || 연산자를 사용한다

스타일은 문자열이 아닌 객체 형태로, 스타일 이름은 bar 대신 camelCase로 적어야 한다
class 사용시 className으로 표기한다
