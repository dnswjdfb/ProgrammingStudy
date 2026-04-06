import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function CounterApp() {
  const [count, setCount] = useState(0)//상태 . 기본값:0.count:이전 또는 현재 값, setCount: count 값 변경 함수
  //count 값을 변경할 때 setCount()를 사용해서 변경해야 함!! => react가 count 상태변화를 눈치 챔

  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
    <button onClick={()=>setCount(Math.min(count + 1, 10))}>max(10)</button>
    <button onClick={() => setCount(0)}>reset</button>
    {/* <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button> */}
    </>
  )
}

export default CounterApp
