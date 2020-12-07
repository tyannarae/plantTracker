import React, { FunctionComponent, useState } from "react";
import Modal from "react-modal";
import PlantInspector from "../components/plantInspector";
import NavBar from "../components/navBar";
import PlantCard from "../components/plantCard";
import { Loading } from "../components/loading";
import { SearchPageContext } from "../context/pages/searchPage";
import { Plants, Plant } from "../database/plants";
import "../styles/pages/searchPage.scss";

const SearchPage: FunctionComponent = () => {
	const [isLoading, setLoading] = useState(true);
	const [isModalOpen, setModalOpen] = useState(false);
	const [searchResults, setSearchResults] = useState<Array<Plant>>(Plants);
	const [selectedPlant, setSelectedPlant] = useState<Plant | undefined>(
		undefined
	);
	const customStyles = {
		overlay: { zIndex: 1000 },
	};

	window.onload = () => {
		setLoading(!isLoading);
	};

	return (
		<SearchPageContext.Provider
			value={{
				searchResults,
				setSearchResults,
				isModalOpen,
				setModalOpen,
				selectedPlant,
				setSelectedPlant,
			}}
		>
			{isLoading === true ? (
				<Loading></Loading>
			) : (
				<div className="">
					<Modal
						style={customStyles}
						isOpen={isModalOpen}
						contentLabel="Search Page Plant Modal"
					>
						<PlantInspector />
					</Modal>
					<NavBar />
					<div className="resultsContainer">
						<div className="featuredPlantsHeader">Featured Plants</div>
					</div>
					<div className="cardsContainer">
						{searchResults.map((plant) => (
							<PlantCard key={plant.id} {...plant} />
						))}
					</div>
				</div>
			)}
		</SearchPageContext.Provider>
	);
};

export default SearchPage;
