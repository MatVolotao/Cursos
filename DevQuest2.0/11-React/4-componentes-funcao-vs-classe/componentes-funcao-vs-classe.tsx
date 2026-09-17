// 04-componentes-funcao-vs-classe.tsx

import { Component, useState } from "react";


// ==========================================
// COMPONENTE DE FUNÇÃO
// ==========================================

// É o padrão utilizado no React moderno.

function Saudacao() {
	return <h1>Olá, React!</h1>;
}


// Também pode ser criado com arrow function.

const Botao = () => {
	return <button>Clique aqui</button>;
};


// ==========================================
// COMPONENTE DE CLASSE
// ==========================================

// Era muito utilizado antes dos Hooks.

class SaudacaoClasse extends Component {
	render() {
		return <h1>Olá pelo componente de classe!</h1>;
	}
}


// ==========================================
// ESTADO COM COMPONENTE DE FUNÇÃO
// ==========================================

function Contador() {
	const [contador, setContador] = useState(0);

	return (
		<button onClick={() => setContador(contador + 1)}>
			Contador: {contador}
		</button>
	);
}


// ==========================================
// USANDO OS COMPONENTES
// ==========================================

function App() {
	return (
		<>
			<Saudacao />

			<Botao />

			<SaudacaoClasse />

			<Contador />
		</>
	);
}

export default App;


// ==========================================
// RESUMO
// ==========================================

// Componente de função:
// -> criado com function ou arrow function
// -> utiliza Hooks
// -> padrão moderno do React

// Componente de classe:
// -> criado com class
// -> utiliza render()
// -> utiliza recursos como this
// -> mais comum em projetos antigos