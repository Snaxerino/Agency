import Cube from "../components/Cube";

export default function WhatWeDo() {
	return (
		<section className="border-b border-neutral-200 relative">
			<Cube className="-left-1.5 -bottom-1.5"/>
			<Cube className="-right-1.5 -bottom-1.5"/>
			<div></div>
		</section>
	)
}