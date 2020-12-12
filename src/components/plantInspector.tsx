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
	const [userDeclaredPlantName, setUserDeclaredPlantName] = useState<string>(
		"no name provided"
	);
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

	const addToCollection = () => {
		const currentPlant = selectedPlant as Plant;
		const newPlant: UserPlant = {
			name: userDeclaredPlantName,
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

	const setPlantName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const nameValue = e.target.value;
		if (!nameValue) {
			setUserDeclaredPlantName("no name provided");
		} else {
			const value = nameValue.toLowerCase();
			setUserDeclaredPlantName(value);
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
										<div className="tile">
											<div className=" tile is-parent">
												<strong className="tile content">
													Add {plantName} to your collection
												</strong>
											</div>
										</div>
										<div className="tile ">
											<div className="tile is-parent is-vertical">
												<div className="tile">Last watered on:</div>
												<DatePicker
													className={"input is-success"}
													placeholderText={"Date Last Watered"}
													selected={dateWateredLast}
													onChange={(date) => setWaterDate(date as Date)}
												></DatePicker>
											</div>

											<div className="tile is-parent is-vertical dropdownContainer">
												<div className="tile">Direction:</div>
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
										<div className="tile is-parent is-vertical">
											<div className="field">
												<div className="control">
													<input
														onChange={(e) => setPlantName(e)}
														className="input is-success"
														type="text"
														placeholder="Name this plant"
													/>
												</div>
											</div>
											<label className="tile is-child checkbox">
												<input
													type="checkbox"
													onChange={() => {
														setInWindow(!isInWindow);
													}}
												/>
												Located in a window seal?
											</label>
											<label className="tile is-child checkbox">
												<input
													type="checkbox"
													onChange={() => {
														setGrowLight(!underGrowLight);
													}}
												/>
												Located under a grow light?
											</label>
										</div>

										<div className="tile is-parent">
											<button
												className="tile is-child button is-primary"
												onClick={addToCollection}
											>
												Add
											</button>
										</div>
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
export default PlantInspector;
