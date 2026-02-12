import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function Layout() {
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
						Misc.
					</NavLink>

                    <NavLink
						to={`/contact`}
						className={({ isActive }) =>
							isActive
								? "underline underline-offset-4"
								: "hover:underline hover:underline-offset-4"
						}
					>
						Contact Me
					</NavLink>
                    
					<a
						href="https://github.com/SaifeldeenAdel"
						target="_blank"
						className="hover:underline hover:underline-offset-4"
					>
						GitHub
					</a>

					
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default Layout;
