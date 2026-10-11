
import { Component, useEffect, useState } from "react";

// ============================================================
// CICLO DE VIDA DOS COMPONENTES REACT
// ============================================================
//
// O ciclo de vida representa as etapas pelas quais um
// componente passa enquanto faz parte da aplicação.
//
// 1. INICIALIZAÇÃO:
//    O componente prepara seus valores iniciais, como o estado,
//    e recebe as props necessárias para sua renderização.
//
// 2. MONTAGEM (MOUNT):
//    O React adiciona o componente à árvore da interface
//    e coloca os elementos necessários no DOM.
//
// 3. ATUALIZAÇÃO (UPDATE):
//    Mudanças no estado, props ou contexto podem provocar
//    novas renderizações e alterações na interface.
//
// 4. DESMONTAGEM (UNMOUNT):
//    O React remove o componente da árvore.
//    Seu estado local é descartado e seus efeitos são limpos.
//
// IMPORTANTE:
// Renderizar novamente não significa desmontar e montar
// o componente. O React normalmente preserva seu estado
// enquanto ele mantém a mesma identidade na árvore.
//
// Também não significa que o DOM será sempre modificado.
// O React só aplica as alterações necessárias.
//
// ============================================================
// 1. COMPONENTE DE FUNÇÃO — INICIALIZAÇÃO E ATUALIZAÇÃO
// ============================================================

// Este componente demonstra o ciclo de vida utilizando Hooks.
//
// A prop title é recebida do componente pai.
// O estado count é inicializado com zero.
//
// Quando count muda, a função do componente executa novamente,
// mas o estado é preservado enquanto ele continuar montado.

interface LifecycleProps {
	title: string;
}

const LifecycleExample = ({ title }: LifecycleProps) => {
	// INICIALIZAÇÃO:
	//
	// Na primeira montagem, o estado começa com 0.
	//
	// Nas renderizações seguintes, o React utiliza o valor
	// atual armazenado, sem reinicializar o contador.
	const [count, setCount] = useState(0);

	// Estado que controla quantos produtos aparecem na lista.
	const [visibleCount, setVisibleCount] = useState(3);

	// Este console executa durante a renderização.
	//
	// Ele NÃO indica exclusivamente uma montagem.
	// A função também executa durante novas renderizações.
	console.log("RENDER: LifecycleExample");

	// ========================================================
	// 2. useEffect — EFEITO EXECUTADO NA MONTAGEM
	// ========================================================

	// useEffect permite sincronizar componentes React com
	// sistemas externos, como timers, APIs e eventos do navegador.
	//
	// Estrutura:
	//
	// useEffect(() => {
	//     // Configuração do efeito
	//
	//     return () => {
	//         // Cleanup opcional
	//     };
	// }, [dependencias]);
	//
	// O array [] indica que o efeito não possui dependências
	// reativas que exijam uma nova configuração.
	//
	// Ele é configurado após a montagem e limpo na desmontagem.
	//
	// Em desenvolvimento, o StrictMode pode executar um ciclo
	// adicional de configuração e limpeza para detectar erros.

	useEffect(() => {
		console.log("MONTAGEM: Efeito inicial configurado");

		// Cleanup:
		// Executado quando o efeito é limpo.
		return () => {
			console.log("DESMONTAGEM: Limpando efeito inicial");
		};
	}, []);

	// ========================================================
	// 3. useEffect — ACOMPANHANDO ATUALIZAÇÕES
	// ========================================================

	// Quando count mudar, este efeito será configurado
	// novamente após a renderização correspondente.
	//
	// Antes da nova configuração, o React executa
	// o cleanup da configuração anterior.
	//
	// Este exemplo utiliza console.log apenas para demonstrar
	// o comportamento. Na prática, cálculos simples normalmente
	// não precisam de useEffect.

	useEffect(() => {
		console.log("EFFECT: Contador atual =", count);

		return () => {
			// Esta função utiliza o valor de count capturado
			// quando aquela configuração do efeito foi criada.
			console.log("CLEANUP: Contador anterior =", count);
		};
	}, [count]);

	// ========================================================
	// 4. useEffect — MAIS DE UMA DEPENDÊNCIA
	// ========================================================

	// Um efeito pode depender de mais de um valor.
	//
	// Nesse caso, ele será configurado inicialmente
	// e novamente quando title OU visibleCount mudar.
	//
	// Object.is é utilizado pelo React para comparar
	// cada dependência com seu valor anterior.

	useEffect(() => {
		console.log("Título ou quantidade visível mudou", {
			title,
			visibleCount,
		});
	}, [title, visibleCount]);

	// ========================================================
	// 5. ATUALIZAÇÃO MANUAL DO ESTADO
	// ========================================================

	const incrementCount = () => {
		// Atualização funcional:
		// prev representa o valor anterior do estado.
		//
		// Ao chamar setCount, solicitamos ao React
		// uma atualização do componente.
		setCount((prev) => prev + 1);
	};

	// ========================================================
	// 6. EXEMPLO DA AULA — CARREGAR MAIS PRODUTOS
	// ========================================================

	const products = [
		"Camiseta Roxa",
		"Camiseta Preta",
		"Caneca Branca",
		"Camiseta Azul",
		"Caneca Preta",
		"Camiseta Branca",
		"Caneca Roxa",
		"Camiseta Verde",
		"Caneca Azul",
	];

	// .slice() retorna uma parte do array original.
	//
	// visibleCount começa com 3.
	// Portanto, inicialmente exibimos três produtos.
	//
	// Este é um valor derivado do estado.
	// Não precisamos criar outro useState ou useEffect
	// apenas para calcular essa lista.
	const visibleProducts = products.slice(0, visibleCount);

	const loadMore = () => {
		// Atualiza a quantidade de produtos visíveis.
		//
		// Essa mudança faz o React renderizar novamente
		// o componente e recalcular visibleProducts.
		setVisibleCount((prev) =>
			Math.min(prev + 3, products.length)
		);
	};

	// ========================================================
	// 7. RENDERIZAÇÃO DO COMPONENTE
	// ========================================================

	return (
		<section>
			<h2>{title}</h2>

			<h3>Atualização com useState</h3>

			<p>Contador: {count}</p>

			<button onClick={incrementCount}>
				Incrementar
			</button>

			<h3>Produtos</h3>

			<ul>
				{visibleProducts.map((product) => (
					<li key={product}>{product}</li>
				))}
			</ul>

			{/* 
				Renderização condicional:
				O botão aparece enquanto ainda existem
				produtos que não estão sendo exibidos.
			*/}
			{visibleCount < products.length && (
				<button onClick={loadMore}>
					Carregar mais
				</button>
			)}
		</section>
	);
};

// ============================================================
// 8. CLEANUP COM TIMER — setInterval
// ============================================================

// Um timer é um recurso externo ao React.
//
// Quando criamos um setInterval(), ele continuará executando
// até ser cancelado.
//
// Se não fizermos cleanup, o intervalo pode continuar ativo
// mesmo quando o componente deixar de precisar dele.
//
// Por isso, utilizamos clearInterval() no retorno do useEffect.

const TimerExample = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		console.log("TIMER: Iniciado");

		// Executa a função a cada 1000 milissegundos.
		const intervalId = setInterval(() => {
			setSeconds((prev) => prev + 1);
		}, 1000);

		// CLEANUP:
		// Cancela o intervalo quando o componente desmonta
		// ou quando a configuração do efeito for limpa.
		return () => {
			clearInterval(intervalId);

			console.log("TIMER: Cancelado");
		};
	}, []);

	return <h2>Tempo: {seconds} segundos</h2>;
};

// ============================================================
// 9. CLEANUP COM EVENT LISTENERS
// ============================================================

// Event listeners permitem acompanhar eventos externos,
// como redimensionamento da janela.
//
// addEventListener registra um listener.
//
// removeEventListener remove o listener registrado.
//
// É importante utilizar a mesma referência da função
// nos dois métodos.

const WindowExample = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			// Obtém a largura atual da janela.
			setWidth(window.innerWidth);
		};

		// Configura o evento externo.
		window.addEventListener("resize", handleResize);

		console.log("EVENT: Listener registrado");

		// CLEANUP:
		// Remove o listener quando ele não for mais necessário.
		return () => {
			window.removeEventListener("resize", handleResize);

			console.log("EVENT: Listener removido");
		};
	}, []);

	return <h2>Largura da janela: {width}px</h2>;
};

// ============================================================
// 10. CLEANUP COM REQUISIÇÕES HTTP
// ============================================================

// Também podemos iniciar requisições quando um componente
// precisa se sincronizar com informações de uma API.
//
// Entretanto, o componente pode ser desmontado antes
// de a resposta chegar.
//
// AbortController permite sinalizar o cancelamento
// de operações compatíveis, como fetch().

interface Product {
	id: number;
	title: string;
	price: number;
}

const FetchExample = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		// Cria um controlador para a requisição.
		const controller = new AbortController();

		// A função passada diretamente ao useEffect não deve
		// ser async, pois o React espera que ela retorne
		// undefined ou uma função de cleanup.
		//
		// Por isso criamos uma função assíncrona interna.
		const fetchProducts = async () => {
			try {
				setLoading(true);
				setError(null);

				const response = await fetch(
					"https://fakestoreapi.com/products",
					{
						// Conecta a requisição ao AbortController.
						signal: controller.signal,
					}
				);

				// fetch não lança automaticamente um erro
				// para respostas HTTP como 404 ou 500.
				if (!response.ok) {
					throw new Error("Erro ao buscar produtos");
				}

				const data: Product[] = await response.json();

				// Só atualiza o estado se a operação
				// não tiver sido cancelada.
				if (!controller.signal.aborted) {
					setProducts(data);
				}
			} catch (error) {
				// Um cancelamento esperado não deve ser tratado
				// como um erro normal para o usuário.
				if (!controller.signal.aborted) {
					console.error(error);
					setError("Não foi possível carregar os produtos");
				}
			} finally {
				if (!controller.signal.aborted) {
					setLoading(false);
				}
			}
		};

		fetchProducts();

		// CLEANUP:
		// Sinaliza o cancelamento da requisição quando
		// o componente for desmontado.
		return () => {
			controller.abort();

			console.log("FETCH: Requisição cancelada/limpa");
		};
	}, []);

	if (loading) {
		return <p>Carregando produtos...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<section>
			<h2>Produtos da API</h2>

			<ul>
				{products.slice(0, 5).map((product) => (
					<li key={product.id}>
						{product.title} — R$ {product.price}
					</li>
				))}
			</ul>
		</section>
	);
};

// ============================================================
// 11. CICLO DE VIDA EM COMPONENTES DE CLASSE
// ============================================================

// Antes dos Hooks, componentes de classe eram muito utilizados
// para trabalhar com estado e ciclo de vida.
//
// Os principais métodos são:
//
// componentDidMount():
// Executado após a montagem.
//
// componentDidUpdate():
// Executado após uma atualização.
//
// componentWillUnmount():
// Executado antes da desmontagem.
//
// O useEffect pode representar necessidades semelhantes,
// mas NÃO equivale diretamente aos três métodos.
// Seu objetivo principal é sincronizar sistemas externos.
//
// Componentes de função com Hooks são o padrão mais comum
// nos projetos React modernos.

interface ClassState {
	count: number;
}

class ClassLifecycleExample extends Component<object, ClassState> {
	// Estado inicial do componente de classe.
	state: ClassState = {
		count: 0,
	};

	// Executado após o componente ser montado.
	componentDidMount() {
		console.log("CLASS: componentDidMount");
	}

	// Executado após uma atualização.
	componentDidUpdate() {
		console.log("CLASS: componentDidUpdate");
	}

	// Executado antes da desmontagem.
	componentWillUnmount() {
		console.log("CLASS: componentWillUnmount");
	}

	// Em componentes de classe, utilizamos this.setState().
	incrementCount = () => {
		this.setState((prev) => ({
			count: prev.count + 1,
		}));
	};

	// Componentes de classe utilizam render() para
	// retornar os elementos React.
	render() {
		console.log("CLASS: render");

		return (
			<section>
				<h2>Componente de Classe</h2>

				<p>Contador: {this.state.count}</p>

				<button onClick={this.incrementCount}>
					Incrementar
				</button>
			</section>
		);
	}
}

// ============================================================
// 12. COMPONENTE PRINCIPAL — TESTANDO O CICLO DE VIDA
// ============================================================

// Aqui podemos montar e desmontar os componentes manualmente.
//
// Quando uma condição muda de false para true:
// O React monta o componente.
//
// Quando muda de true para false:
// O React desmonta o componente.
//
// Quando o componente é desmontado:
// - Seu estado local é descartado.
// - Seus efeitos ativos são limpos.
// - Os recursos externos devem ser liberados.
//
// Quando montado novamente:
// O componente inicia uma nova instância de seu ciclo de vida,
// com os estados inicializados novamente.

function App() {
	const [showLifecycle, setShowLifecycle] = useState(false);
	const [showTimer, setShowTimer] = useState(false);
	const [showWindow, setShowWindow] = useState(false);
	const [showFetch, setShowFetch] = useState(false);
	const [showClass, setShowClass] = useState(false);

	// Permite atualizar a prop recebida por LifecycleExample.
	const [title, setTitle] = useState("Ciclo de Vida");

	return (
		<main>
			<h1>Estudando Ciclo de Vida no React</h1>

			{/* EXEMPLO 1: Inicialização, montagem e atualização */}
			<section>
				<button
					onClick={() => setShowLifecycle((prev) => !prev)}
				>
					{showLifecycle ? "Desmontar" : "Montar"} componente
				</button>

				<button
					onClick={() => setTitle((prev) =>
						prev === "Ciclo de Vida"
							? "Título Atualizado"
							: "Ciclo de Vida"
					)}
				>
					Alterar prop title
				</button>

				{/* 
					Quando showLifecycle é false, o componente
					não é renderizado e pode ser desmontado.
				*/}
				{showLifecycle && <LifecycleExample title={title} />}
			</section>

			<hr />

			{/* EXEMPLO 2: Timer e cleanup */}
			<section>
				<button onClick={() => setShowTimer((prev) => !prev)}>
					{showTimer ? "Desmontar" : "Montar"} Timer
				</button>

				{showTimer && <TimerExample />}
			</section>

			<hr />

			{/* EXEMPLO 3: Event listener e cleanup */}
			<section>
				<button onClick={() => setShowWindow((prev) => !prev)}>
					{showWindow ? "Desmontar" : "Montar"} Window
				</button>

				{showWindow && <WindowExample />}
			</section>

			<hr />

			{/* EXEMPLO 4: Fetch e AbortController */}
			<section>
				<button onClick={() => setShowFetch((prev) => !prev)}>
					{showFetch ? "Desmontar" : "Montar"} Fetch
				</button>

				{showFetch && <FetchExample />}
			</section>

			<hr />

			{/* EXEMPLO 5: Métodos de classe */}
			<section>
				<button onClick={() => setShowClass((prev) => !prev)}>
					{showClass ? "Desmontar" : "Montar"} Classe
				</button>

				{showClass && <ClassLifecycleExample />}
			</section>
		</main>
	);
}

export default App;

// ============================================================
// 13. DIFERENÇAS ENTRE AS FORMAS DO useEffect
// ============================================================
//
// SEM ARRAY:
//
// useEffect(() => {
//     // Executa após cada renderização confirmada.
// });
//
//
// ARRAY VAZIO:
//
// useEffect(() => {
//     // Configuração inicial.
//
//     return () => {
//         // Limpeza na desmontagem.
//     };
// }, []);
//
//
// COM DEPENDÊNCIAS:
//
// useEffect(() => {
//     // Executa inicialmente e novamente
//     // quando alguma dependência mudar.
//
//     return () => {
//         // Limpa a configuração anterior.
//     };
// }, [count, title]);
//
//
// IMPORTANTE:
// Dependências são comparadas com Object.is.
//
// Não devemos remover dependências apenas para evitar
// a reexecução de um efeito ou eliminar avisos do ESLint.
//
// ============================================================
// 14. QUANDO UTILIZAR useEffect?
// ============================================================
//
// useEffect é apropriado principalmente quando precisamos
// sincronizar um componente React com algo externo.
//
// Exemplos:
//
// - Requisições HTTP quando essa estratégia for adequada.
// - Timers (setInterval e setTimeout).
// - Event listeners do navegador.
// - WebSockets.
// - Subscriptions.
// - Bibliotecas externas.
// - Sincronização com document.title.
//
// Nem tudo precisa de useEffect.
//
// Exemplo desnecessário:
//
// const [firstName, setFirstName] = useState("João");
// const [lastName, setLastName] = useState("Silva");
// const [fullName, setFullName] = useState("");
//
// useEffect(() => {
//     setFullName(`${firstName} ${lastName}`);
// }, [firstName, lastName]);
//
// MELHOR:
//
// const fullName = `${firstName} ${lastName}`;
//
// Como fullName pode ser calculado a partir dos estados
// existentes, não precisamos de outro estado nem de um efeito.
//
// ============================================================
// 15. STRICTMODE
// ============================================================
//
// Em projetos React + Vite, normalmente encontramos no main.tsx:
//
// <StrictMode>
//     <App />
// </StrictMode>
//
// Durante o desenvolvimento, o StrictMode pode executar
// configurações e cleanups adicionais para detectar erros.
//
// Exemplo de logs possíveis:
//
// EFFECT: Configuração
// CLEANUP: Limpeza
// EFFECT: Configuração
//
// Isso NÃO significa que os efeitos sempre executam duas
// vezes em produção.
//
// O objetivo é ajudar a identificar efeitos que não foram
// implementados com a limpeza necessária.
//
// Por isso, não devemos remover o StrictMode apenas
// para esconder execuções adicionais.
//
// ============================================================
// 16. RESUMO FINAL — CICLO DE VIDA
// ============================================================
//
// INICIALIZAÇÃO:
// O componente recebe props e prepara seu estado inicial.
//
// MONTAGEM:
// O React adiciona o componente à árvore e ao DOM.
//
// ATUALIZAÇÃO:
// Mudanças em estado, props ou contexto podem gerar
// novas renderizações.
// O React aplica ao DOM somente as alterações necessárias.
//
// DESMONTAGEM:
// O componente sai da árvore React.
// Seu estado local é descartado.
// Os cleanups de efeitos ativos são executados.
//
// COMPONENTES DE CLASSE:
//
// componentDidMount()    → Após a montagem.
// componentDidUpdate()   → Após uma atualização.
// componentWillUnmount() → Antes da desmontagem.
//
// COMPONENTES DE FUNÇÃO:
//
// useState()  → Armazena estado.
// useEffect() → Sincroniza com sistemas externos.
// cleanup     → Desfaz a configuração de um efeito.
//
// EXEMPLOS DE CLEANUP:
//
// setInterval       → clearInterval
// setTimeout        → clearTimeout
// addEventListener  → removeEventListener
// fetch             → AbortController
// WebSocket         → close()
//
// MODELO MENTAL:
//
// Componente entra na árvore
//            ↓
// Inicialização do estado
//            ↓
// Renderização inicial
//            ↓
// Montagem e atualização do DOM
//            ↓
// Configuração dos efeitos
//            ↓
// Estado/props/contexto mudam
//            ↓
// Nova renderização
//            ↓
// Atualização necessária do DOM
//            ↓
// Cleanup e nova configuração dos efeitos afetados
//            ↓
// Componente é desmontado
//            ↓
// Cleanup dos efeitos ativos
//            ↓
// Recursos externos são liberados
//
// CONCEITO CENTRAL:
//
// O React controla o ciclo de renderização e a identidade
// dos componentes.
//
// O desenvolvedor deve manter a renderização previsível,
// utilizar efeitos para sincronizações externas e realizar
// a limpeza dos recursos quando eles não forem mais necessários.
