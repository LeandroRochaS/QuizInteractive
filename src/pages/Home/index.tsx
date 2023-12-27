import { Link } from "react-router-dom";
import "./styles.scss";

export default function Home() {
  return (
    <>
      <div className="home-content">
        <h1 className="home-title">
          <b>Digital </b> Quiz
        </h1>
        <h2 className="home-subtitle">Teste seus conhecimentos</h2>
        <Link to={"/quizz/react"}> React</Link>
        <Link to={"/quizz/css"}> CSS</Link>
        <Link to={"/quizz/typeScript"}> typeScript</Link>
      </div>
    </>
  );
}
