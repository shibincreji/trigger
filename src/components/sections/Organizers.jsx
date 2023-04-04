import { Container } from "../Container";
import { OrganizerCard } from "../OrganizerCard";

export const Organizers = () => {
	return (
		<section className="py-24">
			<Container className="space-y-14">
				<div className="max-w-4xl mx-auto space-y-3 text-center">
					<h1 className="text-3xl text-blue-700 font-semibold">Organizers</h1>
					<p className="text-lg text-gray-500">
					TRIGGER 2K23 is a National Level Technical Symposium organized by Dept of CSE, RRCE. To make all this
							possible, an awesome team of volunteers is working behind the scenes.
					</p>
				</div>
				<div className="flex flex-start justify-center flex-wrap">
					<OrganizerCard className="w-64 p-3" />
					<OrganizerCard className="w-64 p-3" />
					<OrganizerCard className="w-64 p-3" />
					<OrganizerCard className="w-64 p-3" />
					<OrganizerCard className="w-64 p-3" />
					<OrganizerCard className="w-64 p-3" />
				</div>
			</Container>
		</section>
	);
};
