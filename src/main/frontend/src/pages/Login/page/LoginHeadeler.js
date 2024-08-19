// LoginHandeler.js

import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../../../OAuth/OAuth";
import { useDispatch, useSelector } from "react-redux";
import { login, setJwt } from "../../../slices/userSlice";
const LoginHandeler = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;

  useEffect(() => {
    const KakaoLogin = async () => {
      try {
        const tokenResponse = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
          {},
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        console.log(tokenResponse.data);

        const { access_token } = tokenResponse.data;
        if (access_token) {
          console.log(`Bearer ${access_token}`);

          // Retrieve user information from Kakao API
          const userInfoResponse = await axios.post(
            "https://kapi.kakao.com/v2/user/me",
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );
          console.log("User information retrieved successfully:");
          console.log(userInfoResponse.data);
          const jwtData = {
            access: tokenResponse.data.access_token,
            expirationTime: tokenResponse.data.expires_in,
            refresh: tokenResponse.data.refresh_token,
          };
          sessionStorage.setItem("jwt", JSON.stringify(jwtData));
          // Extract user information
          const userData = {
            email: userInfoResponse.data.kakao_account.email,
            nickname: userInfoResponse.data.properties.nickname,
            profile_image: userInfoResponse.data.properties.profile_image,
            auth: "1",
          };
          console.log(userData);

          // Send user information to your backend
          const backendResponse = await axios.post("/member/login", userData, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log("Backend response:", backendResponse.data);

          // Handle successful login, navigate to the desired route
          if (backendResponse.data.status == "200") {
            dispatch(login({ user: backendResponse.data }));
            dispatch(setJwt(jwtData));
            console.log(backendResponse.data);

            if (backendResponse.data.member.location.address == null) {
              navigate("/adduserinfo");
            } else {
              console.log("true22");
              navigate("/");
            }
          } else if (backendResponse.data.status == "400") {
            console.log("123");
          }
        }
      } catch (error) {
        console.error("Error during Kakao login:", error);
      }
    };

    KakaoLogin(); // Call the KakaoLogin function
  }, [code, CLIENT_ID, REDIRECT_URI, navigate]); // Dependency array to run effect when dependencies change

  return (
    <div>
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoginHandeler;
