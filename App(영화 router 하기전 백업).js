import './App.css';
import React,{useState, useRef, useEffect} from "react"
/* 여기서 다시 임포트 */
/* import Movie from './component/Movie' */
/* import MovieForm from './component/MovieForm'; *//* 23.01.27 MovieForm Component */
import Navbar from './component/Navbar';/* 23.01.27 Navbar Component */
import {Routes} from "react-router-dom";
import Home from "./pages/Home"

function App(){
  /* const [movieTitle, setMovieTitle]=useState('');
  const [movieYear, setMovieYear]=useState(''); */
  const [movies, setMovies]=useState([
    /* {title:'아바타', year: 2023},
    {title:'쥬라기 월드', year: 2022},
    {title:'닥터 스트레인지', year: 2022} */
  ]);
  const addMovie=(movie)=>{
    setMovies([
      ...movies,
      movie
    ])
  }
  const removeMovie=(id) => {
    setMovies(movies.filter(movie => {
      return movie.id !==id;
    }))
  }
  /* 23.01.27 userRef */
  /* const inputRef=useRef(); */
  /* useEffect(()=>{
    inputRef.current.focus()
  },[]) */
  /* 아래와 같이 배열 반복문 map 을 써서 넣는다 */
  const renderMovies= movies.length ? movies.map((movie)=>{
    return(
      
      <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
      //이거도 잘라서 component > movie.js에 옮겨준다 
      //<div className='movie'>
        //<div className='movie-title'>{movie.title}</div>
        //<div className='movie-year'>{movie.year}</div>
      //</div> */}
      /* 그런뒤에 아래와 같이 작성 */
    )
  }) : '영화를 추가해주세요'
  /* const onSubmit=(e)=>{
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
    inputRef.current.focus()
  } */
  return(
    <div className='App'>
      <Navbar/>
      <div className='pd'>
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
      {/* 23.01.27 component > MovieForm.js 로 옮겨서 컴포넌트화 해보기 */}
      {/* <form action="#" onSubmit={onSubmit}>
        <input type="text" placeholder='영화제목을 쓰세요' value={movieTitle} onChange={(e)=>{setMovieTitle(e.target.value)}} ref={inputRef}/>
        <input type="text" placeholder='개봉년도를 쓰세요' value={movieYear} onChange={(e)=>{setMovieYear(e.target.value)}}/>
        <button type='submit'>ADD</button>
      </form> */}
      <MovieForm addMovie={addMovie}/>
      {renderMovies}
      </div>
    </div>
  );
} 

export default App;
