import React from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import './Home.css';
import './Search.css';
import { render } from '@testing-library/react';

const { data : {
    items
}} = await axios.get('https://openapi.naver.com/v1/search/movie.json',{
    parms:{
        query: search,
        display: 20
    },
    headers: {
        'X-Naver-Client-id' : ID_KEY,
        'X-Naver-Client-Secret' : SECRET_KEY
    }
});

// get방식으로 데이터를 받아온다.
// 네이버 api 주소에 get 방식으로 json 데이터 호출
// axios에는 await 설정하고 parameter에는 영화 검색 search 변수(query),
// display는 검색 결과 갯수
// 그리고 header에 id와 secret값 넣어서 보내기


this.setState({movies: items, isLoading: false});

handleChange = (e : any) => {
    this.setState({value: e.target.value});
};

handleSubmit = (e : any) => {
    e.preventDefault();
    this.getSearchMovie();
}
//onchange를 사용해 value 변수에 검색정보를 저장
//input에서 submit하면 발생하는 고유 이벤트는 막고 e.preventDefault()
//getSearchMovie() 함수 실행

render() {
    const {movies, isLoading} = this.state;

    return (<section className="container">
        {
            isLoading 
            ? (<div className="loader">
                <span className="loader__text">Loading..</span>
            </div>)
            : (<form onSubmit={this.handleSubmit}>
                <div>
                    <div className="input_div">
                        <h1>영화 검색</h1>
                        <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="영화 검색" />
                    </div>
                    <div className="movies">
                        {movies.map(movie => (
                            <SearchMovie 
                            key={movie.link} 
                            id={movie.link} 
                            year={movie.pubDate} 
                            title={movie.title} 
                            poster={movie.image} 
                            rating={movie.userRating} 
                            director={movie.director} 
                            actor={movie.actor} />))
                        }
                    </div>
                </div>
            </form>)
        }
    </section>)
}

//render() 메서드 안에 있는 변경된 state 값에서 영화 정보 리스트를 map으로 하나씩 렌더링 진행