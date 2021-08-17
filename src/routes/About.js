import React from 'react';
import '../css/About.css'

function About(props) {
    console.log(props)
    return (
        <section className="about_container">
            <div className="about_name">
                <h2>Cate Blanchett</h2>
                <h2>케이트 블란쳇</h2>
                <img src="https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_UY317_CR3,0,214,317_AL_.jpg" alt="CateBlanchett"></img>

                <p className="about_txt">오스트레일리아 출신 배우, 연출가<br />
                1969년 5월 14일 
                </p>
                <em>
                Filmos 메뉴에서 <br />그녀의 필모그래피를 만나보세요</em>
            </div>
            <div className="about_picture"></div>
        </section>
    )
}
export default About;