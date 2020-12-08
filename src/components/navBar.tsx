import React, { useState } from "react";
import Logo from "../media/navBar/logo.png";
import { useHistory } from "react-router-dom";
import { Search } from "./search";
import classNames from "classnames";

const NavBar = () => {
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
		<nav className="navbar">
			<div className="navbar-brand">
				<a className="navbar-item" href="/search">
					<img className="logoImg" alt="Logo" src={Logo} />
				</a>

				<div
					id="nav-toggle"
					className={classNames(
						"navbar-burger",
						`${isActive ? "is-active" : ""}`
					)}
					onClick={toggleIsActive}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				{/* 
					<div id="nav-menu" className="nav-right nav-menu">
						<a href="/search" className="nav-item">
							Home
						</a>
						<a className="nav-item" href="/collections">
							Collections
						</a>
						<a className="nav-item" href="/">
							Sign Out
						</a>
					</div> */}

				{/* <div className="navbar-dropdown">
						<a href="/" className="navbar-item">
							test
						</a>
						<a href="/" className="navbar-item">
							test
						</a>
					</div> */}
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
