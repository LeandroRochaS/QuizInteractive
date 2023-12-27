import { Link } from "react-router-dom";
import "./styles.scss";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to={"/quizz/react"}> React</Link>
      <Link to={"/quizz/css"}> CSS</Link>
      <Link to={"/quizz/typeScript"}> typeScript</Link>
    </>
  );
}
