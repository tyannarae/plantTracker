import React, { FunctionComponent } from "react";
import { UserPlant } from "../database/plants";

export interface props {
	usersPlant: UserPlant[];
	onClick: (e: React.MouseEvent) => void;
}

const edit = () => {
	console.log("");
};
export const CollectionBox: FunctionComponent<props> = () => {
	return (
		<div>
			<div className="button" onClick={edit}>
				edit
			</div>
		</div>
	);
};
