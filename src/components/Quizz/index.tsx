import { useEffect, useState } from "react";
import "./styles.scss";
import { getAllPerguntas } from "../../data/data";

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

  useEffect(() => {
    setPerguntas(getAllPerguntas());
  }, [perguntaAtual, perguntas]);

  function handleResponse(resposta: string) {
    if (resposta === perguntas[perguntaAtual].respostaCorreta) {
      setAcertos(acertos + 1);
    } else {
      setErros(erros + 1);
    }
    setPerguntaAtual(perguntaAtual + 1);
  }

  return (
    <>
      <h1>Quizz</h1>

      <h2>{perguntas[perguntaAtual]?.pergunta}</h2>
      <span>
        (
        {perguntas.length != perguntaAtual
          ? `${perguntaAtual + 1}/${perguntas.length}`
          : `0/0`}
        )
      </span>

      <div className="respostas">
        {perguntas.length != perguntaAtual ? (
          perguntas[perguntaAtual]?.respostas.map((resposta, index) => (
            <button key={index} onClick={() => handleResponse(resposta)}>
              {resposta}
            </button>
          ))
        ) : (
          <div>
            <h2>Acertos: {acertos}</h2>
            <h2>Erros: {erros}</h2>
            <button onClick={() => setPerguntaAtual(0)}>Reiniciar</button>
          </div>
        )}
      </div>
    </>
  );
}
