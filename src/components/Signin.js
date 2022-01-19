import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/Signin.scss';

 
function Signin() {

    const RESTAPI_KEY = "cd9ac574137c641f13202a079a93a96b"; //요약정보 - 앱 키 - REST API 키
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback"; //인증 토큰을 받을 리다이렉트 주소
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${RESTAPI_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const [userId, setUserId] = useState('');
    const [userPwd, setuserPwd] = useState('');

    // input-userId 변경
 
    const userIdEventHandler = (e) => {
        setUserId(e.target.value)
    }
 
    // input-userPwd 변경

    const userPwdEventHandler = (e) => {
        setuserPwd(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
        console.log(KAKAO_AUTH_URL)

    }

    // 페이지 렌더링 후 가장 처음 호출되는 함수
   /* useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])
     */

    return ( 
        <div className='signin_form_wrap'>
        <form className='signin_form'>
            <h2 className='signin_form_header'>회원 로그인</h2>
            <div className='signin_input_wrap'>
                <p className="signin_id">
                <label htmlFor='userId'>ID </label>
                <input type='text' name='userId' value={userId} onChange={userIdEventHandler} />
                </p>
                <p className='signin_pwd'>
                <label htmlFor='userPwd'>PW </label>
                <input type='text' name='userPwd' value={userPwd} onChange={userPwdEventHandler} />
                </p>
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>로그인</button>
            </div>

        </form>
        <div className='signin_with_kakao'>
                <a href={KAKAO_AUTH_URL}>카카오로 로그인하기</a>
        </div>
        </div>
    )
}


export default Signin;