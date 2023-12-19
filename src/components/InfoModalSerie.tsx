"use client";
import React, { useCallback, useEffect, useState } from "react";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/outline";

import RecomendationsButtonSerie from "@/components/RecomendationsButtonSerie";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import useSerie from "@/hooks/useSerie";
import { IMAGES_URL } from "@/config";

interface InfoModalProps {
	visible?: boolean;
	onClose: any;
}

const InfoModalSerie: React.FC<InfoModalProps> = ({ visible, onClose }) => {
	const [isVisible, setIsVisible] = useState<boolean>(!!visible);

	const { movieId } = useInfoModalStore();
	const { data = {} } = useSerie(movieId);

	useEffect(() => {
		setIsVisible(!!visible);
	}, [visible]);

	const handleClose = useCallback(() => {
		setIsVisible(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose]);

	if (!visible) {
		return null;
	}

	const redirectToWatch = () => {
		window.location.href = "https://www.youtube.com";
	};

	return (
		<div className="z-50 transition duration-300 bg-black bg-opacity-80 fixed inset-0 flex justify-center items-center overflow-x-hidden overflow-y-auto">
			<div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
				<div
					className={`${
						isVisible ? "scale-100" : "scale-0"
					} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
				>
					<div className="relative h-96">
						<video
							poster={IMAGES_URL + data?.backdrop_path}
							autoPlay
							muted
							loop
							src={data?.videoUrl}
							className="w-full brightness-[60%] object-cover h-full"
						/>
						<div
							onClick={handleClose}
							className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
						>
							<XMarkIcon className="text-white w-6" />
						</div>
						<div className="absolute bottom-[10%] left-10">
							<p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
								{data?.name}
							</p>
							<div className="flex flex-row gap-4 items-center">
								<button
									onClick={redirectToWatch}
									className="
						bg-white 
						rounded-md 
						py-1 md:py-2 
						px-2 md:px-4
						w-auto 
						text-xs lg:text-lg 
						font-semibold
						flex
						flex-row
						items-center
						hover:bg-neutral-300
						transition
					  "
								>
									<PlayIcon className="w-4 md:w-7 text-black mr-1" />
									Trailer
								</button>

								<RecomendationsButtonSerie movieId={data?.id} />
							</div>
						</div>
					</div>

					<div className="px-12 py-8">
						<div className="flex flex-row items-center gap-2 mb-8">
							<p className="text-green-400 font-semibold text-lg">New</p>
							<p className="text-white text-lg">
								{data?.number_of_episodes} episodes
							</p>
							{data?.genres?.map((genre: any, index: number) => (
								<p key={index} className="text-white text-lg">
									{genre.name}
								</p>
							))}
						</div>
						<p className="text-white text-lg">{data?.overview}</p>

						<div className="mt-4">
							<h3 className="text-white text-lg font-semibold mb-2">
								Actors and Characters:
							</h3>
							<ul className="text-white">
								{data?.actors?.map((actor: any, index: number) => (
									<li key={index}>
										{actor.name} as {actor.character}
									</li>
								))}
							</ul>
						</div>

						{data?.created_by && (
							<p className="text-white text-lg mt-4">
								<strong>Created By:</strong> {data.created_by}
							</p>
						)}

						{data?.first_air_date && (
							<p className="text-white text-lg mt-4">
								<strong>First Air Date:</strong> {data.first_air_date}
							</p>
						)}

						{data?.numberOfSeasons && (
							<p className="text-white text-lg mt-4">
								<strong>Number of Seasons:</strong> {data.numberOfSeasons}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default InfoModalSerie;
