import './App.css';
import {useState, useRef} from 'react';

function App(){
  /* const ref=useRef(0);
  console.log(ref); */
  const [count, setCount]=useState(0);/* 안에 콜백함수 */
  const countRef=useRef(0);
  console.log(countRef);
  console.log('렌더링');
  const increaseCountState = ()=>{
    setCount(count+1)
  }
  const increaseCountRef = ()=>{
    countRef.current=countRef.current+1;
  }
 return(
  <div>
    <p className='state'> State :{count}</p>
    <p className='state'> Ref :{countRef.current}</p>
    <button className='btn' onClick={increaseCountState}>State up</button>{/* 1씩 증가하는 카운트를 만든다. */}
    <button className='btn' onClick={increaseCountRef}>Ref up</button>{/* 1씩 증가하는 카운트를 만든다. (렌더링이 일어나지 않는다 재 렌더링을 해야 그때서야 나타난다*/}
  </div>
 )
} 

export default App;