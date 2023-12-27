import { useEffect, useState } from "react";
import "./styles.scss";
import {
  getAllPerguntasCSS,
  getAllPerguntasReact,
  getAllPerguntasTypeScript,
} from "../../data/data";
import { useParams } from "react-router-dom";
import Respost from "../Respost";

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
    } else {
      setErros(erros + 1);
    }
    setPerguntaAtual(perguntaAtual + 1);
  }

  function handleRestart() {
    setPerguntaAtual(0);
    setAcertos(0);
    setErros(0);
  }

  return (
    <>
      <h1>Digital Quiz</h1>
      <span>
        {perguntas.length != perguntaAtual
          ? `Questão ${perguntaAtual + 1}/${perguntas.length}`
          : ``}
      </span>

      <h2>{perguntas[perguntaAtual]?.pergunta}</h2>

      <div className="respostas">
        {perguntas.length != perguntaAtual ? (
          perguntas[perguntaAtual]?.respostas.map((resposta, index) => (
            <button key={index} onClick={() => handleResponse(resposta)}>
              <Respost text={resposta}></Respost>
            </button>
          ))
        ) : (
          <div>
            <h2>Acertos: {acertos}</h2>
            <h2>Erros: {erros}</h2>
            <button onClick={() => handleRestart()}>Reiniciar</button>
          </div>
        )}
      </div>
    </>
  );
}
