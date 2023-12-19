import axios from "axios";

const fetcher = (url: string) =>
	axios
		.get(url)
		.then((res) => res.data)
		.catch((error) => {
			console.error("Error fetching data:", error);
			throw error; 
		});

export default fetcher;
