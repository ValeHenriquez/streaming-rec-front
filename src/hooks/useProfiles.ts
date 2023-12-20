import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useProfiles = (id?: string) => {
	const { data, error, isLoading } = useSwr(
		id ? `http://localhost:8081/profiles/account/${id}` : null,
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

export default useProfiles;
