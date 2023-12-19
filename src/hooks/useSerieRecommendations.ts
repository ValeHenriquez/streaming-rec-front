import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useSerieRecommendations = (id?: number) => {
	const { data, error, isLoading } = useSwr(
		id ? `http://localhost:8080/series/${id}/recomendations` : null,
		fetcher,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
			revalidateOnReconnect: false,
		}
	);
	return {
		data,
		error,
		isLoading,
	};
};

export default useSerieRecommendations;
