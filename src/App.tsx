import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.sass";
import HomePage from "./componets/HomePage";
import MenuPage from "./componets/MenuPage";
import MyNavBar from "./componets/MyNavBar";

function App() {
  return (
    <>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={""} />
      </Routes>
    </>
  );
}

export default App;
