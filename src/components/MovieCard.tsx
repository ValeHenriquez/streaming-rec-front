import React, { use, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

import { MovieInterface } from "@/types";
import RecomendationsButton from "@/components/RecomendationsButton";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import { IMAGES_URL } from "@/config";

interface MovieCardProps {
	data: MovieInterface;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
	const router = useRouter();
	const { openModal } = useInfoModalStore();

	const redirectToWatch = useCallback(() => {
		window.location.href = "https://www.youtube.com";
	}, [data.id]);

	return (
		<div className="group bg-zinc-900 col-span relative h-[12vw]">
			<h2 className="text-white font-bold text-xl absolute bottom-2 left-2 z-1">
				{data.title}
			</h2>

			<img
				onClick={redirectToWatch}
				src={IMAGES_URL + data.backdrop_path}
				alt="Movie"
				draggable={false}
				className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
      "
			/>
			<div
				className="
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
      "
			>
				<h2 className="text-white font-bold text-xl absolute bottom-2 left-2 z-1">
					{data.title}
				</h2>
				<img
					onClick={redirectToWatch}
					src={IMAGES_URL + data.poster_path}
					alt="Movie"
					draggable={false}
					className="
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[12vw]
        "
				/>
				<div
					className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
          "
				>
					<div className="flex flex-row items-center gap-3">
						<div
							onClick={redirectToWatch}
							className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
						>
							<PlayIcon className="text-black w-4 lg:w-6" />
						</div>
						<RecomendationsButton movieId={data.id} />
						<div
							onClick={() => openModal(data?.id)}
							className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
						>
							<ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
						</div>
					</div>
					<p className="text-green-400 font-semibold mt-4">
						New <span className="text-white">2023</span>
					</p>
					<div className="flex flex-row mt-4 gap-2 items-center">
						<p className="text-white text-[10px] lg:text-sm">
							{data.runtime + " Minutos"}
						</p>
					</div>
					<div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
						{data.genres.map((g) => (
							<p key={g.id}>{g.name}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
