import Noctis from "../assets/imgs/noctis.svg"

export default function Footer() {
	return (
		<footer>
			<div className="p-6 flex flex-col md:flex-row justify-between md:pb-11 gap-4">
				<p className="text-label-sm text-neutral-700">© Noctis Sudio - All Rights Reserved 2025 </p>
				<ul className="flex flex-col md:flex-row gap-2 md:gap-5">
					<li className="text-caption-xs uppercase text-neutral-600 hover:text-brand whitespace-nowrap"><a href="mailto:support@noctis.studio">Email</a></li>
					<li className="text-caption-xs uppercase text-neutral-600 hover:text-brand whitespace-nowrap"><a href="">Book a Call</a></li>
					<li className="text-caption-xs uppercase text-neutral-600 hover:text-brand whitespace-nowrap"><a href="">Instagram</a></li>
				</ul>
			</div>
			<img src={Noctis} alt="Noctis Studio" className="select-none"/>
		</footer>
	)	
}