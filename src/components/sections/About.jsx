import ReactPlayer from "react-player";
import { MdDateRange, MdLaunch, MdSchedule } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { Container } from "../Container";

export const About = () => {
	return (
		<div className="py-24">
			<Container className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-20">
				<div className="w-full space-y-10">
					<div className="space-y-3">
						<h1 className="text-4xl font-display font-semibold">
						TRIGGER 2K23
						</h1>
						<p className="text-xl text-gray-500">
							"How to use technology to recover and boost community engagement
							because of pandemic"
						</p>
					</div>

					<p>
						Whether it be through technical talks delivered in local languages,
						a keynote provided by Google Developers, or by simply meeting fellow
						local developers, DevFest attendees learn about how Google developer
						products can help them do what they do best - develop. Sessions
						cover a wide variety of technologies with speakers from Google,
						Google Developer Groups, Women Techmakers, Google Developer Experts,
						and more.
					</p>

					<div className="space-y-3">
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdDateRange size={24} />
							</div>
							<span className="text-base">26 - 28 November 2021</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdSchedule size={24} />
							</div>
							<span className="text-base">Friday 6.30 PM to 9.30 PM</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdSchedule size={24} />
							</div>
							<span className="text-base">Saturday 1.00 PM to 4.00 PM</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<FaYoutube size={24} />
							</div>
							<span className="text-base">Live on Youtube</span>
						</div>
					</div>
					<div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
						<a
							className="w-full md:w-auto bg-blue-700 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm text-white space-x-3 shadow-md transition-all hover:bg-blue-800 hover:px-8"
							href="https://gdg.community.dev/events/details/google-gdg-jakarta-presents-gdg-jakarta-devfest-2021/"
							target="_blank"
							rel="noreferrer"
						>
							<span className="tracking-wider">Register</span>
							<span>
								<MdLaunch size={16} />
							</span>
						</a>
						<a
							className="w-full md:w-auto border-blue-700 border inline-flex items-center justify-center rounded-full px-6 py-3 text-sm text-blue-700 space-x-3 transition-all hover:bg-gray-50 hover:px-8"
							href="https://gdg.community.dev/devfest/"
							target="_blank"
							rel="noreferrer"
						>
							<span className="tracking-wider">Learn More About DevFest</span>
							<span>
								<MdLaunch size={16} />
							</span>
						</a>
					</div>
				</div>
				<div className="w-full">
					<div className="rounded-md overflow-hidden">
						<ReactPlayer
							width="100%"
							url="https://www.youtube.com/watch?v=7BqKlQc6-Qc"
							controls
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};
