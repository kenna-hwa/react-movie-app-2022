import React from 'react';


function KakaoAuth () {
    
    const code = new URL(window.location.href).searchParams.get("code");
    console.log('code :', code)

    return (
        <div>
            <p>카카오 로그인</p>
            { code }
        </div>
    );
};
export default KakaoAuth;