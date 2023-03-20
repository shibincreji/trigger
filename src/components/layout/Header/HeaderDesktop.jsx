import { Link, NavLink } from "react-router-dom";
import { MdLaunch } from "react-icons/md";
import { ROUTES, HEADER_ROUTES } from "../../../routes";

export const HeaderDesktop = () => {
	return (
		<div className="hidden lg:block">
			<div className="absolute left-10 top-1/2 transform -translate-y-1/2">
				<Link to={ROUTES.HOME}>
					<img
						className="w-64"
						src={require("../../../assets/images/gdg-logo.svg").default}
						alt="GDG Logo"
					/>
				</Link>
			</div>

			<nav className="flex items-center justify-center">
				{HEADER_ROUTES.map((route) => (
					<NavLink
						key={route.path}
						exact
						activeClassName="border-blue-500 text-blue-700"
						className="p-6 text-gray-400 border-b-2 border-transparent hover:bg-gray-50 transition hover:text-blue-700"
						to={route.path}
					>
						{route.title}
					</NavLink>
				))}
			</nav>

			<div className="flex absolute right-10 top-1/2 transform -translate-y-1/2 items-center space-x-3">
				<a
					className="bg-blue-700 flex items-center rounded-full px-6 py-3 text-sm text-white space-x-3 shadow-md transition-all hover:bg-blue-700"
					href="https://gdg.community.dev/events/details/google-gdg-jakarta-presents-gdg-jakarta-devfest-2021/"
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
	);
};
