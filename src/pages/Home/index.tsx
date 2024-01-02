import { Link } from "react-router-dom";
import "./styles.scss";
import clickButton from "../../assets/sounds/click-124467.mp3";
import poligono from "../../assets/Polygon 1.svg";
import { useEffect, useState } from "react";

import { HiOutlineUser } from "react-icons/hi";
import { ModalLogin } from "../../components/ModalLogin";
import { ModalProfile } from "../../components/ModalProfile";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalProfileIsOpen, setModalProfileIsOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storageName = localStorage.getItem("userName");
    const storageEmail = localStorage.getItem("email");

    if (!storageName || !storageEmail) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
      setUserName(storageName);
    }
  }, []);

  function handleModalClose() {
    setModalIsOpen(false);
  }

  function handleClickLink() {
    if (!userName) {
      return;
    }
    const audio = new Audio(clickButton);

    audio.play();
  }

  function handleModalProfileClose() {
    setModalProfileIsOpen(false);
  }
  function handleModalProfileOpen() {
    if (!localStorage.getItem("userName")) {
      setModalIsOpen(true);
      return;
    }
    setModalProfileIsOpen(true);
  }

  return (
    <>
      <div onClick={handleModalProfileOpen} className="userMenu">
        <HiOutlineUser />
      </div>
      <ModalLogin
        modalIsOpen={modalIsOpen}
        handleModalClose={handleModalClose}
      />
      {localStorage.getItem("userName") && (
        <ModalProfile
          modalIsOpen={modalProfileIsOpen}
          handleModalClose={handleModalProfileClose}
        />
      )}

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
            to={userName ? "/quizz/react" : ""}
          >
            {" "}
            React
          </Link>
          <Link
            onClick={handleClickLink}
            className="home-link"
            to={userName ? "/quizz/css" : ""}
          >
            {" "}
            CSS
          </Link>
          <Link
            onClick={handleClickLink}
            className="home-link"
            to={userName ? "/quizz/typeScript" : ""}
          >
            {" "}
            TypeScript
          </Link>
        </div>
      </div>
    </>
  );
}
