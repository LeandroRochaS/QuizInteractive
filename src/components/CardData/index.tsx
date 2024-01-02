import { calcularPorcentagemAcerto } from "../../scripts/functions";
import "./styles.scss";
interface CardDataProps {
  icon: JSX.Element;
  qtdPerguntas: number;
  qtdAcertos: number;
  nome: string;
  dado: number;
}
export default function CardData(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: CardDataProps
) {
  return (
    <>
      <div className="card-profile">
        <div className="card-profile-item">
          <div className="card-profile-icon">{props.icon}</div>
          <h2>{props.nome}</h2>
        </div>
        {props.nome.toLowerCase() == "estatísticas" ? (
          <span>
            {props.qtdPerguntas! > 0
              ? calcularPorcentagemAcerto(
                  props.qtdPerguntas!,
                  props.qtdAcertos!
                )
              : ""}
          </span>
        ) : (
          <span>{props.dado}</span>
        )}
      </div>
    </>
  );
}
