import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="flex justify-center items-center">
			<div className="text-2xl text-primary font-bold "></div>
		</div>
	);
}

export default App;
