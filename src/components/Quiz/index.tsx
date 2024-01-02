import { useEffect, useState } from "react";
import "./styles.scss";
import {
  getAllPerguntasCSS,
  getAllPerguntasReact,
  getAllPerguntasTypeScript,
} from "../../data/data";
import { Link, useParams } from "react-router-dom";
import Respost from "../Respost";

import audioError from "../../assets/sounds/error-126627.mp3";
import audioCorrect from "../../assets/sounds/interface-124464.mp3";
import clickButton from "../../assets/sounds/click-124467.mp3";
import { Loading } from "../Loading";
import ResultQuiz from "../ResultQuiz";
import { calcularPorcentagemProgresso } from "../../scripts/functions";

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
  const [isloading, setIsLoading] = useState(true);

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

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [assunto, perguntas]);

  function handleResponse(resposta: string) {
    if (resposta === perguntas[perguntaAtual].respostaCorreta) {
      setAcertos(acertos + 1);
      handleAudioCorrent();
      flashSucess();
    } else {
      setErros(erros + 1);
      flashError();
      handleAudioError();
      shake();
    }

    setTimeout(() => {
      setPerguntaAtual(perguntaAtual + 1);
      window.scrollTo(0, 0);
    }, 2000);
  }

  function handleRestart() {
    const audio = new Audio(clickButton);
    audio.play();
    setPerguntaAtual(0);
    setAcertos(0);
    setErros(0);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  function handleAudioCorrent() {
    const audio = new Audio(audioCorrect);
    audio.play();
  }

  function handleAudioError() {
    const audio = new Audio(audioError);
    audio.play();
  }

  function flashSucess() {
    const body = document.querySelector("body");
    body?.classList.add("flash");
    setTimeout(() => {
      body?.classList.remove("flash");
    }, 1000);
  }

  function flashError() {
    const body = document.querySelector("body");
    body?.classList.add("flash-bad");
    setTimeout(() => {
      body?.classList.remove("flash-bad");
    }, 1000);
  }

  function shake() {
    const body = document.querySelector("body");
    body?.classList.add("shake");
    setTimeout(() => {
      body?.classList.remove("shake");
    }, 1000);
  }

  return (
    <>
      <div className="quiz-container">
        {isloading ? <Loading /> : ""}
        <div
          className="quiz-title"
          style={{
            justifyContent: `${
              perguntas.length != perguntaAtual ? `space-between` : `center`
            }`,
          }}
        >
          <Link to="/">
            <h1>Digital Quiz</h1>
          </Link>

          <span>
            {perguntas.length != perguntaAtual ? (
              <span className="bar">
                <div
                  className="barContent"
                  style={{
                    width: `${calcularPorcentagemProgresso(
                      perguntas.length,
                      perguntaAtual
                    )}%`,
                  }}
                ></div>{" "}
              </span>
            ) : (
              ``
            )}
            {perguntas.length != perguntaAtual ? (
              <p>
                {perguntaAtual + 1}/{perguntas.length}
              </p>
            ) : (
              ``
            )}
          </span>
        </div>
        <h2 className="quiz-pergunta">{perguntas[perguntaAtual]?.pergunta}</h2>
        {perguntas.length !== perguntaAtual ? (
          <div className="respostas">
            {perguntas[perguntaAtual]?.respostas.map((resposta, index) => (
              <button
                className="respostaItem"
                key={index}
                onClick={() => handleResponse(resposta)}
              >
                <Respost text={resposta} />
              </button>
            ))}
          </div>
        ) : (
          <div className="quiz-result-container">
            <ResultQuiz
              acertos={acertos}
              erros={erros}
              qtdPerguntas={perguntas.length}
            />
            <div className="quiz-result-btns">
              <Link className="Link btn2 btnHome" to="/">
                Home
              </Link>
              <button
                className="btn2 btnRestart"
                onClick={() => handleRestart()}
              >
                Reiniciar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
