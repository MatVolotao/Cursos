// 03-estrutura-projeto-react.tsx

// ==========================================
// ESTRUTURA DE UM PROJETO REACT + VITE
// ==========================================

// Estrutura básica:
//
// projeto/
// ├── node_modules/
// ├── public/
// ├── src/
// │   ├── assets/
// │   ├── App.tsx
// │   └── main.tsx
// ├── index.html
// ├── package.json
// ├── tsconfig.json
// └── vite.config.ts


// ==========================================
// PRINCIPAIS ARQUIVOS
// ==========================================

// src/
// -> código principal da aplicação

// main.tsx
// -> ponto de entrada do React
// -> renderiza o componente App

// App.tsx
// -> componente principal da aplicação

// public/
// -> arquivos estáticos

// index.html
// -> HTML base
// -> possui o elemento #root

// package.json
// -> dependências e scripts

// node_modules/
// -> dependências instaladas
// -> não deve ir para o GitHub

// vite.config.ts
// -> configurações do Vite

// tsconfig.json
// -> configurações do TypeScript

// eslint.config.js
// -> configurações do ESLint


// ==========================================
// FLUXO PRINCIPAL
// ==========================================

// index.html
//      ↓
// main.tsx
//      ↓
// App.tsx
//      ↓
// componentes


// ==========================================
// APP.TSX
// ==========================================

function Header() {
	return <header>Header</header>;
}

function App() {
	return (
		<>
			<Header />

			<main>
				<h1>Minha aplicação React</h1>
			</main>
		</>
	);
}

export default App;


// ==========================================
// RESUMO
// ==========================================

// No dia a dia, trabalhamos principalmente:
//
// src/
// ├── App.tsx
// ├── components/
// ├── pages/
// ├── assets/
// └── outros arquivos da aplicação