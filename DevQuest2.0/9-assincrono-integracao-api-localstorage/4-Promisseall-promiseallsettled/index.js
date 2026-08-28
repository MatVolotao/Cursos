const baseUrl = "https://ghibliapi.vercel.app";

const loadSingleMovie = async (id) => {
	try {
		const response = await fetch(`${baseUrl}/films/${id}`);

		if (!response.ok) {
			throw new Error(`Erro ao carregar filme com id: ${id}`);
		}

		// Faz a conversão para o formato JSON
		const data = await response.json();

		console.log(data);
	} catch (error) {
		console.error(error);
	}
};

loadSingleMovie("2baf70d1-42bb-4437-b551-e5fed5a87abe");


const moviesIds = [
	"2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky
	"58611129-2dbc-4a81-a72f-77ddfc1b1b49", // My Neighbor Totoro
];


const loadMultipleMovies = async (moviesIds) => {
	try {
		const promises = moviesIds.map(async (id) => {
			const response = await fetch(`${baseUrl}/films/${id}`);

			if (!response.ok) {
				throw new Error(`Erro ao carregar filme com id: ${id}`);
			}

			return response.json();
		});

		// Aguarda todas as promessas serem resolvidas
		const data = await Promise.all(promises);

		console.log(data);
	} catch (error) {
		console.error(error);
	}
};

loadMultipleMovies(moviesIds);


const loadMultipleMoviesSettled = async (moviesIds) => {
	try {
		const promises = moviesIds.map(async (id) => {
			const response = await fetch(`${baseUrl}/films/${id}`);

			if (!response.ok) {
				throw new Error(`Erro ao carregar filme com id: ${id}`);
			}

			return response.json();
		});

		// Aguarda todas as promessas serem finalizadas
		const data = await Promise.allSettled(promises);

		data.forEach((movie, index) => {
			if (movie.status === "fulfilled") {
				console.log(
					`Filme ${moviesIds[index]} carregado com sucesso:`,
					movie.value.title
				);
			} else {
				console.error(
					`Erro ao carregar filme ${moviesIds[index]}:`,
					movie.reason.message
				);
			}
		});

		console.log(data);
	} catch (error) {
		console.error(error);
	}
};

loadMultipleMoviesSettled(moviesIds);