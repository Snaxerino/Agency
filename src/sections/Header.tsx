import { Link } from "react-router-dom"
import logo from "/Logo.png"
import NavLink from "../components/Navlink"
import { useState } from "react";
import Cube from "../components/Cube";
import { Close, Menu } from "../components/Icons";

export default function Header() {
	const [isHovered, setHovered] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

	return (
		<header className={`flex flex-col px-6 py-3.5 border-b border-neutral-200 relative ${!menuOpen ? "border-0‘" : "border-b"}`}>
			<Cube className="-left-1.5 -bottom-1.5"/>
			<Cube className="-right-1.5 -bottom-1.5"/>
			<div className="flex items-center justify-between gap-5">
				<Link to="/">
					<img src={logo} alt="" width={24} height={24} className="size-8 md:size-6" />
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
					<Link to="https://cal.com/Noctis.studio" className="text-center group h-9 px-3.5 py-1.5 overflow-hidden bg-neutral-950 rounded-[10px]" target="_blank">
						<div className='group-hover:-translate-y-6 ease-in duration-150'>
							<p className='label-md text-neutral-50'>Book a call</p>
							<p className='label-md text-neutral-50'>Let's do it!</p>
						</div>
					</Link>
				</nav>
				<div className="md:hidden flex gap-4 items-center">
					{
						!menuOpen ? <Menu onClick={toggleMenu}/> : <Close onClick={toggleMenu}/>
					}
				</div>
			</div>
			{menuOpen &&
			<div className="phone-height flex items-end">
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
					<Link to="https://cal.com/Noctis.studio" className="text-center px-3.5 py-2 md:py-1.5 bg-neutral-950 rounded-[10px] label-md text-neutral-50" target="_blank">
						Book a call
					</Link>
				</nav>
			</div>
			}
		</header>
	)
}