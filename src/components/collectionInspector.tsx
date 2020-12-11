import React, { FunctionComponent } from "react";
// import Dropdown from "react-dropdown";
// import DatePicker from "react-datepicker";
import { useSearchContext } from "../context/pages/searchPage";
import { DirectionFacing } from "../models/directionFacing";
// import { UserPlant, Plant, collectionName } from "../database/plants";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";

const CollectionInspector: FunctionComponent = () => {
	const { selectedPlant } = useSearchContext();
	const { isModalOpen, setModalOpen } = useSearchContext();
	const closeModal = () => {
		setModalOpen(!isModalOpen);
	};

	const directionOptions: Array<string> = [];
	Object.keys(DirectionFacing).map((direction) =>
		directionOptions.push(direction)
	);
	const plantName = selectedPlant?.commonName[0];

	const getLightRequirements = () => {
		if (selectedPlant?.lightRequirements === undefined) {
			return undefined;
		} else {
			return (
				<div className="tags">
					<strong> Light Requirements:</strong>
					{selectedPlant?.lightRequirements.map((lightReq) => (
						<div className="tag is-success is-small is-rounded ">
							{lightReq}
						</div>
					))}
				</div>
			);
		}
	};

	return (
		<div className="modal is-active ">
			<div className="modal-background" onClick={closeModal}></div>
			<div className="modal-card">
				<section className="modal-card-body">
					<header className="modal-card-head">
						<p className="modal-card-title">{plantName}</p>
						<button
							className="delete"
							aria-label="close"
							onClick={closeModal}
						></button>
					</header>
					<div className="tile is-ancestor">
						<div className="tile is-parent">
							<img className="plantImg" src={selectedPlant?.img} alt=""></img>
						</div>
						<div className="tile is-vertical is-8">
							<div className="tile">
								<div className="tile is-parent ">
									<article className="tile is-child ">
										Your collections!
									</article>
								</div>
							</div>
						</div>
					</div>
					<div className="tile is-ancestor">
						<div className="tile is-parent">
							<article className="tile is-child ">
								<div>
									<strong>Scientific Name: </strong>
									{selectedPlant?.scientificName}
								</div>
								<div>
									<strong>Ideal Temperature Range: </strong>
									{selectedPlant?.minTemp} - {selectedPlant?.maxTemp}
								</div>

								<div>
									<strong>Misting Requirement: </strong>
									{selectedPlant?.misting}
								</div>
								<div>
									<strong>Difficulty: </strong>
									<div className="tag is-success is-small is-rounded">
										{selectedPlant?.difficultyLevel}
									</div>
								</div>
								<div>
									<strong>Humidity Level:</strong>
									<div className="tag is-success is-small is-rounded">
										{selectedPlant?.humidityLevel}
									</div>
								</div>
								{getLightRequirements()}
							</article>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
export default CollectionInspector;
