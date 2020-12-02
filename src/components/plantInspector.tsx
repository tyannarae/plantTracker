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
		<div className={"plantInspectorContainer"}>
			<button className={"exitButton"} onClick={onClickClose}>
				X
			</button>
			<div>{selectedPlant?.commonName[0]}</div>
			<img className="plantInspectorImg" src={selectedPlant?.img} alt=""></img>
			<div>{selectedPlant?.id}</div>
		</div>
	);
};
export default PlantInspector;
