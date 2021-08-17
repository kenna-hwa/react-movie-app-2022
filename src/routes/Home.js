import React from 'react';
import '../css/Home.css'

function Home(){
    return (
        <section className="home_container">
            <article className="home_txt_container">
                <h1>케이트 블란쳇 필모그래피</h1>
                <h2>Cate Blanchett Filmos Page</h2>
                <p>안녕하세요. <br />
                   배우 케이트 블란쳇의 필모그래피를  <br />살펴보실 수 있는 페이지입니다.
                </p>
                <a href="https://github.com/kenna-hwa/react-movie-app" className="home_txt_github">
                    &#128073;
                    GitHub Repository</a>
            </article>
            <article className="my_about_container">
            <h2> Copyright 2021. Juhwa Hwang all rights reserved.</h2>
            <p>만든 사람에 대해 궁금하신가요?</p>
            <p>이 앱을 만든 과정은 　<a href="https://kenna-hwa.github.io/">&#9900; 블로그 　</a>에 있습니다.</p>
            <a href="https://www.instagram.com/peacehwa/" className="instagram">&#9900; Instagram</a>
            <a href="https://github.com/kenna-hwa" className="github">&#9900; GitHub</a>
            <a href="https://kenna-hwa.github.io/portfolio_kenna/" className="portfolio">&#9900; Portfolio</a>
            </article>
        </section>
    )
}
export default Home;