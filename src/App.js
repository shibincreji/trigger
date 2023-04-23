import { useState, useRef, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer";
import { ROUTES } from "./routes";
import { Speakers } from "./pages/Speakers";
import { Schedules } from "./pages/Schedules";
import { Organizers } from "./pages/Organizers";
// import "./utils/firebase";

function App() {
	const history = useHistory();
	const headerRef = useRef();

	const [headerHeight, setHeaderHeight] = useState(0);

	useEffect(() => {
		setHeaderHeight(headerRef.current ? headerRef.current.clientHeight : 0);111
	}, [headerRef]);

	useEffect(() => {
		const unlisten = history.listen(() => window.scrollTo({ top: 0 }));
		return () => unlisten();
	}, [history]);

	return (
		<Route basename="/">
		<div className="App">
			<Header ref={headerRef} />

			<div style={{ marginTop: headerHeight }}>
				<Switch>
					<Route path={ROUTES.SPEAKERS}>
						<Speakers />
					</Route>
					<Route path={ROUTES.SCHEDULES}>
						<Schedules />
					</Route>
					<Route path={ROUTES.ORGANIZERS}>
						<Organizers />
					</Route>
					<Route path={ROUTES.HOME}>
						<Home />
					</Route>
				</Switch>
			</div>

			<Footer />
		</div>
		</Route>
	);
	
}

export default App;
