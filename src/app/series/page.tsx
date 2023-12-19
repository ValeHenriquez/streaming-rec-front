"use client";
import React from "react";
import { NextPageContext } from "next";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import SerieList from "@/components/SerieList";
import InfoModalSerie from "@/components/InfoModalSerie";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import useSerieList from "@/hooks/useSerieList";

const Home = () => {
	const { data: movies = [] } = useSerieList();
	console.log("MOVIES", movies);

	const { isOpen, closeModal } = useInfoModalStore();

	return (
		<>
			<InfoModalSerie visible={isOpen} onClose={closeModal} />
			<Navbar />
			<div className="pt-20">
				<SerieList title="" data={movies} />
			</div>
		</>
	);
};

export default Home;
