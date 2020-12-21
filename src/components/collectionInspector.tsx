import React, { FunctionComponent, useState } from "react";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import { useCollectionContext } from "../context/pages/userCollections";
import { DirectionFacing } from "../models/directionFacing";
import { collectionName, Plants, Plant, UserPlant } from "../database/plants";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";

export const CollectionInspector: FunctionComponent = () => {
	const {
		index,
		setIndex,
		isModalOpen,
		setModalOpen,
		selectedPlant,
		setSelectedPlant,
	} = useCollectionContext();

	const [userDeclaredPlantName, setUserDeclaredPlantName] = useState<string>(
		selectedPlant?.name as string
	);
	const [underGrowLight, setGrowLight] = useState<boolean>(
		selectedPlant?.growLight as boolean
	);
	const [isInWindow, setInWindow] = useState<boolean>(
		selectedPlant?.inWindowSeal as boolean
	);
	const [directionFacing, setDirectionFacing] = useState<string | undefined>(
		selectedPlant?.directionFacing
	);

	const [dateWateredLast, setWaterDate] = useState<Date>(
		new Date(selectedPlant?.lastWaterDate?.valueOf() as number)
	);

	const closeModal = () => {
		setIndex(undefined);
		setModalOpen(!isModalOpen);
	};

	const updatePlant = () => {
		const updatedPlant = Object.assign({}, selectedPlant);
		const newPlant: UserPlant = {
			name: userDeclaredPlantName,
			id: selectedPlant?.id as number,
			directionFacing: directionFacing as DirectionFacing,
			inWindowSeal: isInWindow,
			growLight: underGrowLight,
			lastWaterDate: dateWateredLast,
		};

		//access session storage
		const dbString = window.sessionStorage.getItem(collectionName);
		let db = [];
		if (dbString !== null) {
			db = JSON.parse(dbString);
		}

		db[index as number] = newPlant;
		console.log(newPlant);
		window.sessionStorage.setItem(collectionName, JSON.stringify(db));

		//display toast that plant has been updated
		toast.success("Plant has been updated!", {
			position: "top-center",
		});
	};
	const updatePlantName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.toLowerCase();
		setUserDeclaredPlantName(value);
	};
	const directionOptions: Array<string> = [];
	Object.keys(DirectionFacing).map((direction) =>
		directionOptions.push(direction)
	);

	return (
		<div className="modal is-active ">
			<div className="modal-background" onClick={closeModal}></div>
			{selectedPlant !== undefined ? (
				<div className="modal-card">
					<section className="modal-card-body">
						<header className="modal-card-head">
							<p className="modal-card-title"></p>
							<button
								className="delete"
								aria-label="close"
								onClick={closeModal}
							></button>
						</header>

						<div className="tile is-ancestor">
							<ToastContainer />
							<div className="tile is-parent">
								<img
									className="plantImg"
									src={Plants[selectedPlant.id].img}
									alt=""
								></img>
							</div>
							<div className="tile is-vertical is-8">
								<div className="tile">
									<div className="tile is-parent ">
										<article className="tile is-child ">
											<div className="tile">
												<div className=" tile is-parent">
													<strong className="tile content">
														Update {selectedPlant.name}
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
														placeholder={directionFacing}
													></Dropdown>
												</div>
											</div>
											<div className="tile is-parent is-vertical">
												<div className="field">
													<div className="control">
														<input
															onChange={(e) => updatePlantName(e)}
															className="input is-success"
															type="text"
															placeholder={
																"Would you like to rename " +
																selectedPlant.name +
																" ?"
															}
														/>
													</div>
												</div>
												<label className="tile is-child checkbox">
													{selectedPlant.inWindowSeal === true ? (
														<input
															checked
															type="checkbox"
															onChange={() => {
																setInWindow(!isInWindow);
															}}
														/>
													) : (
														<input
															type="checkbox"
															onChange={() => {
																setInWindow(!isInWindow);
															}}
														/>
													)}
													Located in a window seal?
												</label>
												<label className="tile is-child checkbox">
													{selectedPlant.growLight === true ? (
														<input
															checked
															type="checkbox"
															onChange={() => {
																setGrowLight(!underGrowLight);
															}}
														/>
													) : (
														<input
															type="checkbox"
															onChange={() => {
																setGrowLight(!underGrowLight);
															}}
														/>
													)}
													Located under a grow light?
												</label>
											</div>

											<div className="tile level is-parent">
												<button
													className="content is-child button  is-primary "
													onClick={updatePlant}
												>
													Update
												</button>
											</div>
										</article>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			) : null}
		</div>
	);
};
export default CollectionInspector;
