import useSwr from "swr";
import fetcher from "@/libs/fetcher";

const useSeries = () => {
	const { data, error, isLoading } = useSwr("http://localhost:8080/series", fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});
	return {
		data,
		error,
		isLoading,
	};
};

export default useSeries;
