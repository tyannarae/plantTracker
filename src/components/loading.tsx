import React from "react";
import "../styles/components/loading.scss";

export const Loading = () => {
	return (
		<div data-testid="loadingComponent" className="loader-wrapper">
			<div className="loader is-loading">loading...</div>
		</div>
	);
};
