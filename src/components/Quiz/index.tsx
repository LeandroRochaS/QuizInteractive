import { useEffect, useState } from "react";
import "./styles.scss";
import {
  getAllPerguntasCSS,
  getAllPerguntasReact,
  getAllPerguntasTypeScript,
} from "../../data/data";
import { Link, useParams } from "react-router-dom";
import Respost from "../Respost";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import audioError from "../../assets/sounds/error-126627.mp3";
import audioCorrect from "../../assets/sounds/interface-124464.mp3";

type Pergunta = {
  pergunta: string;
  respostas: string[];
  respostaCorreta: string;
};

export default function Quizz() {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const { assunto } = useParams();

  console.log(assunto);

  useEffect(() => {
    if (assunto === "react") {
      setPerguntas(getAllPerguntasReact());
    }
    if (assunto === "css") {
      setPerguntas(getAllPerguntasCSS());
    }
    if (assunto === "typeScript") {
      setPerguntas(getAllPerguntasTypeScript());
    }
  }, [assunto, perguntas]);

  function handleResponse(resposta: string) {
    if (resposta === perguntas[perguntaAtual].respostaCorreta) {
      setAcertos(acertos + 1);
      handleAudioCorrent();
      flash();
    } else {
      setErros(erros + 1);
      handleAudioError();
    }

    handleSubmitResponse();
    setTimeout(() => {
      setPerguntaAtual(perguntaAtual + 1);
      handleSubmitResponseRemove();
    }, 2000);
  }

  function handleRestart() {
    setPerguntaAtual(0);
    setAcertos(0);
    setErros(0);
  }

  function handleAudioCorrent() {
    const audio = new Audio(audioCorrect);
    audio.play();
  }

  function handleAudioError() {
    const audio = new Audio(audioError);
    audio.play();
  }

  function flash() {
    const body = document.querySelector(":root");
    body?.classList.add("flash");
    setTimeout(() => {
      body?.classList.remove("flash");
    }, 1000);
  }
  const icons = document.querySelectorAll(".icons");

  function handleSubmitResponse() {
    icons.forEach((icon) => {
      icon.classList.add("show");
    });
  }

  function handleSubmitResponseRemove() {
    icons.forEach((icon) => {
      icon.classList.remove("show");
    });
  }

  const calcularPorcentagemAcerto = () => {
    if (perguntas.length === 0) return 0;
    return ((acertos / perguntas.length) * 100).toFixed(0);
  };

  return (
    <>
      <div className="quiz-container">
        <div className="quiz-title">
          <Link className="Link" to="/">
            <h1>Digital Quiz</h1>
          </Link>

          <span>
            {perguntas.length != perguntaAtual
              ? `Questão ${perguntaAtual + 1}/${perguntas.length}`
              : ``}
          </span>
        </div>
        <h2 className="quiz-pergunta">{perguntas[perguntaAtual]?.pergunta}</h2>

        <div className="respostas">
          {perguntas.length != perguntaAtual ? (
            perguntas[perguntaAtual]?.respostas.map((resposta, index) => (
              <button key={index} onClick={() => handleResponse(resposta)}>
                {
                  <span className="icons">
                    {resposta === perguntas[perguntaAtual].respostaCorreta ? (
                      <FcCheckmark />
                    ) : (
                      <FcCancel />
                    )}
                  </span>
                }

                <Respost text={resposta}></Respost>
              </button>
            ))
          ) : (
            <div className="quiz-result">
              <h2>Acertos: {acertos}</h2>
              <h2>Erros: {erros}</h2>
              <h2>Porcentagem: {calcularPorcentagemAcerto()}%</h2>
              <button onClick={() => handleRestart()}>Reiniciar</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
