export interface MovieInterface {
	id: number; // Cambiado de string a number según la respuesta proporcionada
	title: string;
	overview: string;
	director: string;
	backdrop_path: string; // Cambiado de backdropPath a backdrop_path
	runtime: number; // Cambiado de string a number según la respuesta proporcionada
	poster_path: string; // Cambiado de posterPath a poster_path
	release_date: string; // Cambiado de releaseDate a release_date
	actors: Actor[];
	genres: Genre[];
}

export interface Actor {
	id: number;
	name: string;
	character: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface SerieInterface {
	id: number;
	title: string;
	overview: string;
	created_by: string;
	backdrop_path: string;
	poster_path: string;
	first_air_date: string;
	number_of_episodes: number;
	number_of_seasons: number;
	genres: Genre[];
	actors: Actor[];
}
