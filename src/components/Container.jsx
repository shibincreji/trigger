import PropTypes from "prop-types";11111111111
import classNames from "classnames";

export const Container = ({ className, mode, children, ...props }) => {
	const modeClass = classNames({
		"lg:max-w-screen-xl": mode === Container.MODE.NARROW,
		"lg:max-w-screen-2xl": mode === Container.MODE.MEDIUM,
		"lg:max-w-screen-3xl": mode === Container.MODE.WIDE,
	});

	return (
		<div className={`container ${modeClass} ${className}`} {...props}>
			{children}
		</div>
	);
};

Container.MODE = {
	NARROW: "narrow",
	MEDIUM: "medium",
	WIDE: "wide",
};

Container.propTypes = {
	className: PropTypes.string,
	mode: PropTypes.oneOf(Object.values(Container.MODE)),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

Container.defaultProps = {
	className: "",
	mode: Container.MODE.WIDE,
	children: "",
};
