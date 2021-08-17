import React from 'react';
import '../css/Detail.css';

function MovieInfo({ code, title, titleEn, time, opendate, movieType }){
    return(
        <section className="movieinfo_container">
            <div className="movieinfo_title_box">
                <h2> {title} </h2>
                <p> {titleEn} </p>
            </div>
            <div className="movieinfo_info_box">
                <p>상영시간 : { time } 분</p>
                <p>개봉일자 : {opendate}</p>
                <p>타입 : { movieType }</p>
            </div>
            <div className="movieinfo_img_box">
                <img src={'http://kenna.dothome.co.kr/hidden/images/reactmovie/'+ code + '.jpg'} alt={titleEn}></img>
            </div>
        </section>
    )
}
export default MovieInfo;