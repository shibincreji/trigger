import { Container } from "../Container";

export const Footer = () => {
	return (
		<footer>
			{/* <div className="bg-black">
				<Container className="text-center space-x-5 text-white py-10">
					<a
						className="hover:underline"
						href="https://developers.google.com/community/gdg/organizers#community-guidelines"
						target="_blank"
						rel="noreferrer"
					>
						Code of Conduct
					</a>
					<a
						className="hover:underline"
						href="https://developers.google.com/community-guidelines"
						target="_blank"
						rel="noreferrer"
					>
						Community Guidelines
					</a>
				</Container>
			</div> */}
			<div className="bg-black">
				<Container className="text-center text-white py-3">
					<div> TRIGGER 2K23 | All Right Reserved</div>
					<p>Developed with ❤️ by <br /><span> <a href="https://www.linkedin.com/in/shibincreji/">Shibin C Reji</a> & <a href="https://www.linkedin.com/in/sanskar-drolia-a754471b6/">Sanskar Drolia</a></span> </p>
				</Container>
			</div>
		</footer>
	);
};
