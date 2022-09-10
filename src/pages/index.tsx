import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Soft Yellow | Soluções de Software</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/logo.png" />
			</Head>

			<Navbar />

			<main>
				<Hero />
				<HowWeWork />
				<Portfolio />
				<Testimonials />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
