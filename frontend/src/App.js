import { Routes, Route } from "react-router-dom";
import "./App.css";
// Main
import Layout from "./layout/Layout";
import MainPage from "./pages/main/MainPage";
// User
import LoginPage from "./pages/user/LoginPage";
// 404
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main */}
        <Route path="" element={<MainPage />} />
        {/* user */}
        <Route path="user" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        {/* trip */}
        <Route path="trip" element={<Layout />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
