import { Route, Routes } from "react-router-dom";
import "./App.css";
import QuizzPage from "./pages/QuizPage";
import Home from "./pages/Home";

function App() {
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");

  window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    if (cursorDot instanceof HTMLElement) {
      cursorDot.style.left = `${clientX}px`;
      cursorDot.style.top = `${clientY}px`;

      if (cursorOutline instanceof HTMLElement) {
        cursorOutline.style.left = `${clientX}px`;
        cursorOutline.style.top = `${clientY}px`;
      }
    }
  });

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
