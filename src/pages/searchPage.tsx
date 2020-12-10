import React, { FunctionComponent, useState } from "react";
import PlantInspector from "../components/plantInspector";
import NavBar from "../components/navBar";
import NoPlantsAvailable from "../components/noPlantsAvailable";
import PlantCard from "../components/plantCard";
import { SearchPageContext } from "../context/pages/searchPage";
import { Plants, Plant } from "../database/plants";
import "../styles/pages/searchPage.scss";

const SearchPage: FunctionComponent = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [searchResults, setSearchResults] = useState<Array<Plant>>(Plants);
	const [selectedPlant, setSelectedPlant] = useState<Plant | undefined>(
		undefined
	);

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
			<div className="">
				{isModalOpen ? <PlantInspector /> : undefined}

				<NavBar />
				<div className="resultsContainer">
					<div className="featuredPlantsHeader">Featured Plants</div>
				</div>
				<div className="cardsContainer">
					{searchResults.length === 0 ? (
						<NoPlantsAvailable />
					) : (
						searchResults.map((plant) => (
							<PlantCard key={plant.id} {...plant} />
						))
					)}
				</div>
			</div>
		</SearchPageContext.Provider>
	);
};

export default SearchPage;
