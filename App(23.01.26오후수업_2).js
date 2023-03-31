import './App.css';
import React,{useState} from "react"
/* 여기서 다시 임포트 */
import Movie from './component/Movie'

function App(){
  const [movieTitle, setMovieTitle]=useState('');
  const [movieYear, setMovieYear]=useState('');
  const [movies, setMovies]=useState([
    {title:'아바타', year: 2023},
    {title:'쥬라기 월드', year: 2022},
    {title:'닥터 스트레인지', year: 2022}
  ]);
  /* 아래와 같이 배열 반복문 map 을 써서 넣는다 */
  const renderMovies= movies.map((movie)=>{
    return(
      
      <Movie movie={movie} key={movie.title}/>
      //이거도 잘라서 component > movie.js에 옮겨준다 
      //<div className='movie'>
        //<div className='movie-title'>{movie.title}</div>
        //<div className='movie-year'>{movie.year}</div>
      //</div> */}
      /* 그런뒤에 아래와 같이 작성 */
    )
  });
  const onSubmit=(e)=>{
    e.preventDefault();
    setMovies([
      ...movies,
      {
        title:movieTitle,
        year:movieYear
      }
    ]);
    setMovieTitle('');
    setMovieYear('');
  }
  return(
    <div className='App'>
      <h1>영화 list</h1>
      {/* <div className='movie'>
        <div className='movie-title'>{movies[0].title}</div>
        <div className='movie-year'>{movies[0].year}</div>
      </div> */}
      {/* 반복문을 위해 주석 */}
      {/* <div className='movie'>
        <div className='movie-title'>{movies[1].title}</div>
        <div className='movie-year'>{movies[1].year}</div>
      </div>
      <div className='movie'>
        <div className='movie-title'>{movies[2].title}</div>
        <div className='movie-year'>{movies[2].year}</div>
      </div> */}
      <form action="#" onSubmit={onSubmit}>
        <input type="text" placeholder='영화제목을 쓰세요' value={movieTitle} onChange={(e)=>{setMovieTitle(e.target.value)}}/>
        <input type="text" placeholder='개봉년도를 쓰세요' value={movieYear} onChange={(e)=>{setMovieYear(e.target.value)}}/>
        <button type='submit'>ADD</button>
      </form>
      {renderMovies}
      
    </div>
  );
} 

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class App extends Component {
render() {
   return (
    <div>


  
</div>
  
);
}
}


export default App;