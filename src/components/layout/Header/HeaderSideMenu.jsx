import { MdLaunch } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { ROUTES, HEADER_ROUTES } from "../../../routes";

export const HeaderSideMenu = ({ show, onClose }) => {
	return (
		<div>
			<div
				className={`transition-all fixed z-10 left-0 top-0 w-screen h-screen bg-black ${
					show ? "visible opacity-50" : "invisible opacity-0"
				}`}
				onClick={onClose}
			/>

			<div
				className={`fixed left-0 top-0 h-screen w-72 bg-black z-10 shadow-md transition-all transform ${
					show ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="px-10 py-14 border-b">
					<Link to={ROUTES.HOME} onClick={onClose}>
						<img
							className="w-10"
							src={require("../../../assets/images/gdg-logo.png").default}
							alt="Trigger Logo"
						/>
					</Link>
				</div>

				<div className="flex flex-col">
					{HEADER_ROUTES.map((route) => (
						<NavLink
							exact
							key={route.path}
							activeClassName="border-blue-500 text-blue-700"
							className="px-6 py-4 text-gray-400 border-l-4 border-transparent hover:bg-gray-50 transition hover:text-blue-700"
							to={route.path}
							onClick={onClose}
						>
							{route.title}
						</NavLink>
					))}
				</div>

				<div className="absolute bottom-0 flex items-center space-x-3 justify-between w-full">
					<a
						className="w-full bg-blue-700 flex items-center justify-between rounded-full m-6 px-6 py-4 text-sm text-white space-x-3 shadow-md transition-all hover:bg-blue-700"
						href="https://linktr.ee/trigger2k23"
						target="_blank"
						rel="noreferrer"
					>
						<span className="tracking-wider">Register</span>
						<span>
							<MdLaunch size={16} />
						</span>
					</a>
				</div>
			</div>
		</div>
	);
};
