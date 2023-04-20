import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div className="flex h-[95vh] flex-col items-center justify-center font-sans text-2xl text-primary">
			<div>Oops!</div>
			<div className="mb-4 text-xl">An unexpected error occured.</div>
			<p className="text-xl text-secondary opacity-80">
				<i>{error.statusText || error.message}</i>{" "}
			</p>
		</div>
	);
}
