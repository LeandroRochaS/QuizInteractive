import { Route, Routes } from "react-router-dom";
import "./App.css";
import QuizzPage from "./pages/QuizPage";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quizz/:assunto" element={<QuizzPage />} />
      </Routes>
    </>
  );
}

export default App;
