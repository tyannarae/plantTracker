import React, { FunctionComponent, useState } from "react";
import Dropdown from "react-dropdown";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import { useCollectionContext } from "../context/pages/userCollections";
import { useSearchContext } from "../context/pages/searchPage";
import { DirectionFacing } from "../models/directionFacing";
import { UserPlant, Plant, collectionName, Plants } from "../database/plants";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";

export const CollectionInspector: FunctionComponent = () => {
	const [userDeclaredPlantName, setUserDeclaredPlantName] = useState<string>(
		"no name provided"
	);
	const [underGrowLight, setGrowLight] = useState<boolean>(false);
	const [isInWindow, setInWindow] = useState<boolean>(false);
	const [directionFacing, setDirectionFacing] = useState<string | undefined>(
		undefined
	);
	const [dateWateredLast, setWaterDate] = useState<Date>(new Date());
	const { selectedPlant } = useCollectionContext();
	const { isModalOpen, setModalOpen } = useCollectionContext();
	const closeModal = () => {
		setModalOpen(!isModalOpen);
	};

	const updateCollection = () => {
		toast.success("Plant has been updated!", {
			position: "top-center",
		});
	};
	const updatePlantName = (e: React.ChangeEvent<HTMLInputElement>) => {};
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
														placeholder="Direction Facing"
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

											<div className="tile level is-parent">
												<button
													className="content is-child button  is-primary "
													onClick={updateCollection}
												>
													Update
												</button>
												<button className="content is-child button is-danger ">
													Delete
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
