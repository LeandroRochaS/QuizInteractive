import "./styles.scss";
import robot from "../../assets/images/robot-with-clipboard.png";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { FaCheck, FaTimes, FaChartArea } from "react-icons/fa";
import CardData from "../CardData";
import { HiMiniArchiveBoxArrowDown } from "react-icons/hi2";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";

interface ModalProfileProps {
  modalIsOpen: boolean;
  handleModalClose: () => void;
}

type Estatistica = {
  acertos: number;
  erros: number;
  qtdPerguntas: number;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export function ModalProfile(props: ModalProfileProps) {
  const [userName, setUserName] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [email, setEmail] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [estaticas, setEstatisticas] = useState<Estatistica | null>(null);
  const [qtdAcertos, setQtdAcertos] = useState<number | null>(null);
  const [qtdErros, setQtdErros] = useState<number | null>(null);
  const [qtdPerguntas, setQtdPerguntas] = useState<number | null>(null);
  const [qtdPartidas, setQtdPartidas] = useState<number | null>(null);

  useEffect(() => {
    const storageName = localStorage.getItem("userName");
    const storageEmail = localStorage.getItem("email");
    const storageEstatisticas = localStorage.getItem("estatisticas");

    if (!storageName || !storageEmail) {
      props.handleModalClose();
    } else {
      setUserName(storageName);
      setEmail(storageEmail);
      if (storageEstatisticas) {
        const estatisticas = JSON.parse(storageEstatisticas);
        setEstatisticas(estatisticas);
        calcularEstatisticas(estatisticas);
        setQtdPartidas(estatisticas.length);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  function calcularEstatisticas(estatisticas: Estatistica[]) {
    let acertos = 0;
    let erros = 0;
    let qtdPerguntas = 0;

    estatisticas.forEach((estatistica) => {
      acertos += estatistica.acertos;
      erros += estatistica.erros;
      qtdPerguntas += estatistica.qtdPerguntas;
    });

    setQtdAcertos(acertos);
    setQtdErros(erros);
    setQtdPerguntas(qtdPerguntas);
  }

  return (
    <>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.handleModalClose}
        contentLabel="Informe seu nome"
        className="modal modal-profile"
        overlayClassName="overlay"
        closeTimeoutMS={300}
      >
        <button onClick={props.handleModalClose} className="modal-button-close">
          <HiX className="modal-icon-close" />
        </button>
        <div className="modal-profile-content">
          <div className="modal-content-left">
            <img className="modal-image" src={robot} alt="robot"></img>
            <h1 className="modal-title">
              Hi, <span className="result-nome">{userName}</span>!
            </h1>
            <p>Suas estatísticas </p>
          </div>
          <div className="modalProfile-content-right">
            <CardData
              icon={
                <HiMiniArchiveBoxArrowDown
                  style={{ color: "#464646", height: "1.3rem" }}
                />
              }
              qtdPerguntas={qtdPerguntas!}
              qtdAcertos={qtdAcertos!}
              nome="Partidas"
              dado={qtdPartidas!}
            />{" "}
            <CardData
              icon={
                <HiDocumentMagnifyingGlass
                  style={{ color: "#464646", height: "1.3rem" }}
                />
              }
              qtdPerguntas={qtdPerguntas!}
              qtdAcertos={qtdAcertos!}
              nome="Perguntas"
              dado={qtdPerguntas!}
            />
            <CardData
              icon={<FaCheck style={{ color: "#26D166", height: "1.3rem" }} />}
              qtdPerguntas={qtdPerguntas!}
              qtdAcertos={qtdAcertos!}
              nome="Acertos"
              dado={qtdAcertos!}
            />
            <CardData
              icon={<FaTimes style={{ color: "#d12626", height: "1.3rem" }} />}
              qtdPerguntas={qtdPerguntas!}
              qtdAcertos={qtdAcertos!}
              nome="Erros"
              dado={qtdErros!}
            />
            <CardData
              icon={
                <FaChartArea style={{ color: "#464646", height: "1.3rem" }} />
              }
              qtdPerguntas={qtdPerguntas!}
              qtdAcertos={qtdAcertos!}
              nome="Estatísticas"
              dado={0}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
