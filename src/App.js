import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import MovieList from './routes/MovieList';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import './css/App.css';


class App extends React.Component {
render(){
  return (
    <section className="main_container">
    <h1 className="main_title">Cate Blanchett</h1>
      <HashRouter>
        <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movielist" exact={true} component={MovieList} />
      <Route path="/about" exact={true} component={About} />
      </HashRouter>
  </section>  
)}
}
export default App;
