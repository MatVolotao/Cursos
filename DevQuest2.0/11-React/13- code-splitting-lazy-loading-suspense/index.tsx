
import React, { Suspense, useState } from "react";

// ============================================================
// CODE SPLITTING, LAZY LOADING E SUSPENSE
// ============================================================
//
// CODE SPLITTING:
// Técnica utilizada para dividir o JavaScript da aplicação
// em arquivos menores, chamados chunks.
//
// LAZY LOADING:
// Estratégia de carregar um componente ou recurso somente
// quando ele for necessário.
//
// REACT.LAZY():
// Permite declarar um componente que será carregado
// de maneira assíncrona.
//
// SUSPENSE:
// Permite apresentar um conteúdo alternativo enquanto
// um componente está aguardando seu carregamento.
//
// FALLBACK:
// Conteúdo temporário exibido durante essa espera.
//
// IMPORTANTE:
// Como este exemplo utiliza apenas um arquivo App.tsx,
// vamos simular um carregamento assíncrono com uma Promise.
//
// Isso demonstra React.lazy() e Suspense, mas NÃO realiza
// Code Splitting real, pois não existe importação de outro
// módulo JavaScript.
//
// ============================================================
// 1. TIPAGEM DAS PROPS DO MODAL
// ============================================================

// O Modal recebe uma função onClose.
//
// Ela será executada quando o usuário clicar no botão Fechar.
//
// () => void significa:
// Uma função que não precisa receber argumentos e cujo
// retorno não será utilizado.

interface ModalProps {
	onClose: () => void;
}

// ============================================================
// 2. COMPONENTE MODAL
// ============================================================

// Este é o componente que desejamos apresentar sob demanda.
//
// No exemplo original da aula, ele ficava em Modal.tsx.
//
// Aqui ele foi colocado dentro de App.tsx para manter
// todo o conteúdo em um único arquivo.
//
// O Modal possui duas partes:
// - Fundo escuro que cobre a tela.
// - Janela centralizada com o conteúdo.

const Modal = ({ onClose }: ModalProps) => {
	return (
		<div style={modalStyles}>
			<div
				style={contentStyles}
				role="dialog"
				aria-modal="true"
				aria-labelledby="modal-title"
			>
				<h2 id="modal-title">Modal Carregado!</h2>

				<p>
					Esse é um exemplo de Modal carregado sob demanda.
				</p>

				{/* Fecha o Modal alterando o estado do App. */}
				<button onClick={onClose}>
					Fechar Modal
				</button>
			</div>
		</div>
	);
};

// ============================================================
// 3. ESTILIZAÇÃO DO MODAL
// ============================================================

// React.CSSProperties é um tipo fornecido pelo React.
//
// Permite criar objetos com propriedades CSS tipadas.
//
// A propriedade style do JSX recebe objetos JavaScript.
//
// Por isso utilizamos camelCase:
//
// background-color → backgroundColor
// justify-content  → justifyContent
// align-items      → alignItems

const modalStyles: React.CSSProperties = {
	// Mantém o fundo do Modal sobre a viewport.
	position: "fixed",

	top: 0,
	left: 0,

	// Ocupa toda a tela.
	width: "100%",
	height: "100%",

	// Fundo preto com 50% de opacidade.
	backgroundColor: "rgba(0, 0, 0, 0.5)",

	// Posiciona o conteúdo usando Flexbox.
	display: "flex",

	// Centraliza horizontalmente.
	justifyContent: "center",

	// Centraliza verticalmente.
	alignItems: "center",

	// Mantém o Modal acima de outros elementos comuns.
	zIndex: 1000,
};

const contentStyles: React.CSSProperties = {
	backgroundColor: "white",

	padding: "20px",

	borderRadius: "5px",

	maxWidth: "400px",

	// Evita ultrapassar a largura disponível em telas pequenas.
	width: "90%",

	color: "black",
};

// ============================================================
// 4. REACT.LAZY() — CARREGAMENTO SIMULADO
// ============================================================

// Na aula original:
//
// const Modal = React.lazy(
//     () => import("./components/Modal")
// );
//
// Essa seria a abordagem para um Code Splitting real,
// utilizando um arquivo Modal.tsx separado.
//
// Entretanto, como estamos mantendo o Modal neste App.tsx,
// utilizaremos uma Promise para simular o carregamento.
//
// React.lazy() espera uma função que retorne uma Promise.
//
// Essa Promise deve resolver para um objeto contendo
// uma propriedade default com o componente React.

const LazyModal = React.lazy(
	() =>
		new Promise<{ default: typeof Modal }>((resolve) => {
			// Simula uma espera de 1500 milissegundos.
			//
			// O setTimeout serve apenas para demonstração.
			// Em um projeto real, import() faria o carregamento.
			setTimeout(() => {
				// Quando a espera termina, a Promise é resolvida.
				//
				// React.lazy() recebe um objeto com a propriedade
				// default apontando para o componente Modal.
				resolve({
					default: Modal,
				});
			}, 1500);
		})
);

// ============================================================
// 5. COMPONENTE PRINCIPAL
// ============================================================

function App() {
	// Controla se o Modal deve aparecer.
	//
	// false → Modal fechado.
	// true  → Modal aberto.
	//
	// O estado começa como false.
	const [isModalOpen, setIsModalOpen] = useState(false);

	// ========================================================
	// 6. ABRINDO E FECHANDO O MODAL
	// ========================================================

	// A função toggleModal inverte o estado atual.
	//
	// false → true
	// true  → false
	//
	// prev representa o valor anterior do estado.
	//
	// !prev inverte o booleano recebido.
	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	return (
		<div>
			<h1>Exemplo de Lazy Loading com Modal</h1>

			{/* 
				O botão executa toggleModal ao receber um clique.

				Inicialmente:

				isModalOpen = false

				Após o clique:

				toggleModal()
				    ↓
				setIsModalOpen(true)
				    ↓
				React renderiza novamente
			*/}
			<button onClick={toggleModal}>
				Abrir Modal
			</button>

			{/* =================================================
			    7. SUSPENSE
			    =================================================

			    Suspense define uma região que pode aguardar
			    o carregamento de um componente lazy.

			    fallback é o conteúdo apresentado enquanto
			    o componente está suspenso.

			    Neste exemplo, a primeira tentativa de renderizar
			    LazyModal inicia uma Promise com espera de 1,5 s.

			    Durante essa espera, aparece:

			    "Carregando Modal..."

			    Quando a Promise resolve, o React renderiza
			    o componente Modal.
			*/}

			<Suspense fallback={<p>Carregando Modal...</p>}>
				{/* 
					RENDERIZAÇÃO CONDICIONAL

					&& representa o operador lógico AND.

					Se isModalOpen for true, React tentará
					renderizar o componente LazyModal.

					Se for false, o componente não será renderizado.

					IMPORTANTE:

					&& controla SE o Modal aparece.

					React.lazy() controla o carregamento
					assíncrono do componente.

					Suspense apresenta o fallback durante
					a suspensão da renderização.
				*/}
				{isModalOpen && (
					<LazyModal onClose={toggleModal} />
				)}
			</Suspense>
		</div>
	);
}

export default App;

// ============================================================
// 8. FLUXO COMPLETO DO EXEMPLO
// ============================================================
//
// 1. O React inicia o componente App.
//
// 2. isModalOpen começa com false.
//
// 3. O Modal não é renderizado.
//
// 4. O usuário clica em "Abrir Modal".
//
// 5. toggleModal() é executada.
//
// 6. setIsModalOpen altera o estado para true.
//
// 7. O React renderiza App novamente.
//
// 8. A expressão condicional tenta renderizar LazyModal.
//
// 9. React.lazy() executa a função de carregamento.
//
// 10. Uma Promise é criada.
//
// 11. setTimeout simula uma espera de 1,5 segundo.
//
// 12. Enquanto a Promise está pendente, Suspense apresenta:
//
//     Carregando Modal...
//
// 13. Após 1,5 segundo, resolve() é executado.
//
// 14. A Promise é resolvida com:
//
//     { default: Modal }
//
// 15. React.lazy() recebe o componente.
//
// 16. O React renderiza o Modal.
//
// 17. O usuário visualiza a janela.
//
// ============================================================
// 9. O QUE ACONTECE AO FECHAR E ABRIR NOVAMENTE?
// ============================================================
//
// Quando o usuário clica em "Fechar Modal":
//
// onClose()
//     ↓
// toggleModal()
//     ↓
// isModalOpen = false
//     ↓
// LazyModal deixa de ser renderizado
//     ↓
// Modal é desmontado
//
// Quando o usuário abre novamente:
//
// isModalOpen = true
//     ↓
// React renderiza LazyModal
//     ↓
// Componente já foi carregado anteriormente
//     ↓
// Modal aparece sem repetir a espera simulada
//
// Isso acontece porque React.lazy() guarda em cache
// o resultado do carregamento.
//
// IMPORTANTE:
//
// O código estar carregado não significa que o estado
// interno do componente será preservado.
//
// Se o Modal tiver seu próprio useState e for desmontado,
// esse estado normalmente será reinicializado ao montar
// o componente novamente.
//
// ============================================================
// 10. DIFERENÇA ENTRE O EXEMPLO E O CODE SPLITTING REAL
// ============================================================
//
// EXEMPLO EM UM ARQUIVO:
//
// React.lazy(() => new Promise(...))
//
// - Simula um carregamento assíncrono.
// - Permite estudar o Suspense e seu fallback.
// - Não separa o Modal em outro chunk.
// - O código do Modal já faz parte do módulo App.
//
// EXEMPLO REAL:
//
// React.lazy(() => import("./components/Modal"))
//
// - Utiliza importação dinâmica.
// - Permite ao Vite criar chunks separados.
// - Carrega o módulo quando ele for necessário.
// - Exige que Modal esteja em outro módulo.
//
// ============================================================
// 11. SUSPENSE NÃO SUBSTITUI O LOADING DE API
// ============================================================
//
// O Suspense deste exemplo aguarda a Promise utilizada
// pelo React.lazy().
//
// Ele não detecta automaticamente qualquer operação
// assíncrona executada pelo componente.
//
// Por exemplo, um fetch iniciado dentro de useEffect
// normalmente utiliza um estado loading próprio.
//
// React.lazy():
// Carregamento do código do componente.
//
// useEffect() + fetch():
// Pode realizar requisições aos dados necessários.
//
// Suspense:
// Apresenta fallback quando uma região suspende.
//
// ============================================================
// 12. RESUMO FINAL
// ============================================================
//
// CODE SPLITTING:
// Divide o código JavaScript em partes menores.
//
// LAZY LOADING:
// Adia o carregamento até que seja necessário.
//
// REACT.LAZY():
// Declara um componente carregado de forma assíncrona.
//
// PROMISE:
// Representa uma operação assíncrona que pode ser resolvida
// ou rejeitada.
//
// SUSPENSE:
// Define uma região que pode aguardar conteúdos suspensos.
//
// FALLBACK:
// Interface alternativa apresentada durante a espera.
//
// USESTATE:
// Controla a visibilidade do Modal.
//
// &&:
// Realiza a renderização condicional.
//
// EXPORT DEFAULT:
// É a propriedade esperada por React.lazy() no módulo
// carregado dinamicamente.
//
// ============================================================
// CONCEITO CENTRAL
// ============================================================
//
// Usuário clica
//       ↓
// isModalOpen = true
//       ↓
// React tenta renderizar LazyModal
//       ↓
// React.lazy() inicia a Promise
//       ↓
// Suspense apresenta o fallback
//       ↓
// Promise é resolvida
//       ↓
// Modal é renderizado
//
// Neste arquivo, a espera é simulada para fins de estudo.
//
// Para realizar Code Splitting real, utilizamos
// import() de outro módulo, permitindo ao Vite
// gerar os chunks durante o build.
