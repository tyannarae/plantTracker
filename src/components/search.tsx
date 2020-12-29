import React from "react";
import _ from "lodash";
import { useSearchContext } from "../context/pages/searchPage";
import { Plants } from "../database/plants";

export const Search = () => {
	const { setSearchResults } = useSearchContext();
	const handleSearch = _.debounce((e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			setSearchResults(Plants);
		} else {
			const value = e.target.value.toLowerCase();
			const results = [];
			for (let i = 0; i < Plants.length; i++) {
				const plant = Plants[i];
				for (let j = 0; j < plant.commonName.length; j++) {
					const name = plant.commonName[j];
					if (name.toLowerCase().includes(value)) {
						results.push(plant);
						break;
					}
				}
			}
			setSearchResults(results);
		}
	}, 300);

	return (
		<div data-testid="searchComp" className="field">
			<div className="control">
				<input
					data-testid="searchInput"
					className="input is-primary is-rounded"
					type="text"
					name="search"
					placeholder="Search.."
					onChange={(e) => {
						handleSearch(e);
					}}
				></input>
			</div>
		</div>
	);
};
