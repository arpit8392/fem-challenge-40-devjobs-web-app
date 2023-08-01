import Image from 'next/image'
import { CSSProperties } from 'react'

type Props = {
	data: {
		logo: string
		company: string
		logoBackground?: string
	}
}
const CompanyLogo = ({ data: { logo, company, logoBackground } }: Props) => {
	return (
		<div
			className='relative h-[50px] w-[50px] overflow-hidden rounded-2xl'
			style={{ backgroundColor: logoBackground } as CSSProperties}>
			<Image
				src={logo}
				alt={company}
				fill
				className='absolute object-scale-down'
			/>
		</div>
	)
}
export default CompanyLogo
