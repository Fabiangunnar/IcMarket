import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { closeNav } from "@/redux-actions/homeNavSlice";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
	const { openNav } = useSelector((state: any) => state.nav);
	const dispatch = useDispatch();
	const sideNavRef: any = useRef();
	const topNavRef: any = useRef();

	const handleClickOutside = (event: any) => {
		if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
			dispatch(closeNav());
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={`app-block ${styles.home_app_block}`}>
				<header className={`app-block ${styles.header}`} ref={sideNavRef}>
					<Header />
				</header>
				<div className={`app-block ${styles.main}`}>
					<main>Statistics</main>
					<footer>
						<div className={`footer_line_through`} />
						<Footer />
					</footer>
				</div>
			</div>
		</>
	);
}
