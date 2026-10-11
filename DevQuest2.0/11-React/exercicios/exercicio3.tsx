import { useEffect, useState } from "react";

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

function App() {
	const [productList, setProductList] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchdados = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				const data = await response.json();
				setProductList(data);
			} catch (error) {
				console.error("Erro ao buscar produtos:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchdados();
	}, []);

	if (loading) {
		return <p>Carregando produtos...</p>;
	}
	return (
		<>
			<ul className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{productList.map((product) => (
					<li
						key={product.id}
						className="flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-md">
						<img
							src={product.image}
							alt={product.title}
							className="h-48 w-full object-contain"
						/>

						<h2 className="mt-4 text-lg font-semibold">{product.title}</h2>

						<p className="mt-2 text-xl font-bold text-green-600">
							R$ {product.price.toFixed(2)}
						</p>

						<p className="mt-3 text-sm text-gray-600">{product.description}</p>
					</li>
				))}
			</ul>
		</>
	);
}

export default App;
