import { Link } from "react-router-dom"
import logo from "/Logo.png"
import NavLink from "../components/Navlink"
import { useEffect, useState } from "react"
import { Close, Menu } from "../components/Icons"

export default function Header() {
	const [isHovered, setHovered] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => { setMenuOpen(!menuOpen) }

	useEffect(() => {
        document.body.classList.toggle("overflow-hidden", menuOpen);
        document.body.classList.toggle("lg:overflow-auto", !menuOpen);
        
        return () => {
            document.body.classList.remove("overflow-hidden", "lg:overflow-auto");};
    }, [menuOpen]);

	return (
		<header className={`flex flex-col px-6 py-3.5 border-b border-neutral-200 sticky top-0 left-0 z-100 backdrop-blur ${!menuOpen ? "border-0" : "border-b"}`}>
			<div className="flex items-center justify-between gap-5">
				<Link to="/" className="select-none">
					<img src={logo} alt="Noctis Studio Logo" width={24} height={24} className="min-size-8 md:min-size-6" />
				</Link>	
				<div className="hidden md:block border-l border-neutral-200 h-4 w-px"></div>
				<nav className="hidden w-full md:flex justify-between">
					<ul className="flex gap-4 items-center">
						<li>
							<NavLink href="/work" isHovered={isHovered} setHovered={setHovered}>Work</NavLink>
						</li>
						<li>
							<NavLink href="/blog" isHovered={isHovered} setHovered={setHovered}>Blog</NavLink>
						</li>
						<li>
							<NavLink href="/enterprise" isHovered={isHovered} setHovered={setHovered}>Enterprise</NavLink>
						</li>
					</ul>
					<Link to="https://cal.com/Noctis.studio" className="select-none text-center group h-9 px-3.5 py-1.5 overflow-hidden bg-neutral-950 rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950" target="_blank">
						<div className='group-hover:-translate-y-6 ease-in duration-150'>
							<p className='label-md text-neutral-50'>Book a call</p>
							<p className='label-md text-neutral-50'>Let's do it!</p>
						</div>
					</Link>
				</nav>
				<div className="md:hidden block">
					{ !menuOpen ? <Menu onClick={toggleMenu}/> : <Close onClick={toggleMenu}/> }
				</div>
			</div>
			{menuOpen &&
				<div className={`phone-height flex items-end pb-2 md:hidden`}>
					<nav className="md:hidden w-full flex flex-col gap-8">
						<ul className="flex flex-col gap-8 items-end justify-end grow">
							<li>
								<NavLink href="/work" isHovered={isHovered} setHovered={setHovered}>Work</NavLink>
							</li>
							<li>
								<NavLink href="/blog" isHovered={isHovered} setHovered={setHovered}>Blog</NavLink>
							</li>
							<li>
								<NavLink href="/enterprise" isHovered={isHovered} setHovered={setHovered}>Enterprise</NavLink>
							</li>
						</ul>
						<Link to="https://cal.com/Noctis.studio" className="select-none text-center px-3.5 py-2 md:py-1.5 bg-neutral-950 rounded-[10px] label-md text-neutral-50" target="_blank">
							Book a call
						</Link>
					</nav>
				</div>
			}
		</header>
	)
}