"use client";

import useUser from "@/store/useUser";
import MovieList from "@/components/MovieList";
import useWatchedFamily from "@/hooks/useWatchedFamily";

const WatchedPageFamily = () => {
	const { profile } = useUser();

	const { data } = useWatchedFamily(profile.accountId);

	console.log("MOVIES", data);
	return (
		<div className="watched-page">
			<div className="pb-10">
				<MovieList title="Your family Watched Movies" data={data} />
			</div>
		</div>
	);
};

export default WatchedPageFamily;
