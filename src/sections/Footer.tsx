export default function Footer() {
	return (
		<footer>
			<div className="p-6 flex flex-col md:flex-row justify-between md:pb-11 gap-4 items-center">
				<p className="text-label-sm text-neutral-700 text-center">© Noctis Sudio - All Rights Reserved 2025 </p>
				<ul className="flex justify-between md:justify-start flex-row gap-2 md:gap-5">
					<li><a className="text-caption-xs uppercase text-neutral-600 hover:text-brand whitespace-nowrap focus-visible:outline-none focus-visible:text-brand" href="mailto:support@noctis.studio">Email</a></li>
					<li><a className="text-caption-xs uppercase text-neutral-600 hover:text-brand whitespace-nowrap focus-visible:outline-none focus-visible:text-brand" href="">Book a Call</a></li>
					<li><a className="text-caption-xs uppercase text-neutral-600 hover:text-brand whitespace-nowrap focus-visible:outline-none focus-visible:text-brand" href="">Instagram</a></li>
				</ul>
			</div>
			<img src="/imgs/noctis.svg" alt="Noctis Studio" className="select-none" width={1024}/>
		</footer>
	)	
}