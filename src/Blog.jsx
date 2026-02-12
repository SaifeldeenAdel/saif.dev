import { FaBookOpen, FaPalette, FaCamera } from "react-icons/fa";

export default function Blog() {
	document.title = "saif ↦ misc";

	return (
		<div className="flex flex-col gap-4">
			{/* Blog Card */}
			<a
				href="https://mindcanvas.vercel.app"
				target="_blank"
				className="group rounded-2xl border border-secondary/40 bg-dark-2 p-6 transition hover:border-secondary hover:shadow-lg"
			>
				<div className="flex items-center gap-6 pl-3">
					<FaBookOpen className="text-2xl text-secondary" />
					<div>
						<h2 className="text-xl font-semibold">MindCanvas</h2>
						<p className="text-sm opacity-70">
							Thoughts on art, reading, and life.
						</p>
					</div>
				</div>
			</a>

			{/* Poster Gallery Card */}
			<a
				href="https://thepostergallery.vercel.app"
				target="_blank"
				className="group rounded-2xl border border-secondary/40 bg-dark-2 p-6 transition hover:border-secondary hover:shadow-lg"
			>
				<div className="flex items-center gap-6 pl-3">
					<FaPalette className="text-2xl text-secondary" />
					<div>
						<h2 className="text-xl font-semibold">The Poster Gallery</h2>
						<p className="text-sm opacity-70">
							A display of posters designed by me.
						</p>
					</div>
				</div>
			</a>

            <a
				href="https://instagram.com/saifsshutters"
				target="_blank"
				className="group rounded-2xl border border-secondary/40 bg-dark-2 p-6 transition hover:border-secondary hover:shadow-lg"
			>
				<div className="flex items-center gap-6 pl-3">
					<FaCamera className="text-2xl text-secondary" />
					<div>
						<h2 className="text-xl font-semibold">Photography</h2>
						<p className="text-sm opacity-70">
							If you wanna check out my photography.
						</p>
					</div>
				</div>
			</a>
		</div>
	);
}
