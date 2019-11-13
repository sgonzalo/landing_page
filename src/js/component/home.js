import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import Card from "./card";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<div>
				<Navbar />
				<Jumbotron />
				<div className="d-flex justify-content-around">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<Footer />
			</div>
		</div>
	);
}
