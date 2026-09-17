// 02-vite-vs-create-react-app.tsx

// ==========================================
// VITE X CREATE REACT APP
// ==========================================

// CREATE REACT APP (CRA)
// -> ferramenta antiga para criar projetos React
// -> utilizava Babel e Webpack
// -> não é recomendado para novos projetos

// Antigamente:
//
// npx create-react-app meu-projeto


// ==========================================
// VITE
// ==========================================

// Vite é uma ferramenta moderna para
// desenvolvimento e build de aplicações.

// Principais vantagens:
// -> rápido
// -> configuração simples
// -> HMR
// -> suporte a React + TypeScript

// Criando projeto:
//
// npm create vite@latest
//
// Escolher:
// React
// TypeScript


// ==========================================
// EXECUTANDO
// ==========================================

// Instalar dependências:
//
// npm install

// Iniciar projeto:
//
// npm run dev


// ==========================================
// BABEL E WEBPACK
// ==========================================

// Babel:
// -> transforma código JavaScript/JSX

// Webpack:
// -> empacota módulos e arquivos do projeto


// ==========================================
// EXEMPLO REACT
// ==========================================

function App() {
	return (
		<>
			<h1>React com Vite</h1>
			<p>Projeto React + TypeScript</p>
		</>
	);
}

export default App;


// ==========================================
// RESUMO
// ==========================================

// CRA:
// -> solução antiga
// -> Babel + Webpack

// Vite:
// -> solução moderna
// -> rápido
// -> simples
// -> recomendado para novos projetos