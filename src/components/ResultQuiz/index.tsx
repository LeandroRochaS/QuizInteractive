import { useEffect, useState } from "react";
import { calcularPorcentagemAcerto } from "../../scripts/functions";
import "./styles.scss";
import { FaCheck, FaTimes, FaChartArea } from "react-icons/fa";

type ResultQuizProps = {
  acertos: number;
  erros: number;
  qtdPerguntas: number;
};

export default function ResultQuiz(props: ResultQuizProps) {
  const [nome, setNome] = useState<string | null>(null);

  useEffect(() => {
    console.log("passou no useEffect");
    const storageName = localStorage.getItem("userName");
    if (!storageName) {
      setNome("usuário");
    } else {
      setNome(storageName);
    }

    if (props.acertos !== 0 || props.erros !== 0) {
      const storedEstatisticas = localStorage.getItem("estatisticas");
      const estatistica = {
        acertos: props.acertos,
        erros: props.erros,
        qtdPerguntas: props.qtdPerguntas,
      };

      if (storedEstatisticas) {
        const estatisticas = JSON.parse(storedEstatisticas);
        estatisticas.push(estatistica);
        localStorage.setItem("estatisticas", JSON.stringify(estatisticas));
      } else {
        const estatisticas = [estatistica];
        localStorage.setItem("estatisticas", JSON.stringify(estatisticas));
      }
    }
  }, [props.acertos, props.erros, props.qtdPerguntas]);

  return (
    <>
      <div className="quiz-result-content">
        <h1>
          Seus resultados, <span className="result-nome">{nome}.</span>
        </h1>
        <div className="card-result">
          <div className="card-result-item">
            <div className="card-result-icon">
              <FaCheck style={{ color: "#26D166", height: "1.3rem" }} />
            </div>
            <h2>acertos</h2>
          </div>
          <span>{props.acertos}</span>
        </div>
        <div className="card-result">
          <div className="card-result-item">
            <div className="card-result-icon">
              <FaTimes style={{ color: "#d12626", height: "1.3rem" }} />
            </div>
            <h2>erros</h2>
          </div>
          <span>{props.erros}</span>
        </div>
        <div className="card-result">
          <div className="card-result-item">
            <div className="card-result-icon">
              <FaChartArea style={{ color: "#000", height: "1.3rem" }} />
            </div>
            <h2>Porcentagem</h2>
          </div>
          <span>
            {" "}
            {calcularPorcentagemAcerto(props.qtdPerguntas, props.acertos)}%
          </span>
        </div>
      </div>
    </>
  );
}
