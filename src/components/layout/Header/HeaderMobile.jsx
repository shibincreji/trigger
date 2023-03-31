import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDehaze } from "react-icons/md";
import { ROUTES } from "../../../routes";
import { HeaderSideMenu } from "./HeaderSideMenu";

export const HeaderMobile = () => {
	const [showSideMenu, setShowSideMenu] = useState(false);

	const handleClose = () => setShowSideMenu(false);

	return (
		<div className="block lg:hidden">
			<HeaderSideMenu show={showSideMenu} onClose={handleClose} />
			<div className="px-8 sm:px-10">
				<div className="flex items-center justify-between py-3 space-x-6">
					<Link to={ROUTES.HOME} onClick={handleClose}>
						<img
							className="w-10"
							src={require("../../../assets/images/gdg-logo.png").default}
							alt="Trigger Logo"
						/>
					</Link>
					<button
						className="p-4 transform translate-x-4 transition-all hover:bg-gray-100 rounded-full outline-none"
						onClick={() => setShowSideMenu(!showSideMenu)}
					>
						<MdDehaze size={20} />
					</button>
				</div>
			</div>
		</div>
	);
};
