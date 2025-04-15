import React from 'react';
import {getKakaoLoginLink} from "~/api/kakaoAPI";
import {Link} from "react-router";

function LoginPage() {

    const kakaoLink = getKakaoLoginLink()

    return (
        <div>
            <div className={'text-4xl'}>Login Page</div>

            <Link to={kakaoLink}>카카오</Link>
        </div>
    )
}

export default LoginPage;