// LoginHandeler.js

import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../../../OAuth/OAuth";
import { useDispatch } from "react-redux";
import { login } from "../../../slices/userSlice";
const LoginHandeler = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
  console.log(code);

  // Effect hook to handle login
  useEffect(() => {
    const KakaoLogin = async () => {
      try {
        // Exchange the authorization code for an access token
        const tokenResponse = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
          {}, // Empty data object
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        console.log(tokenResponse.data); // Log the response data

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

          // Extract user information
          const userData = {
            email: userInfoResponse.data.kakao_account.email,
            nickname: userInfoResponse.data.properties.nickname,
            profile_image: userInfoResponse.data.properties.profile_image,
          };

          // Send user information to your backend
          const backendResponse = await axios.post(
            "/auth/kakaologin",
            userData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Backend response:", backendResponse.data);

          // Handle successful login, navigate to the desired route
          dispatch(login(userData));
          navigate("/");
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
