type IconProps = {
	onClick: () => void
}

export function Menu({onClick}: IconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" className="stroke-neutral-950 size-6 cursor-pointer" onClick={onClick}>
			<path d="M10 5L20 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M4 12L20 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M4 19L14 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}

export function Close({onClick}: IconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" className="stroke-neutral-950 size-6 cursor-pointer" onClick={onClick}>
			<path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}