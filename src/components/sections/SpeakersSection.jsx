import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { SPEAKERS_DATA } from "../../data/speakers";
import { SpeakerCard } from "../SpeakerCard";

export const SpeakersSection = ({ featured }) => {
	const [data, setData] = useState(SPEAKERS_DATA);

	useEffect(() => {
		if (featured) {
			const filteredData = SPEAKERS_DATA.filter(
				(speaker) => speaker.featured_speaker === true
			);

			setData(SPEAKERS_DATA);
		}
	}, [featured]);

	return (
		<div className="bg-black space-y-14">
			<div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
				{data.map((speaker) => (
					<SpeakerCard
						className="w-full"
						name={speaker.name}
						institution={speaker.institution}
						topic={speaker.topic}
						avatar_url={speaker.avatar_url}
						roles={speaker.roles}
						social_media={speaker.social_media}
					/>
				))}
			</div>
		</div>
	);
};
