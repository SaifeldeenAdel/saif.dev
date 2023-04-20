import { useState } from "react";
import { FaFigma, FaGithub, FaPython, FaReact } from "react-icons/fa";
import {
	SiDjango,
	SiNextdotjs,
	SiTailwindcss,
	SiVite,
	SiStyledcomponents,
	SiPandas,
} from "react-icons/si";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<header className=" mb-12 bg-dark-1">
				<h2 className="flex items-center gap-3 pb-6 pt-3 text-xl font-bold">
					<img src="/saif.png" alt="" className="w-12 rounded-full" />
					<span className="mt-3">saif.dev</span>
				</h2>
				<nav className="flex gap-3 text-[1.05rem] font-[300] text-secondary">
					<NavLink
						to={`/`}
						className={({ isActive }) =>
							isActive
								? "underline underline-offset-4"
								: "hover:underline hover:underline-offset-4"
						}
					>
						Home
					</NavLink>

					<NavLink
						to={`/blog`}
						className={({ isActive }) =>
							isActive
								? "underline underline-offset-4"
								: "hover:underline hover:underline-offset-4"
						}
					>
						Blog
					</NavLink>

					<a
						href="https://github.com/SaifeldeenAdel"
						target="_blank"
						className="hover:underline hover:underline-offset-4"
					>
						GitHub
					</a>

					<NavLink
						to={`/contacts`}
						className={({ isActive }) =>
							isActive
								? "underline underline-offset-4"
								: "hover:underline hover:underline-offset-4"
						}
					>
						Contact Me
					</NavLink>
				</nav>
			</header>
			<main>
				<h1 className="mb-2 text-4xl font-bold">Hi, I'm Saif.</h1>
				<p className="text-[1.2rem] font-light">
					I'm a 19 y/o self-taught developer and I like to code. Currently I'm
					mostly interested in building <b>clean, minimal UI</b> for web
					applications. However I also try to dip my toes into the rest of the
					stack and not just stick to the frontend side of things.
				</p>
				<br />

				<p className="text-[1.2rem] font-light">
					When I'm not busy with midterms or finals, I try to work on any{" "}
					<a
						href="https://github.com/SaifeldeenAdel"
						target="_blank"
						className="text-secondary hover:underline hover:underline-offset-4"
					>
						current projects
					</a>
					. However in my free time, I like to read, bake, and play chess. And
					you might sometimes find me writing one of my{" "}
					<a
						href="https://mindcanvas.com"
						target="_blank"
						className="text-secondary"
					>
						blog
					</a>{" "}
					posts.
				</p>

				<br />
				<br />
				<h1 className="mb-4 text-3xl font-bold">Frameworks and Tools</h1>
				<section className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
					<div className="flex h-[4.5em] items-center justify-center gap-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-3 font-light transition-all duration-200 hover:scale-105">
						<FaReact size={30} /> ReactJS
					</div>
					<div className="flex h-[4.5em] items-center justify-center gap-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-3 font-light transition-all duration-200 hover:scale-105">
						<SiNextdotjs size={30} /> Next.js
					</div>
					<div className="flex h-[4.5em] items-center justify-center gap-3 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-3 font-light transition-all duration-200 hover:scale-105">
						<SiTailwindcss size={30} /> Tailwind CSS
					</div>
					<div className="flex h-[4.5em] items-center justify-center gap-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-3 font-light transition-all duration-200 hover:scale-105">
						<SiVite size={30} /> Vite
					</div>
					<div className="flex h-[4.5em] items-center justify-center gap-3 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-3 font-light transition-all duration-200 hover:scale-105">
						<SiDjango size={25} /> Django
					</div>
					<div className="flex h-[4.5em] items-center justify-center gap-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-3 font-light transition-all duration-200 hover:scale-105">
						<FaGithub size={30} /> GitHub
					</div>

					<div className="flex h-[4.5em] items-center justify-center gap-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-3 font-light transition-all duration-200 hover:scale-105">
						<FaFigma size={30} /> Figma
					</div>

					<div className="flex h-[4.5em] items-center justify-center gap-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-3 font-light transition-all duration-200 hover:scale-105">
						<SiPandas size={30} /> Pandas
					</div>
				</section>
				<br />

				<h1 className="mb-4 text-3xl font-bold">Things I've Built</h1>
				<section className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
					<a
						href="https://github.com/SaifeldeenAdel/mindcanvas"
						target="_blank"
					>
						<div className="flex h-[10em] flex-col gap-y-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-5 font-light transition-all duration-200 hover:scale-105">
							<div className="flex flex-col gap-y-1">
								<span className="text-[1.3rem] font-light text-secondary">
									MindCanvas
								</span>
								<p className="text-[1.1rem] leading-5 tracking-tighter">
									Blog website for posting random
								</p>
							</div>
							<div className="flex flex-row gap-x-2">
								<div>Next.js</div>
								<span className="font-bold">•</span>
								<div>Tailwind CSS</div>
							</div>
						</div>
					</a>

					<a href="https://github.com/SaifeldeenAdel/saif.dev" target="_blank">
						<div className="flex h-[10em] flex-col gap-y-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-5 font-light transition-all duration-200 hover:scale-105">
							<div className="flex flex-col gap-y-1">
								<span className="text-[1.3rem] font-light text-secondary">
									saif.dev
								</span>
								<p className="text-[1.1rem] leading-5 tracking-tighter">
									Current, minimal portfolio website
								</p>
							</div>
							<div className="flex flex-row gap-x-2">
								<div>Next.js</div>
								<span className="font-bold">•</span>
								<div>Tailwind CSS</div>
							</div>
						</div>
					</a>
					<a href="https://github.com/SaifeldeenAdel/portfolio" target="_blank">
						<div className="flex h-[10em] flex-col gap-y-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-5 font-light transition-all duration-200 hover:scale-105">
							<div className="flex flex-col gap-y-1">
								<span className="text-[1.3rem] font-light text-secondary">
									Old Portfolio
								</span>
								<p className="text-[1.1rem] leading-5 tracking-tighter">
									Older personal website when I thought animations were
									cool
								</p>
							</div>
							<div className="flex flex-row gap-x-2">
								<div>ReactJS</div>
								<span className="font-bold">•</span>
								<div>Framer motion</div>
							</div>
						</div>
					</a>

					<a href="https://github.com/SaifeldeenAdel/financee" target="_blank">
						<div className="flex h-[10em] flex-col gap-y-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-5 font-light transition-all duration-200 hover:scale-105">
							<div className="flex flex-col gap-y-1">
								<span className="text-[1.3rem] font-light text-secondary">
									Financee
								</span>
								<p className="text-[1.1rem] leading-5 tracking-tighter">
									Trade and risk management app for stock investors.
								</p>
							</div>
							<div className="flex flex-row gap-x-2">
								<div>Django</div>
								<span className="font-bold">•</span>
								<div>SQLite</div>
							</div>
						</div>
					</a>

					<a href="https://github.com/SaifeldeenAdel/foodie" target="_blank">
						<div className="flex h-[10em] flex-col gap-y-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 p-5 font-light transition-all duration-200 hover:scale-105">
							<div className="flex flex-col gap-y-1">
								<span className="text-[1.3rem] font-light text-secondary">
									Foodie
								</span>
								<p className="text-[1.1rem] leading-5 tracking-tighter">
									Search and save recipes from popular food magazines.
								</p>
							</div>
							<div className="flex flex-row gap-x-2">
								<div>Flask</div>
								<span className="font-bold">•</span>
								<div>SQLAlchemy</div>
							</div>
						</div>
					</a>
				</section>
			</main>
		</>
	);
}

export default App;
