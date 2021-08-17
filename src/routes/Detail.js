import React from 'react';
import axios from 'axios';
import MovieInfo from '../components/MovieInfo';

class Detail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movie:{},
        }
    
    }
    getPosters = async () =>{
        const {
            data: {
                movieInfoResult: {
                    movieInfo
                },
            },
        } = await axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=8259f2a744e900c0fd98e8dc5b791507&movieCd=${this.props.location.state.year}`);
        this.setState({movie:movieInfo})
    }

    componentDidMount(){

        const { location, history } = this.props;
        if ( location.state === undefined ){
            history.push('/movielist');
        } else {
            this.getPosters();
        }

    }
    render(){
        const { location } = this.props;
        const { movie } = this.state;

        if (location.state){
            console.log(movie['movieNmEn'])

        return ( 
            <div>
                <MovieInfo 
                code={movie.movieCd}
                title={movie.movieNm}
                titleEn={movie.movieNmEn}
                time={movie.showTm}
                opendate={movie.openDt}
                movieType={movie.typeNm}
                director={movie.directors}
                />
            </div>
        )
        }else{
            return null
        }
    }
}
export default Detail;