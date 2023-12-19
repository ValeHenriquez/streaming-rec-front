"use client";
import React from "react";
import { NextPageContext } from "next";
//import { getSession } from "next-auth/react";

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import InfoModal from "@/components/InfoModal";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import useMovieList from "@/hooks/useMovieList";
//import useFavorites from "@/hooks/useFavorites";
import { MovieInterface } from "@/types";
import SerieList from "@/components/SerieList";
import useSerieList from "@/hooks/useSerieList";
//import useMovieList from "@/hooks/useMovieList";
//import useFavorites from "@/hooks/useFavorites";
//import useInfoModalStore from "@/hooks/useInfoModalStore";

const Home = () => {
	let { data: movies = [] } = useMovieList();
	let { data: series = [] } = useSerieList();

	const { isOpen, closeModal } = useInfoModalStore();

	movies = movies.slice(0, 8);
	series = series.slice(0, 8);

	return (
		<>
			<InfoModal visible={isOpen} onClose={closeModal} />
			<Navbar />
			<Billboard />
			<div className="pb-10">
				<MovieList title="Trending Movies" data={movies} />
			</div>
			<div className="pb-40">
				<SerieList title="Trending Series" data={series} />
			</div>
		</>
	);
};

export default Home;
