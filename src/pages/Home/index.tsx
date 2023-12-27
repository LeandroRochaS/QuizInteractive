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
        <div className="home-content-buttons">
          <Link className="home-link" to={"/quizz/react"}>
            {" "}
            React
          </Link>
          <Link className="home-link" to={"/quizz/css"}>
            {" "}
            CSS
          </Link>
          <Link className="home-link" to={"/quizz/typeScript"}>
            {" "}
            TypeScript
          </Link>
        </div>
      </div>
    </>
  );
}
