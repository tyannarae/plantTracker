import React, { FunctionComponent } from "react";
import { UserPlant, Plants } from "../database/plants";
import "../styles/components/collectionsBox.scss";

export interface props {
	userPlant: UserPlant;
	onClick: (e: React.MouseEvent) => void;
}

export const CollectionBox: FunctionComponent<props> = (props) => {
	const plant = props.userPlant;
	const id = plant.id;

	const edit = () => {
		console.log("");
	};

	const getLightRequirments = () => {
		const plantLightRecs = Plants[id]?.lightRequirements;
		if (plantLightRecs === undefined) {
			return undefined;
		} else {
			return plantLightRecs.map((lightReq) => (
				<div className="tag is-success is-small is-rounded ">{lightReq}</div>
			));
		}
	};
	return (
		<div className="container">
			<div className="box content">
				<div className="level">
					<div className=" tile is-vertical level-left">
						<div className=" tile level-item firstTile">
							<div className="tile content ">
								<strong>{Plants[id].commonName[0]}</strong>
							</div>
							<img
								className="tile image "
								alt={props.userPlant.name}
								src={Plants[id].img}
							></img>
						</div>
					</div>
					<div className="tile is-veritcal tags">
						<div className="">
							Light Requirements
							{getLightRequirments()}
						</div>
						<div className="">
							Difficult to Grow:
							<div className="tag is-success is-small is-rounded ">
								{Plants[id].difficultyLevel}
							</div>
						</div>
						<div className="">
							Humidity:
							<div className="tag is-success is-small is-rounded ">
								{Plants[id].humidityLevel}
							</div>
						</div>
					</div>
					<div className="level-item has-text-centered"></div>
					<div className="tile  level">
						<div className=" tile level-right">
							<div
								className="button level-item  is-success is-outlined is-small "
								onClick={edit}
							>
								edit
							</div>
							<div
								className="button level-item  is-danger is-small"
								onClick={edit}
							>
								delete
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
