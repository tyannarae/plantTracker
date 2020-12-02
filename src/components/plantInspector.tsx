import React, { FunctionComponent } from "react";
import { useSearchContext } from "../context/pages/searchPage";
import "../styles/components/plantInspector.scss";

const PlantInspector: FunctionComponent = () => {
	const { selectedPlant } = useSearchContext();
	const { setModalOpen } = useSearchContext();

	const onClickClose = () => {
		setModalOpen(false);
	};
	return (
		<div>
			<button
				className={"delete exitButton is-large"}
				onClick={onClickClose}
			></button>
			<div className={"plantInspectorContainer"}>
				<div>{selectedPlant?.commonName[0]}</div>
				<img
					className="plantInspectorImg"
					src={selectedPlant?.img}
					alt=""
				></img>
				<div>{selectedPlant?.id}</div>
			</div>
		</div>
	);
};
export default PlantInspector;
