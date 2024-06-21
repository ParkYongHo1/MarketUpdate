//LoginHandeler.js

import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LoginHandeler = (props) => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  // 인가코드 백으로 보내는 작업 하는곳
  useEffect(() => {
    const KakaoLogin = async () => {
      await axios({
        method: "GET",
        url: `${process.env.REACT_APP_REDIRECT_URL}/?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
          "Access-Control-Allow-Origin": "*",
        },
      }).then((res) => {
        console.log(res);
        navigate("/main");
      });
    };
    KakaoLogin();
  }, [props.history]);
  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoginHandeler;
