import robot from "../../assets/images/robot-with-clipboard.png";
import Modal from "react-modal";
import { HiArrowSmRight } from "react-icons/hi";
import { useState } from "react";
import "./styles.scss";

interface ModalLoginProps {
  modalIsOpen: boolean;
  handleModalClose: () => void;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ModalLogin(props: ModalLoginProps) {
  const [userName, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  function handleSubmitName(name: string, email: string) {
    if (!name || name.trim() === "" || !email || email.trim() === "") {
      return;
    } else {
      localStorage.setItem("userName", name);
      localStorage.setItem("email", email);
      setUserName(name);
      setEmail(email);
      props.handleModalClose();
    }
  }

  return (
    <>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.handleModalClose}
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
