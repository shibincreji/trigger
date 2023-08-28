1111111import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SpeakerCard = ({
	name,
	institution,
	topic,
	avatar_url,
	roles,
	social_media,
	className,
}) => {
	return (
		<div className={className}>
			<div className={`shadow-lg bg-white rounded-lg`}>
				<div className="flex flex-col items-center py-6 border-b space-y-6">
					<div className="">
						<img
							className="md:w-48 md:h-48 w-52 h-52 rounded-full object-cover"
							src={avatar_url}
							alt={name}
						/>
					</div>
					<div className="w-full space-y-6 text-center">
						<div className="space-y-1">
							<h1 className="text-lg font-semibold text-gray-700">{name}</h1>
							<div className="text-gray-500 text-sm space-y-1">
								<div>{roles}</div>
								<div>{institution}</div>
							</div>
						</div>
						<div className="flex justify-center text-gray-500">
							{social_media &&
								Object.keys(social_media).map((socmed) => (
									<a
										className="hover:text-blue-700 transition-all"
										href={social_media[socmed]}
										target="_blank"
										rel="noreferrer"
									>
										{socmed === "facebook" && <FaFacebook size={18} />}
										{socmed === "twitter" && <FaTwitter size={18} />}
										{socmed === "instagram" && <FaInstagram size={18} />}
										{socmed === "linkedin" && <FaLinkedin size={18} />}
									</a>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
