import { Route, Routes } from "react-router-dom";
import "./App.css";
import QuizzPage from "./pages/QuizzPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<QuizzPage />} />
      </Routes>
    </>
  );
}

export default App;
