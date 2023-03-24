import ReactPlayer from "react-player";
import { MdDateRange, MdLaunch, MdSchedule } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { Container } from "../Container";

export const About = () => {
	return (
		<div className="bg-black py-24">
			<Container className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-20">
				<div className="w-full space-y-10">
					<div className="space-y-3">
						<h1 className="text-4xl font-display font-semibold text-white">
						TRIGGER 2K23
						</h1>
						<p className="text-xl text-gray-500">
							"It’s time to Acknowledge who we are!"
						</p>
					</div>

					<p className="text-gray-500">
					The Department of the Computer Science and Engineering, RajaRajeswari College of Engineering (RRCE) loves to help students augment the theoretical knowledge gained by them with a strong practical approach and promote innovation. The members of CSE Association have planned to conduct a National Level Technical symposium “Trigger 2K23” on 11th April 2023. The main objective is to provide a platform for the students to interact and exchange their ideas.
					</p>

					<div className="space-y-3">
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdDateRange size={24} />
							</div>
							<span className="text-base">11 April 2023</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdSchedule size={24} />
							</div>
							<span className="text-base">Tuesday 9.00 AM to 4.00 PM</span>
						</div>
						{/* <div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdSchedule size={24} />
							</div>
							<span className="text-base">Saturday 1.00 PM to 4.00 PM</span>
						</div> */}
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
							<span className="tracking-wider">Learn More About TRIGGER 2K23</span>
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
