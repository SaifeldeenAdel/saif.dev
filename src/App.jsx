import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<header className=" mb-12 bg-dark-1">
				<h2 className="flex items-center gap-3 pb-6 pt-3 text-xl font-bold">
					<img src="/saif.png" alt="" className="w-12 rounded-full" />
					<span className="mt-3">Saif's Dash</span>
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
					applications.
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
					. However in my free time, I like to read, bake, and play chess.
				</p>
			</main>
		</>
	);
}

export default App;
