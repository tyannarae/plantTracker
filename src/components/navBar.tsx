import React from "react";
import Logo from "../media/navBar/logo.png";
import { useHistory } from "react-router-dom";
import { Search } from "./search";

const NavBar = () => {
	const history = useHistory();

	function handleLogoClick() {
		history.push("/search");
	}

	function handleCollectionsClick() {
		history.push("/collections");
		alert("checkout your plants!");
	}
	return (
		<div className="navbar">
			{/* <div className="navbar-brand">
			
			</div> */}
			<div className="navbar-brand">
				<a className="navbar-item" href="logoimg">
					<img
						className="logoImg"
						alt="Logo"
						src={Logo}
						onClick={handleLogoClick}
					/>
				</a>
			</div>

			<div className="navbar-end">
				<Search />
				<div className="navbar-item">
					<div className="buttons">
						<button
							className="button is-primary"
							onClick={handleCollectionsClick}
						>
							<strong>Collections</strong>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default NavBar;
