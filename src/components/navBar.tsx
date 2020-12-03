import React from "react";
import Logo from "../media/navBar/logo.png";
import { useHistory } from "react-router-dom";
import { Search } from "./search";

const NavBar = () => {
	const history = useHistory();

	function handleCollectionsClick() {
		history.push("/collections");
	}
	function handleSignOutClick() {
		history.push("/");
	}
	return (
		<nav className="navbar">
			<div className="navbar-brand">
				<a className="navbar-item" href="/search">
					<img className="logoImg" alt="Logo" src={Logo} />
				</a>
			</div>
			<div className="navbar-menu">
				<div className="navbar-end">
					<Search />
					<div className="">
						<div className="buttons">
							<a
								href="/collections"
								className=" navbar-item button is-primary"
								onClick={handleCollectionsClick}
							>
								<strong>Collections</strong>
							</a>
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
