
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";

// ============================================================
// TANSTACK QUERY — CONSULTA DE POSTS COM CUSTOM HOOK
// ============================================================
//
// TanStack Query é uma biblioteca para gerenciar
// dados assíncronos, principalmente dados de APIs.
//
// Ela fornece recursos como:
//
// - Execução de consultas.
// - Gerenciamento de cache.
// - Controle de carregamento.
// - Tratamento de erros.
// - Reutilização de dados.
// - Atualizações em segundo plano.
//
// Neste exemplo, utilizamos a JSONPlaceholder API
// para buscar e apresentar uma lista de publicações.
//
// O exemplo original da aula utiliza cinco arquivos:
//
// main.tsx
// types/types.ts
// hooks/usePosts.ts
// components/Posts/index.tsx
// App.tsx
//
// Aqui reunimos a lógica em um único App.tsx
// para facilitar a consulta e o estudo.
//
// Instalação:
//
// npm install @tanstack/react-query

// ============================================================
// 1. TIPAGEM DOS DADOS — types.ts
// ============================================================

// Interface que representa uma publicação.
//
// Os dados serão retornados pela JSONPlaceholder API.
//
// id:
// Identificador numérico da publicação.
//
// title:
// Título da publicação.
//
// body:
// Conteúdo textual da publicação.

export interface Post {
	id: number;
	title: string;
	body: string;
}

// Interface apresentada pelo professor para representar
// os dados de uma nova publicação.
//
// Diferentemente de Post, NewPost não possui id.
//
// Isso faz sentido porque, em um cadastro, o identificador
// pode ser gerado pelo backend.
//
// IMPORTANTE:
// NewPost ainda não é utilizada neste exemplo.
// A aula apresentada trabalha apenas com busca de posts.

export interface NewPost {
	title: string;
	body: string;
}

// ============================================================
// 2. QUERY CLIENT — main.tsx
// ============================================================

// QueryClient é o objeto central do TanStack Query.
//
// Ele gerencia consultas, cache e configurações.
//
// Utilizamos new QueryClient() para criar uma instância
// que será compartilhada pela aplicação.
//
// Essa instância é declarada fora dos componentes para
// evitar criar um novo cliente em cada renderização.
//
// Se criássemos um novo QueryClient constantemente,
// poderíamos perder o cache associado ao anterior.

const queryClient = new QueryClient();

// ============================================================
// 3. FUNÇÃO DE BUSCA — usePosts.ts
// ============================================================

// fetchPosts é uma função assíncrona responsável
// por buscar publicações na API.
//
// Essa função utiliza fetch() normalmente.
//
// O TanStack Query não substitui o fetch.
// Ele gerencia a execução da função e os dados retornados.

// ------------------------------------------------------------
// ENTENDENDO A ASSINATURA
// ------------------------------------------------------------
//
// async:
// Indica que a função é assíncrona.
//
// limit: number = 10:
// O argumento limit deve ser um número.
//
// Caso a função seja chamada sem argumento,
// o valor padrão será 10.
//
// Promise<Post[]>:
// A função retorna uma Promise.
//
// Quando resolvida, esperamos receber um array de Post.
//
// Post[] significa array de objetos do tipo Post.
//
// Exemplos:
//
// fetchPosts()   → Solicita 10 publicações.
// fetchPosts(5)  → Solicita 5 publicações.
// fetchPosts(20) → Solicita 20 publicações.

const fetchPosts = async (
	limit: number = 10
): Promise<Post[]> => {
	// ========================================================
	// 4. REQUISIÇÃO HTTP
	// ========================================================

	// Executa uma requisição GET utilizando fetch().
	//
	// A URL utiliza uma template string.
	//
	// ${limit} insere o valor da variável dentro do texto.
	//
	// Exemplo:
	//
	// limit = 10
	//
	// URL final:
	//
	// https://jsonplaceholder.typicode.com/posts?_limit=10
	//
	// O parâmetro _limit informa à API a quantidade
	// máxima de publicações solicitadas.
	//
	// await espera a resposta da operação assíncrona.

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
	);

	// ========================================================
	// 5. TRATAMENTO DE ERROS
	// ========================================================

	// response.ok é um booleano.
	//
	// true:
	// A resposta HTTP indica sucesso (status 200 a 299).
	//
	// false:
	// A resposta possui um status HTTP fora dessa faixa.
	//
	// fetch() não lança automaticamente um erro
	// apenas porque a API respondeu com 404 ou 500.
	//
	// Por isso verificamos response.ok.
	//
	// Se a resposta não for válida, lançamos um erro.
	//
	// Esse erro poderá ser gerenciado pelo TanStack Query.

	if (!response.ok) {
		throw new Error("Erro ao buscar os posts");
	}

	// ========================================================
	// 6. CONVERSÃO DA RESPOSTA
	// ========================================================

	// response.json() lê o corpo da resposta e
	// converte o JSON em um valor JavaScript.
	//
	// A função foi tipada como Promise<Post[]>,
	// portanto esperamos receber um array de posts.
	//
	// IMPORTANTE:
	// A interface Post realiza verificação estática.
	// Ela não valida automaticamente a resposta da API
	// durante a execução.
	//
	// Em aplicações que precisam validar dados externos,
	// poderíamos utilizar uma biblioteca como Zod.

	return response.json();
};

// ============================================================
// 7. CUSTOM HOOK — usePosts.ts
// ============================================================

// usePosts é um Hook personalizado.
//
// Um custom hook permite encapsular e reutilizar
// lógica que utiliza Hooks do React ou de outras bibliotecas.
//
// Neste exemplo, ele reúne:
//
// - queryKey.
// - queryFn.
// - Configurações de refetch.
// - Configuração de staleTime.
//
// Assim, os componentes não precisam repetir
// toda a configuração do TanStack Query.
//
// EXEMPLOS:
//
// usePosts(5)
// → Busca até 5 publicações.
//
// usePosts(10)
// → Busca até 10 publicações.
//
// usePosts(20)
// → Busca até 20 publicações.

// ------------------------------------------------------------
// POR QUE O NOME COMEÇA COM use?
// ------------------------------------------------------------
//
// Funções que utilizam Hooks devem seguir as regras
// de Hooks do React.
//
// A convenção é iniciar seu nome com "use".
//
// Isso indica que usePosts deve ser utilizado
// no nível superior de componentes ou de outros Hooks.
//
// Não devemos chamar usePosts dentro de condições,
// loops ou funções comuns executadas arbitrariamente.

export function usePosts(limit: number) {
	// Retornamos diretamente o resultado do useQuery().
	//
	// Isso significa que usePosts() disponibilizará:
	//
	// data
	// error
	// isLoading
	// isPending
	// isFetching
	// isError
	// refetch
	//
	// Entre outras propriedades.
	//
	// Não precisamos criar manualmente esses estados
	// porque TanStack Query já os gerencia.

	return useQuery<Post[]>({
		// ====================================================
		// 8. queryKey
		// ====================================================

		// queryKey identifica a consulta dentro do cache.
		//
		// Ela deve ser um array no nível principal.
		//
		// Aqui utilizamos:
		//
		// ["posts", limit]
		//
		// "posts":
		// Identifica o tipo de dado consultado.
		//
		// limit:
		// Identifica a quantidade solicitada.
		//
		// Exemplos:
		//
		// usePosts(5)
		// → ["posts", 5]
		//
		// usePosts(10)
		// → ["posts", 10]
		//
		// São consultas diferentes.
		//
		// Isso permite que TanStack Query mantenha
		// resultados separados no cache.
		//
		// REGRA:
		// Se uma variável altera quais dados buscamos,
		// normalmente ela deve fazer parte da queryKey.

		queryKey: ["posts", limit],

		// ====================================================
		// 9. queryFn
		// ====================================================

		// queryFn é a função responsável por obter os dados.
		//
		// TanStack Query executará essa função conforme
		// as necessidades da consulta.
		//
		// Utilizamos:
		//
		// () => fetchPosts(limit)
		//
		// Isso cria uma arrow function que será chamada
		// quando a consulta precisar executar a busca.
		//
		// Não utilizamos diretamente:
		//
		// queryFn: fetchPosts(limit)
		//
		// Porque isso executaria fetchPosts imediatamente
		// e passaria sua Promise, em vez de uma função.

		queryFn: () => fetchPosts(limit),

		// ====================================================
		// 10. refetchOnWindowFocus
		// ====================================================

		// Controla o refetch automático quando o navegador
		// volta a receber foco.
		//
		// Exemplo:
		//
		// Usuário abre a aplicação.
		// Depois muda para outra aba.
		// Em seguida retorna à aplicação.
		//
		// Por padrão, TanStack Query pode realizar
		// uma nova consulta se os dados estiverem stale.
		//
		// Com false, desabilitamos esse gatilho de refetch.
		//
		// IMPORTANTE:
		// Isso não impede todos os outros tipos de refetch.

		refetchOnWindowFocus: false,

		// ====================================================
		// 11. refetchOnReconnect
		// ====================================================

		// Controla o refetch automático associado
		// ao restabelecimento da conexão de rede.
		//
		// Exemplo:
		//
		// Internet desconecta.
		// Depois a conexão retorna.
		//
		// Com false, desabilitamos o refetch automático
		// provocado especificamente por esse evento.
		//
		// Outros gatilhos ainda podem realizar consultas.

		refetchOnReconnect: false,

		// ====================================================
		// 12. staleTime
		// ====================================================

		// staleTime define por quanto tempo os dados
		// são considerados atualizados (fresh).
		//
		// 1000 milissegundos = 1 segundo.
		// 1000 * 60 = 1 minuto.
		// 1000 * 60 * 5 = 5 minutos.
		//
		// Durante cinco minutos, os dados são considerados
		// fresh em relação ao horário da última atualização.
		//
		// Após esse período, passam a ser considerados stale.
		//
		// stale NÃO significa que os dados foram apagados.
		//
		// Também NÃO significa que uma requisição
		// acontecerá automaticamente ao completar 5 minutos.
		//
		// Uma nova busca depende de algum gatilho permitido.
		//
		// Exemplos:
		// - Nova montagem de um observador da consulta.
		// - Refetch manual.
		// - Invalidação da consulta.
		//
		// O staleTime também não bloqueia chamadas manuais
		// a refetch().

		staleTime: 1000 * 60 * 5,
	});
}

// ============================================================
// 13. COMPONENTE POSTS — components/Posts/index.tsx
// ============================================================

// O componente Posts é responsável pela interface.
//
// Ele não precisa executar fetch() diretamente.
//
// Também não precisa criar useState ou useEffect
// apenas para controlar a requisição.
//
// Toda essa lógica foi encapsulada dentro de usePosts.
//
// Isso separa:
//
// usePosts:
// Responsável por gerenciar a consulta.
//
// Posts:
// Responsável por apresentar os dados.

export function Posts() {
	// ========================================================
	// 14. UTILIZANDO O CUSTOM HOOK
	// ========================================================

	// usePosts(10) solicita até 10 publicações.
	//
	// O valor 10 é enviado ao parâmetro limit do hook.
	//
	// O hook utiliza esse valor:
	//
	// queryKey: ["posts", 10]
	//
	// queryFn: () => fetchPosts(10)
	//
	// A desestruturação extrai propriedades do resultado
	// retornado pelo TanStack Query.

	const { data, isLoading, error } = usePosts(10);

	// ========================================================
	// 15. ESTADO DE CARREGAMENTO
	// ========================================================

	// isLoading indica que a consulta ainda não possui dados
	// e está realizando sua primeira busca.
	//
	// Em TanStack Query v5:
	//
	// isLoading = isPending && isFetching
	//
	// Neste exemplo, a consulta é iniciada imediatamente.
	//
	// Enquanto estiver carregando, mostramos uma mensagem.
	//
	// O return antecipado impede que o componente continue
	// até a renderização da lista nessa execução.

	if (isLoading) {
		return <p>Carregando...</p>;
	}

	// ========================================================
	// 16. TRATAMENTO DE ERROS
	// ========================================================

	// error contém o erro associado à consulta.
	//
	// Normalmente será null enquanto não existir um erro.
	//
	// Se fetchPosts lançar um erro e a consulta falhar,
	// podemos apresentar sua mensagem.
	//
	// error.message contém a mensagem utilizada em:
	//
	// throw new Error("Erro ao buscar os posts");
	//
	// IMPORTANTE:
	// Com configurações de retry, o TanStack Query
	// pode tentar novamente antes de apresentar
	// o erro definitivo na interface.

	if (error) {
		return (
			<p>
				Ocorreu um erro ao buscar os posts: {error.message}
			</p>
		);
	}

	// ========================================================
	// 17. RENDERIZAÇÃO DOS POSTS
	// ========================================================

	return (
		<section>
			<h1>Lista de Posts</h1>

			<ul>
				{/* 
					data contém o resultado da consulta.

					Como utilizamos:

					useQuery<Post[]>()

					O TypeScript entende que os dados,
					quando disponíveis, são um array de Post.

					Entretanto, data pode ser undefined
					enquanto não existe um resultado disponível.

					Por isso o professor utilizou:

					data?.map()

					O operador ?. é chamado optional chaining.

					Ele evita executar o map() caso data
					seja null ou undefined.

					O .map() percorre o array e retorna
					um elemento JSX para cada publicação.
				*/}

				{data?.map((post) => (
					// key fornece uma identidade estável
					// para cada elemento da lista.
					<li key={post.id}>
						{/* Título da publicação. */}
						<h3>{post.title}</h3>

						{/* Conteúdo da publicação. */}
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</section>
	);
}

// ============================================================
// 18. COMPONENTE APP — App.tsx
// ============================================================

// O componente App organiza a interface principal.
//
// Como a lógica de consulta já está dentro do custom hook
// e a renderização está no componente Posts,
// App precisa apenas utilizar <Posts />.
//
// No código original da aula, QueryClientProvider
// foi configurado no main.tsx.
//
// Aqui colocamos o Provider no próprio App.tsx
// para manter todos os exemplos em um único arquivo.

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Posts />
		</QueryClientProvider>
	);
}

export default App;

// ============================================================
// 19. FLUXO COMPLETO DA APLICAÇÃO
// ============================================================
//
// React renderiza App
//           ↓
// QueryClientProvider fornece o QueryClient
//           ↓
// App renderiza Posts
//           ↓
// Posts chama usePosts(10)
//           ↓
// usePosts configura useQuery<Post[]>()
//           ↓
// queryKey: ["posts", 10]
//           ↓
// TanStack Query verifica o cache
//           ↓
// Existem dados disponíveis?
//        /             \
//      NÃO             SIM
//       ↓               ↓
// Executa queryFn   Reutiliza dados
//       ↓               ↓
// fetchPosts(10)     Verifica se estão fresh ou stale
//       ↓               ↓
// fetch()             Pode realizar refetch
//       ↓               ↓
// API responde          ↓
//       ↓               ↓
// Cache recebe os dados
//           ↓
// data fica disponível
//           ↓
// Posts executa data?.map()
//           ↓
// React apresenta os elementos JSX
//
// ============================================================
// 20. DIFERENÇA ENTRE fetchPosts E usePosts
// ============================================================
//
// fetchPosts():
//
// É uma função assíncrona comum.
// Executa a requisição HTTP.
// Recebe um limite.
// Retorna uma Promise com dados da API.
//
// ------------------------------------------------------------
//
// usePosts():
//
// É um custom hook.
// Utiliza useQuery().
// Define a queryKey.
// Define a queryFn.
// Configura refetch e staleTime.
// Retorna os estados e os dados da consulta.
//
// ------------------------------------------------------------
//
// Posts():
//
// É um componente React.
// Chama usePosts(10).
// Controla o conteúdo apresentado conforme o resultado.
// Renderiza os posts.
//
// ============================================================
// 21. CACHE E QUERYKEY
// ============================================================
//
// A queryKey é a identidade da consulta.
//
// Exemplos:
//
// ["posts", 5]
// → Consulta de 5 posts.
//
// ["posts", 10]
// → Consulta de 10 posts.
//
// ["posts", 20]
// → Consulta de 20 posts.
//
// TanStack Query pode manter os resultados
// dessas consultas separadamente no cache.
//
// Se um componente utilizar novamente uma consulta
// cuja chave já possui dados no cache, esses dados
// poderão ser reutilizados.
//
// O cache não significa que a API nunca mais
// será consultada.
//
// A necessidade de refetch depende do staleTime,
// das configurações e dos eventos que ocorrerem.
//
// ============================================================
// 22. staleTime VS gcTime
// ============================================================
//
// staleTime:
// Define por quanto tempo os dados são considerados fresh.
//
// Exemplo:
//
// staleTime: 1000 * 60 * 5
//
// Dados considerados fresh por cinco minutos.
//
// ------------------------------------------------------------
//
// gcTime:
// Define por quanto tempo uma consulta INATIVA
// pode permanecer em cache.
//
// Por padrão, no navegador, o TanStack Query v5
// utiliza cinco minutos para consultas inativas.
//
// Uma consulta normalmente fica inativa quando
// nenhum componente está observando seu resultado.
//
// ------------------------------------------------------------
//
// RESUMO:
//
// staleTime → Frescor dos dados.
//
// gcTime → Permanência de consultas inativas no cache.
//
// Não são a mesma configuração.
//
// ============================================================
// 23. isLoading, isPending E isFetching
// ============================================================
//
// isPending:
// A consulta ainda não possui dados.
//
// isFetching:
// A função de busca está sendo executada.
//
// isLoading:
// isPending e isFetching são verdadeiros ao mesmo tempo.
//
// Neste exemplo, isLoading é adequado para apresentar
// o estado de carregamento inicial.
//
// Se estivéssemos utilizando consultas desabilitadas
// ou dependentes de algum dado, seria importante
// analisar cuidadosamente esses estados.
//
// IMPORTANTE:
// É possível ter dados em cache e estar buscando
// uma atualização ao mesmo tempo.
//
// Nesse caso:
//
// isPending = false
// isFetching = true
//
// ============================================================
// 24. REGRAS DOS HOOKS
// ============================================================
//
// usePosts() utiliza useQuery().
//
// Por isso, usePosts é um Hook personalizado.
//
// Devemos chamá-lo no nível superior de um componente
// React ou de outro Hook.
//
// Exemplo correto:
//
// function Posts() {
//     const query = usePosts(10);
//     // ...
// }
//
// Exemplo incorreto:
//
// function Posts() {
//     if (algumaCondicao) {
//         usePosts(10);
//     }
// }
//
// Para controlar quando uma consulta deve ser executada,
// podemos utilizar opções do TanStack Query,
// como enabled, em vez de chamar Hooks condicionalmente.
//
// ============================================================
// 25. OBSERVAÇÕES IMPORTANTES DA AULA
// ============================================================
//
// 1. O QueryClientProvider precisa envolver os componentes
//    que utilizam TanStack Query.
//
// 2. queryKey identifica a consulta.
//
// 3. queryFn informa como os dados serão obtidos.
//
// 4. fetchPosts é uma função assíncrona comum.
//
// 5. usePosts é um custom hook que encapsula useQuery.
//
// 6. Posts é responsável pela interface.
//
// 7. O limite deve participar da queryKey porque altera
//    os dados solicitados.
//
// 8. staleTime não determina o momento exato de uma requisição.
//
// 9. refetchOnWindowFocus: false desabilita o refetch
//    associado ao retorno do foco à janela.
//
// 10. refetchOnReconnect: false desabilita o refetch
//     associado ao restabelecimento da rede.
//
// 11. Esses dois valores não impedem todos os refetches.
//
// 12. NewPost foi declarada, mas não utilizada
//     no exemplo apresentado.
//
// ============================================================
// RESUMO FINAL
// ============================================================
//
// QueryClient:
// Gerencia o cache e as consultas da aplicação.
//
// QueryClientProvider:
// Disponibiliza o QueryClient aos componentes.
//
// Post:
// Interface que descreve uma publicação.
//
// NewPost:
// Interface para dados de uma nova publicação.
//
// fetchPosts():
// Função responsável por buscar publicações da API.
//
// usePosts():
// Custom hook que encapsula o useQuery.
//
// useQuery():
// Hook do TanStack Query que gerencia consultas.
//
// queryKey:
// Identifica os dados no cache.
//
// queryFn:
// Informa como os dados devem ser buscados.
//
// refetchOnWindowFocus:
// Controla o refetch associado ao foco da janela.
//
// refetchOnReconnect:
// Controla o refetch associado à reconexão de rede.
//
// staleTime:
// Define por quanto tempo os dados são considerados fresh.
//
// data:
// Contém os dados disponíveis da consulta.
//
// isLoading:
// Indica carregamento inicial em andamento.
//
// error:
// Contém informações sobre um erro da consulta.
//
// data?.map():
// Percorre os dados quando estiverem disponíveis,
// produzindo elementos JSX.
//
// ============================================================
// CONCEITO CENTRAL
// ============================================================
//
// O componente Posts não precisa saber como
// a requisição HTTP foi implementada.
//
// Ele apenas utiliza:
//
// const { data, isLoading, error } = usePosts(10);
//
// O hook personalizado encapsula a consulta.
//
// O TanStack Query gerencia seu resultado e cache.
//
// A função fetchPosts executa a requisição HTTP.
//
// Essa separação torna o código organizado,
// reutilizável e mais simples de manter.
