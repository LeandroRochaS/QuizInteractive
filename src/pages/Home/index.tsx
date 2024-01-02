import { Link } from "react-router-dom";
import "./styles.scss";
import clickButton from "../../assets/sounds/click-124467.mp3";
import poligono from "../../assets/Polygon 1.svg";
import { useEffect, useState } from "react";
import robot from "../../assets/images/robot-with-clipboard.png";
import Modal from "react-modal";
import { HiArrowSmRight } from "react-icons/hi";
import { FaPerson } from "react-icons/fa6";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const storageName = localStorage.getItem("userName");
    if (!storageName) {
      setModalIsOpen(true);
    } else {
      setUserName(storageName);
    }
  }, []);

  function handleModalClose() {
    setModalIsOpen(false);
  }

  function handleSubmitName(name: string, email: string) {
    if (!name || name.trim() === "" || !email || email.trim() === "") {
      return;
    }

    localStorage.setItem("userName", name);
    localStorage.setItem("email", email);
    setUserName(name);
    setEmail(email);
    setModalIsOpen(false);
  }

  function handleClickLink() {
    const audio = new Audio(clickButton);
    audio.play();
  }

  return (
    <>
      <div className="userMenu">
        <FaPerson />
      </div>
      <div className="home-content">
        <h1 className="home-title animate__flash">
          <b>Digital </b> Quiz
        </h1>
        <img className="home-poligono" src={poligono} alt="" />

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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        contentLabel="Informe seu nome"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <div className="modal-content-left">
            <img className="modal-image" src={robot} alt="robot"></img>
            <h1 className="modal-title">Bem vindo ao Digital Quiz!</h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmitName(userName!, email!);
            }}
            className="modal-form"
          >
            <p>Por favor, preencha com seus dados</p>

            <input
              type="text"
              name="name"
              onChange={(e) => setUserName(e.target.value)}
              required
              className="modal-input"
              placeholder="Username"
            />

            <input
              type="text"
              name="name"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="modal-input"
              placeholder="E-mail"
            />
            <button type="submit" className="modal-button">
              <HiArrowSmRight style={{ color: "55BB9C", fontSize: "32px" }} />
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
