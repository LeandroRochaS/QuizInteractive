import { Link } from "react-router-dom";
import "./styles.scss";
import clickButton from "../../assets/sounds/click-124467.mp3";

export default function Home() {
  function handleClickLink() {
    const audio = new Audio(clickButton);
    audio.play();
  }

  return (
    <>
      <div className="home-content">
        <h1 className="home-title">
          <b>Digital </b> Quiz
        </h1>
        <h2 className="home-subtitle">Teste seus conhecimentos</h2>
        <div className="home-content-buttons">
          <Link
            onClick={handleClickLink}
            className="home-link"
            to={"/quizz/react"}
          >
            {" "}
            React
          </Link>
          <Link
            onClick={handleClickLink}
            className="home-link"
            to={"/quizz/css"}
          >
            {" "}
            CSS
          </Link>
          <Link
            onClick={handleClickLink}
            className="home-link"
            to={"/quizz/typeScript"}
          >
            {" "}
            TypeScript
          </Link>
        </div>
      </div>
    </>
  );
}
