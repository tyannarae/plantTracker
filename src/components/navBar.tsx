import React, { useState, FunctionComponent } from "react";
import classNames from "classnames";
import Logo from "../media/navBar/logo.png";
import { useHistory } from "react-router-dom";
import { Search } from "./search";
interface NavBarProps {
	search: boolean;
}

export const NavBar: FunctionComponent<NavBarProps> = (NavBarProps) => {
	const [isActive, setActive] = useState(false);
	const history = useHistory();

	function handleCollectionsClick() {
		history.push("/collections");
	}
	function handleSignOutClick() {
		history.push("/");
	}

	function toggleIsActive() {
		setActive(!isActive);
	}

	return (
		<nav className="navbar" data-testid="navBar">
			<div className="navbar-brand">
				<a className="navbar-item" href="/search">
					<img className="logoImg" alt="Logo" src={Logo} />
				</a>

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
							<a href="/search" className="navbar-item">
								Home
							</a>
							<a className="navbar-item" href="/collections">
								Collections
							</a>
							<a className="navbar-item" href="/">
								Sign Out
							</a>
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
								<a
									href="/collections"
									className=" navbar-item button is-primary"
									onClick={handleCollectionsClick}
								>
									<strong>Collections</strong>
								</a>
							) : (
								<a
									href="/search"
									className=" navbar-item button is-primary"
									onClick={handleCollectionsClick}
								>
									<strong>Search Page</strong>
								</a>
							)}

							<a
								href="/"
								className="navbar-item button is-primary"
								onClick={handleSignOutClick}
							>
								<strong>Sign Out</strong>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
