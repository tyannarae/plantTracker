import React, { FunctionComponent, useState } from "react";
import { Plant } from "../database/plants";
import fallbackImg from "../media/plant-placeholder.png";

export const PlantImg: FunctionComponent<Plant> = (plant) => {
	const { img = "", commonName = ["", ""] } = plant;
	const [imgUrl, setImgUrl] = useState<string>(img);

	function addDefaultSrc() {
		setImgUrl(fallbackImg);
	}
	return (
		<img
			src={imgUrl}
			alt={plant.commonName[0]}
			className="plantImage media-content"
			onError={addDefaultSrc}
		/>
	);
};
