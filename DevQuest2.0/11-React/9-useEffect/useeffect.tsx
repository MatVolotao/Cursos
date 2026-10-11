import { useEffect, useState } from "react";

export const UseEffect = () => {
	const [contador, setContador] = useState(0);
	const [nome, setNome] = useState("");

	// =====================================================
	// 1. useEffect SEM ARRAY DE DEPENDÊNCIAS
	// =====================================================
	// Executa após TODA renderização do componente.

	useEffect(() => {
		console.log("1. Componente renderizou");
	});


	// =====================================================
	// 2. useEffect COM ARRAY VAZIO []
	// =====================================================
	// Executa quando o componente é montado.

	useEffect(() => {
		console.log("2. Componente foi montado");
	}, []);


	// =====================================================
	// 3. useEffect COM DEPENDÊNCIA
	// =====================================================
	// Executa na montagem e sempre que "contador" mudar.

	useEffect(() => {
		console.log("3. Contador mudou:", contador);
	}, [contador]);


	// =====================================================
	// 4. useEffect COM MAIS DE UMA DEPENDÊNCIA
	// =====================================================
	// Executa quando "contador" OU "nome" mudar.

	useEffect(() => {
		console.log("4. Contador ou nome mudou");
	}, [contador, nome]);


	// =====================================================
	// 5. SINCRONIZAÇÃO COM ALGO EXTERNO
	// =====================================================
	// Sincroniza o título da página com o estado contador.

	useEffect(() => {
		document.title = `Contador: ${contador}`;
	}, [contador]);


	// =====================================================
	// 6. CLEANUP
	// =====================================================
	// O return do useEffect é utilizado para limpar o efeito.

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("Interval executando...");
		}, 5000);

		return () => {
			clearInterval(interval);
			console.log("Interval removido");
		};
	}, []);


	return (
		<div>
			<h2>Estudo do useEffect</h2>

			{/* Alterando o contador */}
			<p>Contador: {contador}</p>

			<button onClick={() => setContador((prev) => prev + 1)}>
				Incrementar
			</button>


			{/* Alterando o nome */}
			<div>
				<input
					type="text"
					value={nome}
					onChange={(event) => setNome(event.target.value)}
					placeholder="Digite seu nome"
				/>

				<p>Nome: {nome}</p>
			</div>
		</div>
	);
};