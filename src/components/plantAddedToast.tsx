import React from "react";
import "../styles/components/plantAddedToast.scss";

export const PlantAddedToast = () => {
	const CloseToast = () => {
		console.log("close toast");
		const component = document.getElementById("addItemToast");

		if (component !== null) {
			component.style.display = "none";
		}
	};

	return (
		<div id="addItemToast" className="notification is-success ">
			<div className="tile ">
				<button className="delete content" onClick={CloseToast}></button>
				<h3 className=" text content">Successfully added to your collection</h3>
			</div>
		</div>
	);
};
