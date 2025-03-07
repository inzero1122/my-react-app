import './App.css';
import { useState } from "react";

function App() {


  /* 숫자 상태 */
  const [count, setCount] = useState(1);

  /* 텍스트 상태 */
  const [text, setText] = useState('안녕하세요.');

  /* 배열 상태 */
  const [countQ, setCount02] = useState(0);
  const [items, setItems] = useState(['뭘까요?','정답입니다!','오답입니다..ㅠ']);

  return (
    <div className="wrap">
      <h1>useState로 상태 변경하기</h1>
      <section>
        <h2>숫자 상태</h2>
        <button onClick={() => setCount(count * 2)}>BUTTON</button>
        <button onClick={() => setCount(1)}>RESET</button>
        <div className="text">
          버튼을 클릭하면 2배가 됩니다 ➡️ {count}
        </div>
      </section>

      <section>
        <h2>텍스트 상태</h2>
        <button onClick={() => setText('안녕히 계세요.')}>BUTTON</button>
        <button onClick={() => setText('안녕하세요.')}>RESET</button>
        <div className="text">
          버튼을 클릭하면 바뀝니다. ➡️ {text}
        </div>
      </section>

      <section>
        <h2>배열 상태</h2>
        <h3>예제. 1번과 2번 선택에 따라 다른 배열 나오게 하기</h3>

        <h4>알을 낳는 포유류는 어떤 동물일까요??</h4>
        <button onClick={() => setCount02(1)}>오리너구리</button>
        <button onClick={() => setCount02(2)}>개미핥기</button>

        <div className='text point'>
          {items[countQ]}
        </div>
      </section>
    </div>
  )
}

export default App;