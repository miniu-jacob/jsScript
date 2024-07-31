### 리액트 라우터
---

src 디렉토리 안에 page를 만들고 아래와 같은 파일들을 만들었다. 
- Homepage.js 
- About.js
---
리액트 스니펫 (React Arrow Function Export Component ) 을 만든다. 
> rafce
---
>사실상 컴포넌트와 같기 때문에 App.js 에서 import 로 가져온다. 
```javascript
import Homepage from './page/Homepage';
import About from './page/About';
``` 
--- 
`이제 <Home />, <About /> 을 사용할 수 있다.` 

---
실제 App.js 에서 실행을 시켜 보면 두개의 페이지 각각 내용들이 모두 출력되는 것을 확인할 수 있다. 
```javascript
import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';

function App() {
  return (
    <div>
      <Homepage />
      <About />
    </div>
  );
}
export default App;
```
---
따라서 리액트 라우터라는 라이브러리가 필요하다.
---

Routes, Route, Link, navigate();
RestFul route 