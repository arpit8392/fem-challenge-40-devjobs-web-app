import Image from 'next/image'
import { CSSProperties } from 'react'

type Props = {
	logo: string
	company: string
	logoBackground?: string
}
const CompanyLogo = ({ logo, company, logoBackground }: Props) => {
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
