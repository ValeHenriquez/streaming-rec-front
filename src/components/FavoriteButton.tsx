import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";

import useUser from "@/store/useUser";

interface FavoriteButtonProps {
	movieId: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
	//const { mutate: mutateFavorites } = useFavorites();

	const { profile } = useUser();

	// const isFavorite = useMemo(async () => {
	// 	try {
	// 		const response = await axios.get(
	// 			`http://localhost:8081/profiles/history/${profile._id}`
	// 		);
	// 		const list = response.data || [];

	// 		return list.includes(movieId);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}

	// 	return false;
	// }, [profile, movieId]);

	const addToHistory = useCallback(async () => {
		try {
			const response = await axios.post("http://localhost:8081/history", {
				movieId,
				profileId: profile._id,
				calification: true,
			});
			console.log(response);
		} catch (error) {
			// Manejar errores aquí si es necesario
			console.error("Error adding to history:", error);
		}
	}, [movieId]);

	return (
		<div
			onClick={addToHistory}
			className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
		>
			<PlusIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
		</div>
	);
};

export default FavoriteButton;
