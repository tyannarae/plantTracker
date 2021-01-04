import React, { useState, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Logo from "../media/navBar/logo.png";
import { Search } from "./search";
interface NavBarProps {
	search: boolean;
}

export const NavBar: FunctionComponent<NavBarProps> = (NavBarProps) => {
	const [isActive, setActive] = useState(false);

	function toggleIsActive() {
		setActive(!isActive);
	}

	return (
		<nav className="navbar" data-testid="navBar">
			<div className="navbar-brand">
				<Link className="navbar-item" to="/plantTracker/search">
					<img className="logoImg" alt="Logo" src={Logo} />
				</Link>

				<div
					className={classNames(
						"navbar-burger",
						`${isActive ? "is-active" : ""}`
					)}
					onClick={toggleIsActive}
				>
					<div className="">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div
						className={classNames(
							`${isActive ? "is-active" : ""}`,
							"navbar-menu",
							"has-dropdown"
						)}
					>
						<div className="navbar-dropdown">
							<Link className="navbar-item" to="/plantTracker/search">
								Home
							</Link>
							<Link className="navbar-item" to="/plantTracker/collections">
								Collections
							</Link>
							<Link className="navbar-item" to="/plantTracker">
								Sign Out
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="navbar-menu">
				<div className="navbar-end">
					{NavBarProps.search ? <Search /> : null}
					<div className="">
						<div className="buttons">
							{NavBarProps.search === true ? (
								<Link
									className=" navbar-item button is-primary"
									to="/plantTracker/collections"
								>
									<strong>Collections</strong>
								</Link>
							) : (
								<Link
									className=" navbar-item button is-primary"
									to="/plantTracker/search"
								>
									<strong>Search Page</strong>
								</Link>
							)}

							<Link
								className="navbar-item button is-primary"
								to="/plantTracker"
							>
								<strong>Sign Out</strong>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
