import { Route, Routes } from "react-router-dom";
import "./App.css";
import QuizzPage from "./pages/QuizzPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz/:assunto" element={<QuizzPage />} />
      </Routes>
    </>
  );
}

export default App;
