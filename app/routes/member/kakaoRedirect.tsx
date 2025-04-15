import React, {useEffect} from 'react';
import {useSearchParams} from "react-router";
import {getAccessToken} from "~/api/kakaoAPI";

function KakaoRedirect() {

    const [searchParams] = useSearchParams()

    const authCode = searchParams.get('code')

    useEffect(() => {

        if(authCode){
            getAccessToken(authCode).then(data => {
                const accessToken = data.access_token;
                console.log(accessToken);
            });
        }
    }, [authCode])

    if(!authCode){
        return (<div>로그인 실패</div>)
    }

    return (
        <div>
            <div>이 페이지는 카카오에서 호출해주는 페이지입니다</div>
            <div>{authCode}</div>
        </div>
    )
}
export default KakaoRedirect;