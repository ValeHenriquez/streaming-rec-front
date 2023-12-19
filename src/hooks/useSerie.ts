import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useSerie = (id?: number) => {
	const { data, error, isLoading } = useSwr(
		id ? `http://localhost:8080/series/${id}` : null,
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

export default useSerie;
