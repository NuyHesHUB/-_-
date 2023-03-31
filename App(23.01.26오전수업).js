import './App.css';
import {useEffect, useState} from "react"


function App(){
  //화면에 첫 렌더링(Mount), 재 렌더링(Update), 화면에서 사라질때 (Unmount)
  //Dependency, clean up
  const [count, setCount] = useState(1)
  const [input, setInput] = useState("")
  //리턴문과 펑션사이에는 화살표함수로 써준다.
  const clickUpdate = ()=>{
    setCount(count+1)
  }
  const inputUpdate = (e)=>{
    //console.log(e);
    setInput(e.target.value)
  }

  //계속 칠 때 마다 렌더링이 일어나고
  /* useEffect(()=>{
    console.log('렌더링 테스트');
  }) */
  
  //렌더링이 일어나지 않게 하려면 ,[] 를 넣는다
  
  //1. count 만 렌더링이 되게
  /* useEffect(()=>{
    console.log('렌더링 테스트');
  },[count]) */

  //2. input 만 렌더링이 되게
  /* useEffect(()=>{
    console.log('렌더링 테스트');
  },[input]) */

  //3. 렌더링 전부 끄기 ['비워두기']
  useEffect(()=>{
    console.log('렌더링 테스트');
  },[])


  return(
    <div>
      <button onClick={clickUpdate} className="btn">Update</button>
      <span>count : {count} </span>
      <input type="text" value={input} onChange={inputUpdate}></input>
      <span>{input}</span>
    </div>
  );

}

export default App;