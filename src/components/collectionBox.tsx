import React, { FunctionComponent } from "react";
import { UserPlant, Plants } from "../database/plants";
import "../styles/components/collectionsBox.scss";

export interface props {
	userPlant: UserPlant;
	onClick: (e: React.MouseEvent) => void;
}

const edit = () => {
	console.log("");
};
export const CollectionBox: FunctionComponent<props> = (props) => {
	const plant = props.userPlant;
	const id = plant.id;
	return (
		<div className="container">
			<div className="box content">
				<div className="level">
					<div className=" tile is-vertical level-item has-text-centered">
						<div className="tile content ">{Plants[id].commonName[0]}</div>
						<img
							className="tile content image is-128x128"
							alt={props.userPlant.name}
							src={Plants[id].img}
						></img>
					</div>
					<div className="level-item has-text-centered"></div>
					<div className="level-item has-text-centered"></div>
					<div className="level-item has-text-centered">
						<div
							className="button is-success is-outlined is-small "
							onClick={edit}
						>
							edit
						</div>
						<div className="button is-danger is-small" onClick={edit}>
							delete
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
