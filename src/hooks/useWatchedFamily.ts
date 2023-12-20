import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useWatchedFamily = (id?: string) => {
	const { data, error, isLoading } = useSwr(
		id ? `http://localhost:8081/history/account/${id}/movies` : null,
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

export default useWatchedFamily;
