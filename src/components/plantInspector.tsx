import React, { FunctionComponent, useState } from "react";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";
import { useSearchContext } from "../context/pages/searchPage";
import { DirectionFacing } from "../models/directionFacing";
import { UserPlant, Plant, collectionName } from "../database/plants";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import "../styles/components/plantInspector.scss";

const PlantInspector: FunctionComponent = () => {
	const [underGrowLight, setGrowLight] = useState<boolean>(false);
	const [isInWindow, setInWindow] = useState<boolean>(false);
	const [directionFacing, setDirectionFacing] = useState<string | undefined>(
		undefined
	);
	const [dateWateredLast, setWaterDate] = useState<Date>(new Date());
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
					Light Requirements:
					{selectedPlant?.lightRequirements.map((lightReq) => (
						<div className="tag is-primary ">{lightReq}</div>
					))}
				</div>
			);
		}
	};

	const addToCollection = () => {
		const currentPlant = selectedPlant as Plant;
		const newPlant: UserPlant = {
			id: currentPlant.id,
			directionFacing: directionFacing as DirectionFacing,
			inWindowSeal: isInWindow,
			growLight: underGrowLight,
			lastWaterDate: dateWateredLast,
		};
		const dbString = window.sessionStorage.getItem(collectionName);
		let db = [];
		if (dbString !== null) {
			db = JSON.parse(dbString);
		}
		db.push(newPlant);
		window.sessionStorage.setItem(collectionName, JSON.stringify(db));
	};

	return (
		<div className="modal is-active">
			<div className="modal-background"></div>
			<div className="modal-card">
				<header className="modal-card-head">
					<p className="modal-card-title">{plantName}</p>
					<button
						className="delete"
						aria-label="close"
						onClick={closeModal}
					></button>
				</header>
				<section className="modal-card-body">
					<div className="tile is-ancestor">
						<div className="tile is-parent">
							<img className="plantImg" src={selectedPlant?.img} alt=""></img>
						</div>
						<div className="tile is-vertical is-8">
							<div className="tile">
								<div className="tile is-parent ">
									<article className="tile is-child notification is-primary is-light">
										<div> Add {plantName} to your collection:</div>
										<div>
											<input
												type="checkbox"
												onChange={() => {
													setInWindow(!isInWindow);
												}}
											/>
											Located in a Window Seal?
										</div>
										<div>
											<input
												type="checkbox"
												onChange={() => {
													setGrowLight(!underGrowLight);
												}}
											/>
											Located under a Grow Light?
										</div>
										<div className="dateAndDropdownContainer">
											<div>
												<DatePicker
													className={"input is-primary"}
													placeholderText={"Date Last Watered"}
													selected={dateWateredLast}
													onChange={(date) => setWaterDate(date as Date)}
												></DatePicker>
											</div>

											<div className=" dropdownContainer">
												<Dropdown
													onChange={(e) => {
														setDirectionFacing(e.value);
													}}
													className="directionFacingDropdown"
													options={directionOptions}
													placeholder="Direction Facing"
												></Dropdown>
											</div>
										</div>
										<button className="button " onClick={addToCollection}>
											{" "}
											Add
										</button>
									</article>
								</div>
							</div>
						</div>
					</div>
					<div className="tile is-ancestor">
						<div className="tile is-parent">
							<article className="tile is-child ">
								<div> Scientific Name: {selectedPlant?.scientificName}</div>
								<div>
									Ideal Temperature Range: {selectedPlant?.minTemp} -{" "}
									{selectedPlant?.maxTemp}
								</div>

								<div>Misting Requirement: {selectedPlant?.misting}</div>
								<div>
									{" "}
									Difficulty:
									<div className="tag is-primary">
										{" "}
										{selectedPlant?.difficultyLevel}
									</div>
								</div>
								<div>
									{" "}
									Humidity Level:{" "}
									<div className="tag is-primary">
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
export default PlantInspector;
