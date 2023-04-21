import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdNotes } from "react-icons/md";

export default function Contact() {
	document.title = "saif ↦ contact";

	return (
		<>
			<h1 className="mb-5 text-4xl font-bold">Contact Me!</h1>
			<section className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
				<a href="mailto:saifeldeenadell@gmail.com" target="_blank">
					<div className="flex h-[4em] items-center justify-center gap-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 font-light transition-all duration-200 hover:scale-105">
						<FaEnvelope size={28} /> Send an email
					</div>
				</a>
				<a href="https://linkedin.com/in/SaifeldeenAdel" target="_blank">
					<div className="flex h-[4em] items-center justify-center gap-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 font-light transition-all duration-200 hover:scale-105">
						<FaLinkedin size={28} /> Let's Connect
					</div>
				</a>
				<a href="https://www.instagram.com/saifeldeenadel/" target="_blank">
					<div className="flex h-[4em] items-center justify-center gap-4 rounded-lg border border-secondary border-opacity-80 bg-dark-2 font-light transition-all duration-200 hover:scale-105">
						<FaInstagram size={28} /> Send a DM
					</div>
				</a>
			</section>
		</>
	);
}
