1111import { MdDateRange, MdOndemandVideo } from "react-icons/md";1111
import { BsDot } from "react-icons/bs";

export const StreamCard = ({
	thumbnail,
	day,
	topic,
	date,
	time,
	url,
	googleCalendarReminderUrl,
}) => {
	return (
		<div className="w-full">
			<div className="bg-white rounded-md shadow-md">
				<div className="p-3 h-72">
					<img
						className="rounded-md w-full h-full object-cover"
						src={thumbnail}
						alt=""
					/>
				</div>
				<div className="p-3 space-y-3">
					<div className="font-semibold text-xl">
						{day}  {topic}
					</div>
					<div className="flex flex-col justify-between space-y-6">
						<div className="space-y-3">
							<div className="flex space-x-1 text-gray-500 text-sm">
								<div className="flex items-center space-x-3">
									<span>{date}</span>
								</div>
								<div>
									<BsDot size={18} />
								</div>
								<div className="flex items-center space-x-3">
									<span>{time}</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
							<a
								className="w-full border border-red-500 flex items-center justify-center rounded-md px-4 py-3 text-sm text-red-500 space-x-3 transition-all hover:bg-red-50"
								href={url}
								target="_blank"
								rel="noreferrer"
							>
								<span>
									<MdOndemandVideo size={20} />
								</span>
								<span>Watch Now</span>
							</a>
							{googleCalendarReminderUrl && (
								<a
									className="cursor w-full flex items-center justify-center rounded-md px-4 py-3 text-sm text-blue-500 space-x-3 transition-all hover:bg-blue-50"
									href={googleCalendarReminderUrl}
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
					</div>
				</div>
			</div>
		</div>
	);
};
