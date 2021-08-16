import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import '../css/MovieList.css';


class MovieList extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async () => {
    const {data: {peopleInfoResult : {peopleInfo :{ filmos }}}} = await axios.get("https://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?key=8259f2a744e900c0fd98e8dc5b791507&peopleCd=10075724");
    this.setState({movies : filmos, isLoading : false})
  }
  componentDidMount(){
    this.getMovies();
  }


  render(){

    const { isLoading, movies } = this.state;
   
    return <section className="movie_container">
      {
        ( isLoading ) ? 
        ( 
        <div className="loader">
          <span className="loader_txt">Loading...</span>
        </div> 
        ) : 
        ( 
        <div className="movies">
          <ul className="movies_list">
            {movies.map (movies=> {
              return <li key={movies.movieCd} >
              <Movie
              id={movies.movieCd} 
              title={movies.movieNm} 
              year={movies.movieCd} 
              />
              </li>
            })}
          </ul>
        </div>
        )
      }
    </section>
  }
}

export default MovieList;
