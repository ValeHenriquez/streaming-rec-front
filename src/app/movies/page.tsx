"use client";
import React from "react";
import { NextPageContext } from "next";
//import { getSession } from "next-auth/react";

import Navbar from "@/components/Navbar";

import MovieList from "@/components/MovieList";
import InfoModal from "@/components/InfoModal";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import useMovieList from "@/hooks/useMovieList";


const Home = () => {
	const { data: movies = [] } = useMovieList();
	console.log("MOVIES", movies);

	const { isOpen, closeModal } = useInfoModalStore();

	return (
		<>
			<InfoModal visible={isOpen} onClose={closeModal} />
			<Navbar />
			<div className="pt-20">
				<MovieList title="" data={movies} />
			</div>
		</>
	);
};

export default Home;
