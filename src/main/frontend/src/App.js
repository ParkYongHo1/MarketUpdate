import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/page/Main";
import LoginPage from "./Login/page/LoginPage";
import SignUpPage from "./Login/page/SignUpPage";
import Header from "./layout/header/Header";
import FindByEmailPage from "./Login/page/FindByEmailPage";
import FindByPasswordPage from "./Login/page/FindByPasswordPage";
import AddUserInfoPage from "./Login/page/AddUserInfoPage";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
