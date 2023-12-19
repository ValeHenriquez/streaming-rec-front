import useSwr from "swr";
import fetcher from "@/libs/fetcher";
import { MovieInterface } from "@/types";

const useBillboard = () => {
	console.log("HOOK BILLBOARD");
	const { data, error, isLoading } = useSwr("http://localhost:8080/random", fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	});
	console.log("HOOK BILLBOARD", data, error, isLoading);
	return {
		data,
		error,
		isLoading,
	};
};

export default useBillboard;
