"use client";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import useSerie from "@/hooks/useSerie";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import SerieList from "@/components/SerieList";
import useSerieRecommendations from "@/hooks/useSerieRecommendations";
import InfoModal from "@/components/InfoModal";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import InfoModalSerie from "@/components/InfoModalSerie";

const Watch = ({ params }: any) => {
	const router = useRouter();
	const { id } = params;
	const { data: movieData } = useSerie(id);
	console.log("RECOMMENDATIONS", movieData);
	const { data: recommendationsData = [] } = useSerieRecommendations(id);
	console.log("RECOMMENDATIONS", recommendationsData);
	const { isOpen, closeModal } = useInfoModalStore();

	return (
		<>
			<InfoModalSerie visible={isOpen} onClose={closeModal} />
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
					<SerieList title="" data={recommendationsData} />
				</div>
			</div>
		</>
	);
};

export default Watch;
