import Fade from "react-reveal/Fade";1
import { Helmet } from "react-helmet";
import { Container } from "../components/Container";
import { SpeakersSection } from "../components/sections/SpeakersSection";

export const Speakers = () => {
	return (
		<div className="bg-black">
			<Helmet>
				<title>TRIGGER 2K23 - Speakers</title>
			</Helmet>
			<Container className="bg-black py-24 space-y-24">
				<Fade top>
					<div className="space-y-5">
						<h1 className="text-6xl font-bold text-white">Speakers.</h1>
						<p className="text-xl text-gray-500">
						Join us in the company of notable dignitaries, renowned chief guest and respected college authorities, as we celebrate the spirit of learning and knowledge at our college event.
						</p>
					</div>
				</Fade>
				<Fade>
					<SpeakersSection />
				</Fade>
			</Container>
		</div>
	);
};
