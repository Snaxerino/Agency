import Cube from "../components/Cube";

export default function Mission() {
	return (
		<section className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 relative">
			<Cube className="-left-1.5 -bottom-1.5"/>
			<Cube className="-right-1.5 -bottom-1.5"/>
			<div className="md:py-6 px-6 pt-6 w-full md:pr-0">
				<span className="text-caption-xs font-geist text-neutral-600">[1]</span>
				<p className="text-label-lg text-neutral-950">Our mission. Your success.</p>
			</div>
			<div className="w-full p-6 py-6 md:pr-6 md:pl-0 text-label-md">
				<span className="text-neutral-950">We are a studio founded in 2024. </span>
				<p className="text-neutral-500 text-balance">
					We are a team of 
					<span className="text-neutral-950"> 5 creatives </span>
					who create the best possible experience by helping companies/startups grow, 
					<span className="text-neutral-950"> like yours!</span>
				</p>
			</div>
		</section>
	)
}