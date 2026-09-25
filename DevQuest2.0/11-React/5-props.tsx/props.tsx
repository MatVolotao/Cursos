// 06-props-default-children.tsx

// ==========================================
// PROPS
// ==========================================

// Props são valores enviados de um componente pai
// para um componente filho.

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
// PROP OPCIONAL + VALOR DEFAULT
// ==========================================

// O ? torna a prop opcional.
// Se description não for enviada,
// será usado o valor padrão.

type TaskProps = {
	description?: string;
};

function NewTask({
	description = "Nenhuma tarefa digitada",
}: TaskProps) {
	return <p>Tarefa: {description}</p>;
}


// ==========================================
// CHILDREN
// ==========================================

// children também é uma prop.
// Ela recebe tudo que estiver entre
// <Cartao> e </Cartao>.

type CardProps = {
	titulo: string;
	children: React.ReactNode;
};

function Cartao({ titulo, children }: CardProps) {
	return (
		<div>
			<h2>{titulo}</h2>

			{children}
		</div>
	);
}


// ==========================================
// USANDO OS COMPONENTES
// ==========================================

function App() {
	return (
		<>
			<Usuario
				nome="Matheus"
				idade={29}
			/>

			<NewTask description="Estudar React" />

			{/* Usa o valor default */}
			<NewTask />

			<Cartao titulo="Minhas tarefas">
				<NewTask description="Revisar props" />
				<NewTask description="Estudar children" />
			</Cartao>
		</>
	);
}

export default App;


// ==========================================
// RESUMO
// ==========================================

// Props:
// -> enviam dados para componentes

// Prop opcional:
// -> usa ?

// Valor default:
// -> usado quando a prop não é enviada

// children:
// -> também é uma prop
// -> recebe o conteúdo entre as tags
// -> normalmente usa React.ReactNode