const perguntasCSS = [
  {
    pergunta: "O que CSS representa?",
    respostas: [
      "Counter Strike: Source",
      "Cascading Style Sheets",
      "Computer Style Sheet",
      "Colorful Style Sheet",
    ],
    respostaCorreta: "Cascading Style Sheets",
  },
  {
    pergunta: "Qual propriedade é usada para definir a cor do texto em CSS?",
    respostas: ["color", "background-color", "text-color", "font-color"],
    respostaCorreta: "color",
  },
  {
    pergunta: "O que significa a sigla HTML?",
    respostas: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    respostaCorreta: "Hyper Text Markup Language",
  },
  {
    pergunta:
      "Qual seletor CSS é usado para selecionar elementos com uma classe específica?",
    respostas: [".class", "#id", "*element", "element"],
    respostaCorreta: ".class",
  },
  {
    pergunta: "Qual é a propriedade CSS usada para adicionar sombras a caixas?",
    respostas: ["box-shadow", "shadow", "add-shadow", "box-outline"],
    respostaCorreta: "box-shadow",
  },
];

// Perguntas de TypeScript
const perguntasTypeScript = [
  {
    pergunta: "O que é TypeScript?",
    respostas: [
      "Um superconjunto de JavaScript",
      "Uma nova linguagem de programação",
      "Um framework para React",
      "Um banco de dados NoSQL",
    ],
    respostaCorreta: "Um superconjunto de JavaScript",
  },
  {
    pergunta: "Como se declara uma variável em TypeScript?",
    respostas: ["let", "var", "const", "Ambas const e let"],
    respostaCorreta: "Ambas const e let",
  },
  {
    pergunta: "Qual é a principal vantagem do TypeScript sobre o JavaScript?",
    respostas: [
      "Tipagem estática",
      "Menor curva de aprendizado",
      "Compatibilidade com navegadores antigos",
      "Performance superior",
    ],
    respostaCorreta: "Tipagem estática",
  },
  {
    pergunta: "O que é um arquivo de definição TypeScript?",
    respostas: [
      "Um arquivo que define configurações do TypeScript",
      "Um arquivo que define variáveis de ambiente",
      "Um arquivo que define tipos de dados para bibliotecas JavaScript",
      "Um arquivo que define estilos CSS",
    ],
    respostaCorreta:
      "Um arquivo que define tipos de dados para bibliotecas JavaScript",
  },
  {
    pergunta: "Como se compila um arquivo TypeScript para JavaScript?",
    respostas: [
      "tsc arquivo.ts",
      "compile arquivo.ts",
      "npm run build",
      "ts-compile arquivo.ts",
    ],
    respostaCorreta: "tsc arquivo.ts",
  },
];

// Perguntas de React
const perguntasReact = [
  {
    pergunta: "Qual é a função do ReactDOM.render() em React?",
    respostas: [
      "Renderizar componentes no DOM",
      "Executar testes automatizados",
      "Realizar chamadas de API",
      "Compilar o código TypeScript",
    ],
    respostaCorreta: "Renderizar componentes no DOM",
  },
  {
    pergunta: "O que são Hooks em React?",
    respostas: [
      "Funções que permitem usar o state e outros recursos do React em componentes funcionais",
      "Conectores para APIs externas",
      "Ferramentas de debugging",
      "Plugins para estilização",
    ],
    respostaCorreta:
      "Funções que permitem usar o state e outros recursos do React em componentes funcionais",
  },
  {
    pergunta: "Qual é o propósito do useEffect em React?",
    respostas: [
      "Manipular o DOM diretamente",
      "Realizar operações matemáticas complexas",
      "Gerenciar efeitos colaterais em componentes funcionais",
      "Executar testes unitários",
    ],
    respostaCorreta: "Gerenciar efeitos colaterais em componentes funcionais",
  },
  {
    pergunta: "O que é JSX em React?",
    respostas: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JSON XML",
      "JavaScript Extension",
    ],
    respostaCorreta: "JavaScript XML",
  },
  {
    pergunta: "Qual é a função do React Router?",
    respostas: [
      "Gerenciar o estado global da aplicação",
      "Navegação entre diferentes componentes sem recarregar a página",
      "Realizar chamadas de API",
      "Compilar o código TypeScript",
    ],
    respostaCorreta:
      "Navegação entre diferentes componentes sem recarregar a página",
  },
];

export const getAllPerguntasCSS = () => perguntasCSS;
export const getAllPerguntasTypeScript = () => perguntasTypeScript;
export const getAllPerguntasReact = () => perguntasReact;
