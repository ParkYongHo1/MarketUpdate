import "./App.css";
import { configureStore } from "redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import Main from "./pages/Main/page/Main";
import LoginPage from "./pages/Login/page/LoginPage";
import SignUpPage from "./pages/Login/page/SignUpPage";
import Header from "./layout/header/Header";
import FindByEmailPage from "./pages/Login/page/FindByEmailPage";
import FindByPasswordPage from "./pages/Login/page/FindByPasswordPage";
import AddUserInfoPage from "./pages/Login/page/AddUserInfoPage";
import CategoryPage from "./pages/Category/page/CategoryPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/findemail" element={<FindByEmailPage />} />
          <Route path="/findpassword" element={<FindByPasswordPage />} />
          <Route path="/test" element={<AddUserInfoPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
