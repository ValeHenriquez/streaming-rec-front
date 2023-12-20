"use client";
import useWatchedIds from "@/hooks/useWatchedIds";
import useMovie from "@/hooks/useMovie";

const WatchedPage = () => {
	const { data } = useWatchedIds("65828b0f41652bf317260bf9");
	const ids = data?.history.map((item: any) => item.movieId) || [];
	console.log("EN WATCHED PAGE", ids);

	const movies: any = [];
	for (let id of ids) {
		console.log("ID", id);
		const { data: movie } = useMovie(id);
		console.log("movie", movie);
		movies.push(movie);
	}
	console.log("MOVIES", movies);
	return (
		<div className="watched-page">
			<h1>Watched</h1>
			<div className="watched-page__list"></div>
		</div>
	);
};

export default WatchedPage;
