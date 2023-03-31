import './App.css';
/* import {useState} from "react" */
/* 다시 */
import {useState} from "react"

function App() {/* useState를 쓸려면 5번줄 처럼 쓴다. */
  /* const [time, setTime] = useState(1) //초기값 선언 useState(문자,숫자 상관x)
  const clickEvent = () => {
    //setTime(time+1); 
    let newTime;
    if(time >= 12){
      newTime=1;
    }
    else{
      newTime=time+1;
    }
    setTime(newTime)
  }
  console.log('업데이트~~~'); */

  /* 다시 */
  /* const[names, setNames] = useState(['주세현','고가연']); *//* 시작할때 아무것도 없고싶으면 ([]) */
  const heavyWork = () => {/* 만약 초기화값에 무거운게 있다고 하면 */
    console.log('나는 무거운 작업이야'); /* 인풋에 입력하면 계속 실행이 된다.. 계속 이러면 무거워짐 이럴때는  */
    return['주세현','고가연'];
  }
  
  
  /* const[names, setNames] = useState(heavyWork()); *//* 시작할때 아무것도 없고싶으면 ([]) */
  /* 아래와 같이 무거운 작업을 콜백함수로 실행시킨다. */
  const[names, setNames] = useState(()=>{
    return heavyWork(); /* 한번만 하고 끝남 */
  });
  /* 초기값으로 무거운게 들어오면 제 렌더링을 하지 않게 하기 위함임!!! */
  
  const[input, setInput] = useState("");
  /* 35번 줄 onchange 함수를 만들어준다 */
  const inputChange = (e) => {
    setInput(e.target.value);
  }/* 이렇게 쓰면 입력이 됨 */
  const upload = () => {
    /* setNames(['주세현','고가연','정지현']) */
    setNames((prevState)=>{ /* prevState 이전 선택값 */
      //console.log('이전 state', prevState); //이전이 뜨는지 확인
      return[input, ...prevState];
    })
  }
  //console.log(input);/* 만약 무거운 내용들이 있어서 계속 input에 입력값이 계속 나타난다면 느려질거임.. 이 콘솔을 끄더라도 보이지 않을뿐.. 콜백함수를 써야한다*/

  return (
    <div className="form">
      {/* <span>현재시각: {time}시</span> */}{/* 그럼 여기다가 {time} */}
      {/* <button className="btn" onClick={clickEvent}>Update</button> */}
      
      {/* 다시 */}
      <input type="text" value={input} onChange={inputChange}/>{/* value={input}을 쓰면 입력이 안됨 const input, setInput 변수에 setInput이 설정이 안돼서 그럼 onchange를 쓰라는 경고가 뜸 */}
      <button className='btn' onClick={upload}>UpLoad</button>
      {
        names.map((name, idx)=>{
          return <p key={idx}>{name}</p> /* 이렇게 쓰면 키값을 넣어줘야함 key={idx} 를 넣어주면 사라짐*/
        })
      } 
    </div>
  );
}

export default App;


/* ReactDOM.render(
  <App/>,
  document.getElementById('root')
) */
