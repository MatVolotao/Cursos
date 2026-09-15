// ==========================================
// VITE X CREATE REACT APP
// ==========================================

// CREATE REACT APP (CRA)
// -> ferramenta antiga para criar projetos React
// -> utilizava ferramentas como Babel e Webpack
// -> atualmente não é recomendado para novos projetos

// Antigamente:
// npx create-react-app meu-projeto


// ==========================================
// VITE
// ==========================================

// Vite é uma ferramenta moderna para
// desenvolvimento e build de aplicações.

// Principais vantagens:
// -> inicialização rápida
// -> HMR (atualização rápida durante desenvolvimento)
// -> configuração simples
// -> suporte a React + TypeScript

// Criando projeto:
//
// npm create vite@latest
//
// Escolher:
// React
// TypeScript


// ==========================================
// EXECUTANDO PROJETO VITE
// ==========================================

// Instalar dependências:
//
// npm install

// Iniciar servidor:
//
// npm run dev


// ==========================================
// BABEL X WEBPACK
// ==========================================

// Babel:
// -> transforma código JavaScript/JSX

// Webpack:
// -> empacota os módulos e arquivos do projeto

// Eram muito associados ao Create React App.


// ==========================================
// EXEMPLO DE COMPONENTE REACT
// ==========================================

function App() {
	return (
		<>
			<h1>React com Vite</h1>
			<p>Meu primeiro projeto React + TypeScript.</p>
		</>
	);
}

export default App;


// ==========================================
// RESUMO
// ==========================================

// Create React App
// -> solução mais antiga
// -> não recomendado para novos projetos

// Vite
// -> solução moderna
// -> rápido
// -> simples
// -> ótimo para React + TypeScript