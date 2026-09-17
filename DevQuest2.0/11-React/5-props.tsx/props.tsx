// 05-props.tsx

// ==========================================
// PROPS
// ==========================================

// Props são valores enviados de um componente
// pai para um componente filho.

// Funcionam de forma parecida com parâmetros
// de uma função.

type UsuarioProps = {
	nome: string;
	idade: number;
};

function Usuario({ nome, idade }: UsuarioProps) {
	return (
		<p>
			{nome} - {idade} anos
		</p>
	);
}


// ==========================================
// PROP OPCIONAL
// ==========================================

type ProdutoProps = {
	nome: string;
	preco: number;
	disponivel?: boolean;
};

function Produto({
	nome,
	preco,
	disponivel = true
}: ProdutoProps) {
	return (
		<div>
			<h2>{nome}</h2>

			<p>R$ {preco}</p>

			<p>
				{disponivel ? "Disponível" : "Indisponível"}
			</p>
		</div>
	);
}


// ==========================================
// COMPONENTE PAI
// ==========================================

function App() {
	return (
		<>
			<Usuario
				nome="Matheus"
				idade={29}
			/>

			<Usuario
				nome="Alice"
				idade={23}
			/>

			<Produto
				nome="Mouse"
				preco={150}
			/>

			<Produto
				nome="Teclado"
				preco={250}
				disponivel={false}
			/>
		</>
	);
}

export default App;


// ==========================================
// RESUMO
// ==========================================

// Props:
// -> enviam dados para componentes
// -> funcionam como parâmetros
// -> tornam componentes reutilizáveis
// -> podem ser tipadas com TypeScript
// -> podem ser opcionais
// -> são somente leitura