"use client";
import useWatchedProfile from "@/hooks/useWatchedProfile";
import useMovie from "@/hooks/useMovie";

import useUser from "@/store/useUser";
import MovieList from "@/components/MovieList";

const WatchedPage = () => {
	const { profile } = useUser();

	console.log("THIS IS THE PROFILE IN WATHCED PAGE", profile, profile._id);
	const { data } = useWatchedProfile(profile._id);

	console.log("MOVIES", data);
	return (
		<div className="watched-page">
			<div className="pb-10">
				<MovieList title="Watched Movies" data={data} />
			</div>
		</div>
	);
};

export default WatchedPage;
