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

  return (
    <>
      <h1>Quizz</h1>
    </>
  );
}
