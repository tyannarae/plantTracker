import React, { FunctionComponent, useState, useEffect } from "react";
import PlantInspector from "../components/plantInspector";
import NavBar from "../components/navBar";
import NoPlantsAvailable from "../components/noPlantsAvailable";
import PlantCard from "../components/plantCard";
import { Loading } from "../components/loading";
import { SearchPageContext } from "../context/pages/searchPage";
import { Plants, Plant } from "../database/plants";
import "../styles/pages/searchPage.scss";

export const SearchPage: FunctionComponent = () => {
	const [isLoading, setLoading] = React.useState(true);
	const [isModalOpen, setModalOpen] = React.useState(false);
	const [searchResults, setSearchResults] = useState<Array<Plant>>(Plants);
	const [selectedPlant, setSelectedPlant] = useState<Plant | undefined>(
		undefined
	);

	useEffect(() => {
		if (isLoading) {
			setTimeout(() => setLoading(!isLoading), 400);
		}
	});

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
			{isLoading ? (
				<Loading />
			) : (
				<div className="">
					{isModalOpen ? <PlantInspector /> : undefined}

					<NavBar search={true} />
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
			)}
		</SearchPageContext.Provider>
	);
};

export default SearchPage;
