import camisaRoxa from "./assets/camisa-roxa.png";

function App() {
	return (
		<>
			<div className="flex items-center justify-center min-h-screen text-white bg-black">
				<div className="bg-[#130234] rounded-2xl  w-80  ">
					<img className="rounded-t-2xl w-full" src={camisaRoxa} alt="camisa roxa" />
					<div className="p-6">
						<h1 className="text-[18px] ">Camiseta Dev em Dobro</h1>
						<p className="mt-6">Cor: Roxa</p>
						<p>Tamanho: M</p>
						<p className="text-[#6BB27C] my-5 text-right">R$ 89,00</p>
						<button className="bg-purple-600 rounded-sm py-2 w-full">
							Adicionar ao carrinho
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
