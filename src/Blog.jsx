import { FaHammer } from "react-icons/fa";

export default function Blog() {
	document.title = "saif ↦ blog";

	return (
		<>
			<span className="mb-2 py-6 flex flex-row items-center justify-center gap-3 rounded-xl border border-secondary border-opacity-80 bg-dark-2 p-3 text-center text-base font-bold sm:text-xl">
				Read my blog posts at<a href="https://mindcanvas.vercel.app" target="_blank" className="text-secondary font-bold">MINDCANVAS</a>
			</span>
		</>
	);
}
