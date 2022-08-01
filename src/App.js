import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home-page/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
