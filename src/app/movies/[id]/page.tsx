"use client";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import useMovie from "@/hooks/useMovie";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import MovieList from "@/components/MovieList";
import useMovieRecommendations from "@/hooks/useMovieRecommendations";
import InfoModal from "@/components/InfoModal";
import useInfoModalStore from "@/hooks/useInfoModalStore";

const Watch = ({ params }: any) => {
	const router = useRouter();
	const { id } = params;
	const { data: movieData } = useMovie(id);
	console.log("RECOMMENDATIONS", movieData);
	const { data: recommendationsData = [] } = useMovieRecommendations(id);
	console.log("RECOMMENDATIONS", recommendationsData);
	const { isOpen, closeModal } = useInfoModalStore();

	return (
		<>
			<InfoModal visible={isOpen} onClose={closeModal} />
			<div className="h-screen w-screen bg-black">
				<nav className="fixed w-full p-4 z-10 flex items-center justify-between bg-black bg-opacity-70">
					<div className="flex items-center">
						<ArrowLeftIcon
							onClick={() => router.push("/")}
							className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
						/>
						<span className="ml-2 text-white text-1xl md:text-3xl font-bold">
							Recommendations for: {movieData?.title}
						</span>
					</div>
				</nav>
				<div className="pt-20">
					<MovieList title="" data={recommendationsData} />
				</div>
			</div>
		</>
	);
};

export default Watch;
