import { ReactNode } from 'react';

interface WrapperProps {
	children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
	return (
		<div className='md:mx-8'>
			<div className="max-w-5xl mx-auto md:border-x border-neutral-200">
				{children}
			</div>
		</div>
	)
}