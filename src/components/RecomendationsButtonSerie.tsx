import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { PlusIcon, CheckIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import useInfoModalStore from "@/hooks/useInfoModalStore";

interface RecomendationsButtonProps {
	movieId: number;
}

const RecomendationsButtonSerie: React.FC<RecomendationsButtonProps> = ({ movieId }) => {
	const router = useRouter();
	const { closeModal } = useInfoModalStore();
	const handleClick = useCallback(() => {
		closeModal(); // Cierra el modal
		router.push(`/series/${movieId}`);
	}, [router, movieId, closeModal]);

	return (
		<div
			onClick={handleClick}
			className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
		>
			<HeartIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
		</div>
	);
};

export default RecomendationsButtonSerie;
