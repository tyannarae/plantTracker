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

	function displayDropdownMenu() {
		console.log("clicked shit");
	}

	return (
		<nav className="navbar">
			<div className="navbar-brand">
				<a className="navbar-item" href="/search">
					<img className="logoImg" alt="Logo" src={Logo} />
				</a>
				<div
					role="button"
					className="navbar-burger burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					onClick={displayDropdownMenu}
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>

					{/* <div className="navbar-dropdown">
						<a href="/" className="navbar-item">
							test
						</a>
						<a href="/" className="navbar-item">
							test
						</a>
					</div> */}
				</div>
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
