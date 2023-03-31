import './App.css';
import {useState} from "react"
import Timer from "./component/Timer";


function App(){
  const [showTimer, setShowTimer]=useState(false)
  return(
    <div className='App'>

      {showTimer && <Timer/>}
      <button className='btn' onClick={()=>{setShowTimer(!showTimer)}}>Toggle</button>{/* useState(false) 가 false라서 온클릭하면 반대 즉 true가 되므로 TimersetShowTimer(!showTimer) 작동*/}
    </div>
  );

}

export default App; 