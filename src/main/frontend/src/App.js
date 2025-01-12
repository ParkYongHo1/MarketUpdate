import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main/page/Main";
import LoginPage from "./pages/Login/page/LoginPage";
import SignUpPage from "./pages/Login/page/SignUpPage";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import FloatingButton from "./layout/floating/FloatingButton";
import Profile from "./pages/Profile/Profile";
import Chat from "./layout/floating/chat";
import FloatingList from "./layout/floating/FloatingList";
import FindByEmailPage from "./pages/Login/page/FindByEmailPage";
import FindByPasswordPage from "./pages/Login/page/FindByPasswordPage";
import AddUserInfoPage from "./pages/Login/page/AddUserInfoPage";
import CategoryPage from "./pages/Category/page/CategoryPage";
import LoginHandeler from "./pages/Login/page/LoginHeadeler";
import ProductDetailPage from "./pages/Product/page/ProductDetailPage";
import WriteProductpage from "./pages/Product/page/WriteProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation(); // 현재 위치 확인
  const isChatPage = location.pathname.startsWith("/chat"); // /chat 페이지에서는 헤더와 푸터를 숨김

  return (
    <>
      {!isChatPage && <Header />} {/* 채팅 페이지가 아니면 헤더를 렌더링 */}
      {!isChatPage && <FloatingButton />}{" "}
      {/* 채팅 페이지가 아니면 FloatingButton을 렌더링 */}
      <Routes>
        {/* 기본 페이지 */}
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/findemail" element={<FindByEmailPage />} />
        <Route path="/findpassword" element={<FindByPasswordPage />} />
        <Route path="/adduserinfo" element={<AddUserInfoPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/product/write" element={<WriteProductpage />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/auth/kakao" // redirect_url
          element={<LoginHandeler />} // 당신이 redirect_url에 맞춰 꾸밀 컴포넌트
        />

        {/* 채팅 관련 경로 */}
        <Route path="/floating-list" element={<FloatingList />} />
        <Route path="/chat/:chatId" element={<Chat />} />
      </Routes>
      {!isChatPage && <Footer />} {/* 채팅 페이지가 아니면 푸터를 렌더링 */}
    </>
  );
}

export default App;
