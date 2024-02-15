1import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Agenda } from "../components/sections/Agenda";
import { ScheduleData } from "../data/schedules";
import { MdDateRange, MdOndemandVideo } from "react-icons/md";

export const Schedules = () => {
	const TABS_LABEL = ScheduleData.map((schedule) => schedule.label);

	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [activeSchedule, setActiveSchedule] = useState(
		ScheduleData[activeTabIndex]
	);

	useEffect(() => {
		setActiveSchedule(ScheduleData[activeTabIndex]);
	}, [activeTabIndex]);

	return (
		<div className="bg-black">
			<Helmet>
				<title className="text-white">TRIGGER 2K23 - Schedules</title>
			</Helmet>
			<Container className="py-24 space-y-12">
				<Fade top>
					<div className="space-y-5">
						<h1 className="text-6xl font-bold text-white">Schedules.</h1>
						<p className="text-xl text-gray-500">
							The Schedule for TRIGGER 2K23 is categorized into three different sections. Check out the schedule below and don't forget to mark your
							calendar so that you don't miss out on any events.
						</p>
					</div>
				</Fade>

				<Fade top>
					<div className="flex border-b overflow-x-auto">
						{TABS_LABEL.map((tab, index) => (
							<button
								className={`border-b-2 hover:bg-gray-50 px-8 py-3 transition-all ${
									index === activeTabIndex
										? "border-blue-700 text-blue-700 font-semibold"
										: "border-transparent text-gray-500"
								}`}
								onClick={() => setActiveTabIndex(index)}
							>
								{tab}
							</button>
						))}
					</div>

					{/* <div className="text-center font-semibold text-black text-3xl">
						{activeSchedule.topic} Day
					</div> */}
				</Fade>

				<Fade>
					<div className="flex justify-center">
						<img className="w-full" src={activeSchedule.thumbnail} alt="" />
					</div>
				</Fade>

				<Fade>
					<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
						<a
							className="cursor w-auto bg-red-500 inline-flex items-center justify-center rounded-md px-10 py-3 text-sm text-white space-x-3 transition-all hover:bg-red-400 hover:px-12"
							href={activeSchedule.youtube_url}
							target="_blank"
							rel="noreferrer"
						>
							<span>
								<MdOndemandVideo size={20} />
							</span>
							<span>Watch Now</span>
						</a>
						{activeSchedule.celendar_url && (
							<a
								className="cursor w-auto inline-flex border border-blue-500 items-center justify-center rounded-md px-10 py-3 text-sm text-blue-500 space-x-3 transition-all hover:bg-blue-50 hover:px-12"
								href={activeSchedule.celendar_url}
								target="_blank"
								rel="noreferrer"
							>
								<span>
									<MdDateRange size={20} />
								</span>
								<span>Click to reminder</span>
							</a>
						)}
					</div>
				</Fade>

				<Agenda data={activeSchedule.agenda} />
			</Container>
		</div>
	);
};
