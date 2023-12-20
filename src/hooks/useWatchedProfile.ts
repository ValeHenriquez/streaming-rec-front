import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useWatchedProfile = (id?: string) => {
	const { data, error, isLoading } = useSwr(
		id ? `http://localhost:8081/profiles/history/${id}/movies` : null,
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

export default useWatchedProfile;
