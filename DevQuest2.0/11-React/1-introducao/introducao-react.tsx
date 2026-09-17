// 01-introducao-react.tsx

// ==========================================
// INTRODUÇÃO AO REACT
// ==========================================

// React é uma biblioteca JavaScript utilizada
// para criar interfaces de usuário.

// A interface é dividida em componentes
// pequenos e reutilizáveis.

function Saudacao() {
	return <h1>Olá, React!</h1>;
}

function Botao() {
	return <button>Clique aqui</button>;
}


// ==========================================
// JSX
// ==========================================

// JSX permite escrever uma estrutura parecida
// com HTML dentro do JavaScript/TypeScript.

const nome = "Matheus";

function Usuario() {
	return <p>Olá, {nome}!</p>;
}


// ==========================================
// COMPONENTIZAÇÃO
// ==========================================

function App() {
	return (
		<>
			<Saudacao />
			<Usuario />
			<Botao />
		</>
	);
}

export default App;


// ==========================================
// VIRTUAL DOM
// ==========================================

// Fluxo simplificado:
//
// Dados mudam
//      ↓
// React gera uma nova representação
//      ↓
// Diffing
// Compara com a representação anterior
//      ↓
// Reconciliação
//      ↓
// Atualiza o necessário no DOM real


// ==========================================
// RESUMO
// ==========================================

// React:
// -> biblioteca JavaScript
// -> cria interfaces
// -> trabalha com componentes
// -> utiliza JSX
// -> possui abordagem declarativa
// -> reutiliza componentes
// -> atualiza a interface quando os dados mudam