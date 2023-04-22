import { FaHammer } from "react-icons/fa";

export default function Blog() {
	document.title = "saif ↦ blog";

	return (
		<>
			<span className="mb-2 flex flex-row items-center justify-center gap-3 rounded-xl border border-secondary border-opacity-80 bg-dark-2 p-3 text-center text-base font-bold sm:text-xl">
				<FaHammer size={25} className="mb-1" /> blog site is underway, sit tight!
			</span>
		</>
	);
}
