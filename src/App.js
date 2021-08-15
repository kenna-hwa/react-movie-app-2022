import React from 'react';
import Movie from './Movie';

import axios from 'axios';


class App extends React.Component {

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
   
    return <div>
      {
        isLoading ? 
        "Loading..." : 
        movies.map ( movies=> {
          return <Movie 
          id={movies.movieCd} 
          title={movies.movieNm} 
          key={movies.movieCd} />
        })
      }
    </div>
  }
}

export default App;
