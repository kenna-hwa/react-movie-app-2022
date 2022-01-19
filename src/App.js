import React from 'react';
import { Switch, Route } from "react-router-dom";
import About from './routes/About';
import MovieList from './routes/MovieList';
import Home from './routes/Home';
import Detail from './routes/Detail'
import Navigation from './components/Navigation';
import Signin from './components/Signin';
import KakaoAuth from './components/KakaoAuth'
import './css/App.css';


function App() {


  return (
    
    <section className="main_container">
    <h1 className="main_title">Cate Blanchett</h1>
    <Navigation />

      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route exact path="/movielist"> <MovieList /></Route>
        <Route exact path="/about"> <About /> </Route>
        <Route exact path="/movie?movieCd=:id"> <Detail /> </Route>
        <Route exact path="/signin"> <Signin /> </Route>
        <Route exact path="/oauth/kakao/callback"> <KakaoAuth /> </Route>
        </Switch>
  </section>  
)

}
export default App;
