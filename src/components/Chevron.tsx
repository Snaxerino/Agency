type Props = {
	className: string
}

export default function Chevron({className}: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none" className={ className }>
			<path d="M4 6.55713L8 10.5571L12 6.55713" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	)
}