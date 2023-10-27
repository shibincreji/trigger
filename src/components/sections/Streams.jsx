111111111111import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { ROUTES } from "../../routes";
import { Container } from "../Container";
import { StreamCard } from "../StreamCard";
import { ScheduleData } from "../../data/schedules";

export const Streams = () => {
	return (
		<div className="bg-black py-16">
			<Container>
				<div className="space-y-14">
					<div className="grid lg:grid-cols-3 gap-6">
						{ScheduleData.map((schedule) => (
							<StreamCard
								thumbnail={schedule.thumbnail}
								day={schedule.label}
								// topic={`${schedule.topic} Day`}
								date={schedule.date}
								time={schedule.time}
								url={schedule.youtube_url}
								googleCalendarReminderUrl={schedule.celendar_url}
							/>
						))}
					</div>
					<div className="flex items-center justify-start">
						<Link
							className="group transition-all px-5 py-2 text-blue-700 rounded-md flex items-center space-x-5 hover:bg-gray-50"
							to={ROUTES.SCHEDULES}
						>
							<span>See All Schedules</span>
							<span className="transition-all transform group-hover:pl-2">
								<FiChevronRight />
							</span>
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};
