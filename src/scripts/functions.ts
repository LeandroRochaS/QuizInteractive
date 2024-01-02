export const calcularPorcentagemAcerto = (
  qtdPerguntas: number,
  qtdAcertos: number
) => {
  if (qtdPerguntas === 0) return 0;
  return ((qtdAcertos / qtdPerguntas) * 100).toFixed(0);
};

export const calcularPorcentagemProgresso = (
  qtdPerguntas: number,
  perguntaAtual: number
) => {
  if (qtdPerguntas === 0) return 0;
  return ((perguntaAtual / qtdPerguntas) * 100).toFixed(0);
};
