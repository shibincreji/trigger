import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import { Container } from "../components/Container";
import { SpeakersSection } from "../components/sections/SpeakersSection";

export const Speakers = () => {
	return (
		<div>
			<Helmet>
				<title>TRIGGER 2K23 - Speakers</title>
			</Helmet>
			<Container className="py-24 space-y-24">
				<Fade top>
					<div className="space-y-5">
						<h1 className="text-6xl font-bold">Speakers.</h1>
						<p className="text-xl text-gray-500">
							Our speakers are influential folks & allies who have been
							associated with communities within their organisations, cities,
							country and beyond.
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
