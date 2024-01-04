111import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";1
import Fade from "react-reveal/Fade";
import { Banner } from "../components/sections/Banner";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { CTA } from "../components/sections/CTA";
import { About } from "../components/sections/About";
import { Streams } from "../components/sections/Streams";
import { Container } from "../components/Container";
import { ROUTES } from "../routes";
import { FAQ } from "../components/sections/FAQ";

export const Home = () => {
	return (
		<div className="overflow-x-hidden">
			<Fade>
				<Banner />
			</Fade>

			<Fade right>
				<About />
			</Fade>

			<Fade left>
				<Streams />
			</Fade>

			<section className="bg-black py-24">
				<Container className="space-y-14">
					<div className="space-y-3">
						<h1 className="text-4xl text-blue-700 font-semibold">Speakers</h1>
						<p className="text-lg text-gray-500">
						Join us in the company of notable dignitaries, renowned chief guest and respected college authorities, as we celebrate the spirit of learning and knowledge at our college event.
						</p>
					</div>
					<SpeakersSection featured />

					<div className="flex items-center justify-start">
							<Link
								className="group transition-all px-5 py-2 text-blue-700 rounded-md flex items-center space-x-5 hover:bg-gray-50"
								to={ROUTES.SPEAKERS}
							>
								<span>See All Speakers</span>
								<span className="transition-all transform group-hover:pl-2">
									<FiChevronRight />
								</span>
							</Link>
						</div>
				</Container>
			</section>

			<Fade>
				<section className="bg-black py-24">
					<Container className="space-y-14">
						<div className="space-y-3">
							<h1 className="text-4xl text-blue-700 font-semibold">
								Frequently asked questions
							</h1>
							<p className="text-lg text-gray-500">
								Need Answers? Everything you need to know.
							</p>
						</div>
						<FAQ />
					</Container>
				</section>
			</Fade>

			<Fade>
				<CTA />
			</Fade>
		</div>
	);
};
