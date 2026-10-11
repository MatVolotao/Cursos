
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	NavLink,
	Outlet,
	useParams,
	useNavigate,
} from "react-router-dom";

// ============================================================
// REACT ROUTER DOM + useParams()
// ============================================================
//
// React Router DOM permite criar diferentes páginas em uma
// aplicação React, associando URLs a componentes.
//
// Exemplos:
//
// /             → Home
// /about        → About
// /products     → Products
// /product/1    → ProductDetail (produto de ID 1)
// /product/2    → ProductDetail (produto de ID 2)
//
// A navegação interna pode acontecer sem recarregar todo o
// documento HTML, característica comum das aplicações SPA.
//
// ============================================================
// 1. TIPAGEM E DADOS DOS PRODUTOS
// ============================================================

// Define quais propriedades cada produto deve possuir.
// O TypeScript verifica se os objetos respeitam essa estrutura.
interface Product {
	id: number;
	name: string;
	price: number;
	image: string;
}

// Array utilizado para simular os produtos de uma loja.
// Em uma aplicação real, esses dados poderiam vir de uma API.
const products: Product[] = [
	{
		id: 1,
		name: "Camiseta Preta",
		price: 89,
		image: "https://placehold.co/300x300?text=Preta",
	},
	{
		id: 2,
		name: "Camiseta Roxa",
		price: 99,
		image: "https://placehold.co/300x300?text=Roxa",
	},
	{
		id: 3,
		name: "Camiseta Branca",
		price: 79,
		image: "https://placehold.co/300x300?text=Branca",
	},
];

// ============================================================
// 2. LAYOUT COMPARTILHADO
// ============================================================

// O Layout contém os elementos que permanecem entre as páginas,
// como Header, menu de navegação e Footer.
//
// O <Outlet /> indica onde a rota filha será renderizada.
//
// Exemplo:
//
// Layout
// ├── Header
// ├── Outlet → Home, About, Products ou ProductDetail
// └── Footer
//
// Ao navegar, o conteúdo do Outlet muda conforme a rota,
// enquanto os elementos compartilhados permanecem.

const Layout = () => {
	return (
		<>
			<header>
				<h1>Minha Loja</h1>

				<nav>
					{/* 
						Link cria links de navegação interna.

						A propriedade "to" define a URL de destino.

						Diferentemente de uma navegação HTML tradicional,
						o React Router pode atualizar a página sem
						recarregar todo o documento.
					*/}
					<Link to="/">Home</Link>{" | "}

					<Link to="/about">Sobre</Link>{" | "}

					{/*
						NavLink funciona de forma semelhante ao Link,
						mas também permite identificar a rota ativa.

						isActive é um booleano fornecido pelo NavLink.
						Ele indica se o link corresponde à rota atual.
					*/}
					<NavLink
						to="/products"
						className={({ isActive }) =>
							isActive ? "active" : ""
						}
					>
						Produtos
					</NavLink>
				</nav>
			</header>

			<hr />

			<main>
				{/* Renderiza o componente da rota filha correspondente. */}
				<Outlet />
			</main>

			<hr />

			<footer>
				<p>Minha Loja © 2026</p>
			</footer>
		</>
	);
};

// ============================================================
// 3. PÁGINAS ESTÁTICAS
// ============================================================

// A página Home será associada à rota "/".
const Home = () => {
	return (
		<section>
			<h2>Bem-vindo à nossa loja!</h2>

			<p>Conheça nossos produtos.</p>

			{/* Navega para a página de listagem de produtos. */}
			<Link to="/products">Ver produtos</Link>
		</section>
	);
};

// A página About será associada à rota "/about".
const About = () => {
	return (
		<section>
			<h2>Sobre nós</h2>

			<p>Somos uma loja especializada em camisetas.</p>
		</section>
	);
};

// ============================================================
// 4. LISTAGEM DE PRODUTOS
// ============================================================

// Esta página apresenta todos os produtos disponíveis.
//
// O .map() percorre o array e cria um elemento para cada produto.
//
// O Link utiliza o ID do produto para gerar uma URL dinâmica:
//
// product.id = 1 → /product/1
// product.id = 2 → /product/2
// product.id = 3 → /product/3

const Products = () => {
	return (
		<section>
			<h2>Nossos produtos</h2>

			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<img
							src={product.image}
							alt={product.name}
							width={150}
						/>

						<h3>{product.name}</h3>

						<p>R$ {product.price}</p>

						{/*
							Template literal permite inserir JavaScript
							dentro de uma string utilizando ${}.

							Se product.id for 2:

							`/product/${product.id}`

							Resultado: "/product/2"

							A rota dinâmica "product/:id" reconhecerá
							esse endereço.
						*/}
						<Link to={`/product/${product.id}`}>
							Ver detalhes
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

// ============================================================
// 5. PÁGINA DINÂMICA — useParams()
// ============================================================

// O mesmo componente será utilizado para diferentes produtos.
//
// /product/1 → detalhes do produto 1
// /product/2 → detalhes do produto 2
// /product/3 → detalhes do produto 3
//
// Não precisamos criar um componente para cada produto.
//
// A rota será configurada como:
//
// <Route path="product/:id" element={<ProductDetail />} />
//
// O caractere ":" indica um parâmetro dinâmico.
// O nome do parâmetro, neste exemplo, é "id".

const ProductDetail = () => {
	// useParams() recupera os parâmetros da rota atual.
	//
	// Exemplo:
	// URL: /product/2
	//
	// useParams() retorna um objeto semelhante a:
	// { id: "2" }
	//
	// A desestruturação { id } extrai a propriedade id.
	//
	// O generic <"id"> informa ao TypeScript qual parâmetro
	// esperamos encontrar na rota.
	//
	// IMPORTANTE:
	// O valor recebido é string | undefined, e não number.
	const { id } = useParams<"id">();

	// useNavigate() permite navegar através de uma função.
	//
	// É útil quando precisamos redirecionar o usuário após
	// alguma ação, como salvar dados ou concluir um formulário.
	const navigate = useNavigate();

	// Number(id) converte o parâmetro da URL para número.
	//
	// Exemplo:
	// id = "2"        → string
	// Number(id) = 2  → number
	//
	// Isso é necessário porque product.id foi tipado como number.
	//
	// O operador === compara valor e tipo:
	//
	// 2 === "2" → false
	// 2 === 2   → true
	//
	// O .find() procura o primeiro produto que atende à condição.
	//
	// Diferentemente do .map(), ele não retorna um novo array.
	// Retorna o objeto encontrado ou undefined.
	const productDetail = products.find(
		(product) => product.id === Number(id)
	);

	// Se a URL for /product/999 e não existir esse produto,
	// o .find() retornará undefined.
	//
	// !productDetail verifica se o objeto não existe.
	//
	// Esse if realiza um early return (retorno antecipado).
	// Se o produto não existir, o componente retorna a mensagem
	// e não executa a renderização dos detalhes abaixo.
	if (!productDetail) {
		return (
			<section>
				<h2>Produto não encontrado</h2>

				{/* Link realiza uma navegação declarativa. */}
				<Link to="/products">
					Voltar aos produtos
				</Link>
			</section>
		);
	}

	// Depois do if, o TypeScript entende que productDetail
	// é um objeto válido, e não undefined.
	//
	// Esse refinamento de tipo é chamado de narrowing.
	//
	// Por isso podemos acessar productDetail.name diretamente,
	// sem precisar utilizar optional chaining (?.).
	return (
		<section>
			<h2>Detalhes do produto</h2>

			<img
				src={productDetail.image}
				alt={productDetail.name}
				width={300}
			/>

			<h3>{productDetail.name}</h3>

			<p>R$ {productDetail.price}</p>

			{/*
				useNavigate permite navegar programaticamente.

				navigate("/products") altera a rota para /products.

				Aqui utilizamos um botão para demonstrar o hook.
				Para links comuns, geralmente preferimos <Link>.
			*/}
			<button onClick={() => navigate("/products")}>
				Voltar aos produtos
			</button>
		</section>
	);
};

// ============================================================
// 6. PÁGINA NÃO ENCONTRADA
// ============================================================

// Esta página será apresentada quando nenhuma rota corresponder
// ao endereço acessado.
//
// Exemplo: /pagina-inexistente
//
// A rota "*" funciona como um caminho curinga.
//
// IMPORTANTE:
// /product/999 corresponde à rota "product/:id".
// Nesse caso, a rota existe, mas o produto pode não existir.
// Esse cenário é tratado dentro de ProductDetail.

const NotFound = () => {
	return (
		<section>
			<h2>404 — Página não encontrada</h2>

			<Link to="/">Voltar para Home</Link>
		</section>
	);
};

// ============================================================
// 7. CONFIGURAÇÃO DAS ROTAS
// ============================================================

// <Routes> seleciona a rota correspondente à URL atual.
//
// <Route> associa um caminho (path) a um elemento React (element).
//
// path="/"           → Página inicial
// path="about"       → Página Sobre
// path="products"    → Lista de produtos
// path="product/:id" → Detalhes de um produto
//
// A rota "/" utiliza Layout como componente pai.
//
// As rotas declaradas dentro dela são rotas filhas.
// Seus elementos serão renderizados no <Outlet /> do Layout.
//
// "index" define a rota padrão daquele nível.
// Neste exemplo, Home será apresentada ao acessar "/".
//
// Os caminhos das rotas filhas são relativos à rota pai.
//
// Exemplo:
// Pai:   "/"
// Filho: "products"
// URL:   "/products"

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />

				<Route
					path="about"
					element={<About />}
				/>

				<Route
					path="products"
					element={<Products />}
				/>

				{/*
					:id representa um segmento dinâmico da URL.

					/product/1 → id = "1"
					/product/2 → id = "2"

					O componente ProductDetail utiliza useParams()
					para recuperar esse valor.
				*/}
				<Route
					path="product/:id"
					element={<ProductDetail />}
				/>

				{/* Captura caminhos não reconhecidos. */}
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Route>
		</Routes>
	);
};

// ============================================================
// 8. COMPONENTE PRINCIPAL
// ============================================================

// BrowserRouter fornece o contexto necessário para o React Router.
//
// Ele acompanha a URL e utiliza o histórico do navegador.
//
// Routes, Route, Link, Outlet, useParams e useNavigate
// dependem do contexto de roteamento.
//
// Neste exemplo, BrowserRouter está dentro de App.
//
// Se ele já estiver configurado no main.tsx,
// não devemos adicioná-lo novamente aqui.

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;

// ============================================================
// 9. FLUXO COMPLETO DA NAVEGAÇÃO
// ============================================================
//
// 1. O usuário acessa /products.
//
// 2. React Router identifica a rota "products".
//
// 3. O componente Products é renderizado dentro do Outlet.
//
// 4. O .map() cria um card para cada produto.
//
// 5. O usuário clica no Link do produto de ID 2.
//
// 6. O Link navega para /product/2.
//
// 7. React Router encontra a rota "product/:id".
//
// 8. O componente ProductDetail é renderizado.
//
// 9. useParams() retorna { id: "2" }.
//
// 10. Number(id) converte "2" para 2.
//
// 11. products.find() procura o produto com ID 2.
//
// 12. Se encontrar, apresenta nome, imagem e preço.
//
// 13. Se não encontrar, apresenta "Produto não encontrado".
//
// ============================================================
// 10. RESUMO DOS PRINCIPAIS RECURSOS
// ============================================================
//
// BrowserRouter:
// Fornece o contexto de roteamento da aplicação.
//
// Routes:
// Seleciona a rota que corresponde à URL.
//
// Route:
// Associa um caminho a um componente.
//
// path:
// Define o caminho da rota.
//
// element:
// Define o elemento React que será renderizado.
//
// Link:
// Cria links de navegação interna.
//
// NavLink:
// Cria links e permite identificar a rota ativa.
//
// Outlet:
// Define onde as rotas filhas serão renderizadas.
//
// index:
// Define a rota padrão de um nível de aninhamento.
//
// :id:
// Declara um parâmetro dinâmico no caminho.
//
// useParams():
// Recupera os parâmetros dinâmicos da rota atual.
//
// useNavigate():
// Permite realizar navegação programaticamente.
//
// .find():
// Procura o primeiro elemento que satisfaz uma condição.
//
// Number():
// Converte o valor recebido para número.
//
// Optional chaining (?.):
// Permite acessar propriedades de valores que podem ser
// null ou undefined sem provocar erro nessa operação.
//
// Early return:
// Encerra antecipadamente a execução do componente
// quando uma condição é atendida.
//
// ============================================================
// CONCEITO CENTRAL
// ============================================================
//
// React Router define QUAL componente será renderizado
// conforme a URL.
//
// useParams() recupera as INFORMAÇÕES DINÂMICAS dessa URL.
//
// Essas informações podem ser utilizadas para localizar
// dados específicos e apresentar o conteúdo correspondente.
//
// Exemplo:
//
// /product/2
//      ↓
// Route: product/:id
//      ↓
// ProductDetail
//      ↓
// useParams() → { id: "2" }
//      ↓
// Number(id) → 2
//      ↓
// products.find()
//      ↓
// Produto encontrado
//      ↓
// Renderização dos detalhes
