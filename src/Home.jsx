import { FaFigma, FaGithub, FaReact } from "react-icons/fa";
import {
	SiDjango,
	SiNextdotjs,
	SiTailwindcss,
	SiVite,
	SiOpencv,
	SiSupabase,
    SiPytorch,
    SiTensorflow,
    SiAstro,
    
} from "react-icons/si";

export const projects = [
	{
		id: 1,
		title: "VisionCube",
		description:
			"Rubik's Cube solver that scans all six sides of the cube and generates a solving algorithm.",
		tech: ["Computer Vision", "OpenCV", "Python"],
		github: "https://github.com/SaifeldeenAdel/VisionCube",
	},
	{
		id: 2,
		title: "LicenSee",
		description:
			"Egyptian license plate recognition system that detects and reads plate numbers using computer vision and OCR.",
		tech: ["Computer Vision", "Python", "OCR"],
		github: "https://github.com/SaifeldeenAdel/LicenSee",
	},

	{
		id: 3,
		title: "CountACar",
		description:
			"From-scratch object tracking and vehicle counting implementation focused on detection and motion tracking logic.",
		tech: ["Object Tracking", "Algorithms", "Computer Vision"],
		github: "https://github.com/SaifeldeenAdel/CountACar",
	},
	{
		id: 4,
		title: "The Poster Gallery",
		description:
			"Minimal interactive poster gallery with smooth animations and modern frontend design.",
		tech: ["React", "Tailwind CSS", "Framer Motion"],
		github: "https://github.com/SaifeldeenAdel/thePosterGallery",
		demo: "https://thepostergallery.vercel.app",
	},
	{
		id: 5,
		title: "Recipist",
		description: "Recipe creator tool for cooking and baking enthusiasts.",
		tech: ["Next.js", "Supabase", "Tailwind CSS"],
		github: "https://github.com/SaifeldeenAdel/recipist",
	},
	{
		id: 6,
		title: "Financee",
		description: "Trade and risk management app designed for stock investors.",
		tech: ["Django", "SQLite"],
		github: "https://github.com/SaifeldeenAdel/financee",
	},
	{
		id: 7,
		title: "Foodie",
		description:
			"Searching and saving recipes from all of the popular food magazines.",
		tech: ["Flask", "SQLAlchemy"],
		github: "https://github.com/SaifeldeenAdel/foodie",
	},
	{
		id: 8,
		title: "MindCanvas",
		description:
			"Personal blog where I write about art, reading, and ideas I'm exploring.",
		tech: ["Next.js", "Tailwind CSS"],
		github: "https://github.com/SaifeldeenAdel/mindcanvas",
		demo: "https://mindcanvas.vercel.app",
	},
	{
		id: 9,
		title: "saif.dev",
		description: "The thing you're on right now. My present personal website.",
		tech: ["ReactJS", "Tailwind CSS"],
		github: "https://github.com/SaifeldeenAdel/saif.dev",
		demo: "https://saifdev.vercel.app",
	},
];

const tools = [
    { name: "PyTorch", icon: <SiPytorch size={30} />, url: "https://pytorch.org/" },
	{ name: "Next.js", icon: <SiNextdotjs size={30} />, url: "https://nextjs.org/" },
    { name: "Astro", icon: <SiAstro size={30} />, url: "https://astro.build/" },
	{ name: "ReactJS", icon: <FaReact size={30} />, url: "https://reactjs.org" },
    { name: "OpenCV", icon: <SiOpencv size={30} />, url: "https://opencv.org/" },
    {
        name: "TensorFlow",
        icon: <SiTensorflow size={30} />,
        url: "https://www.tensorflow.org/",
    },
	{
		name: "Tailwind",
		icon: <SiTailwindcss size={30} />,
		url: "https://tailwindcss.com",
	},
	{ name: "Figma", icon: <FaFigma size={30} />, url: "https://figma.com" },
	{ name: "Supabase", icon: <SiSupabase size={30} />, url: "https://supabase.com" },
	{ name: "Vite", icon: <SiVite size={30} />, url: "https://vitejs.dev" },
	{
		name: "Django",
		icon: <SiDjango size={25} />,
		url: "https://docs.djangoproject.com/en/4.2/",
	},
	{ name: "GitHub", icon: <FaGithub size={30} />, url: "https://github.com" },
];

export default function Home() {
	document.title = "saif ↦ home";
	return (
		<>
			<h1 className="mb-2 text-4xl font-bold">Hi, I'm Saif.</h1>

			<p className="text-[1.2rem] font-light">
				I'm a 22 y/o Computer Engineering undergraduate who likes to code. Lately,
				I've been especially interested in AI research, particularly in the field
				of computer vision. What draws me into the domain of AI research is the fact that I can satisfy my love for mathematics along with programming, its two birds with one stone.
			</p>
			<br />

			<p className="text-[1.2rem] font-light">
				At the same time, I still have love for software engineering, I'm very
				fond of the whole process involved in producing clean and usable
				interfaces, like this one! I'm still exploring how to best combine these
				two interests, whether that means contributing to research that eventually
				ships into production or being involved in designing ML-driven products.
			</p>
			<br />

			<p className="text-[1.2rem] font-light">
				When I'm not busy with coursework or self-stdying, I work on{" "}
				<a
					href="https://github.com/SaifeldeenAdel"
					target="_blank"
					className="text-secondary hover:underline hover:underline-offset-4"
				>
					other projects
				</a>
				. I also occasionally write posts on my{" "}
				<a
					href="https://mindcanvas.vercel.app"
					target="_blank"
					className="text-secondary"
				>
					blog
				</a>{" "}
				about things I find interesting in art, life, etc. (although it's been a
				while, I should get back to it). Lastly, my strong interest in art has led
				me to build{" "}
				<a
					href="https://thepostergallery.vercel.app"
					target="_blank"
					className="text-secondary hover:underline hover:underline-offset-4"
				>
					The Poster Gallery
				</a>
				, a small creative space where I display posters I've designed.
			</p>

			<br />
			<br />
			<h1 className="mb-4 text-3xl font-bold">Frameworks and Tools</h1>
			<section className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
				{tools.map((tool) => (
					<a
						key={tool.name}
						href={tool.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex h-[4.5em] items-center justify-center gap-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-3 font-light transition-all duration-200 hover:scale-105">
							{tool.icon} {tool.name}
						</div>
					</a>
				))}
			</section>
			<br />

			<section className="">
				<h2 className="mb-5 text-3xl font-bold">Things I've Built</h2>

				<div className="grid gap-5 md:grid-cols-2">
					{projects.map((project) => (
						<div
							key={project.id}
							className="rounded-xl border border-secondary/30 bg-dark-2 p-6 transition-all duration-300 hover:border-secondary"
						>
							<h3 className="mb-3 text-xl font-semibold">
								{project.title}
							</h3>

							<p className="mb-4 text-sm font-light opacity-80">
								{project.description}
							</p>

							<div className="mb-4 flex flex-wrap gap-2">
								{project.tech.map((techItem, index) => (
									<span
										key={index}
										className="rounded-md bg-secondary/20 px-2 py-1 text-xs text-secondary"
									>
										{techItem}
									</span>
								))}
							</div>

							<div className="flex gap-4">
								<a
									href={project.github}
									target="_blank"
									className="text-sm font-medium text-secondary hover:underline"
								>
									Codebase
								</a>

								{project.demo && (
									<a
										href={project.demo}
										target="_blank"
										className="text-sm font-medium text-secondary hover:underline"
									>
										Live Demo
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
