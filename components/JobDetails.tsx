import CompanyLogo from '@/components/CompanyLogo'
import ContractMetaData from '@/components/ContractMetaData'
import Description from '@/components/Description'
import Requirements from '@/components/Requirements'
import Role from '@/components/Role'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { CSSProperties } from 'react'

type Props = {
	data: Job | undefined
}
const JobDetails = ({ data }: Props) => {
	const {
		company,
		logo,
		logoBackground,
		position,
		postedAt,
		contract,
		location,
		website,
		apply,
		description,
		requirements,
		role,
	} = data!

	return (
		<div className='flex flex-col gap-6 md:gap-8'>
			<section className='relative mx-6 -mt-4 flex flex-col items-center rounded-md bg-white pb-8 pt-12 dark:bg-veryDarkBlue md:mx-10 md:-mt-8 md:flex-row md:overflow-hidden md:py-0 lg:mx-[355px]'>
				<div className='absolute -top-6 md:hidden'>
					<CompanyLogo data={{ logo, company, logoBackground }} />
				</div>
				<div
					className='relative hidden h-40 w-40 md:block'
					style={{ background: logoBackground } as CSSProperties}>
					<Image
						src={logo}
						alt={company}
						fill
						className='object-contain px-8'
					/>
				</div>
				<div className='flex flex-col items-center gap-6 md:w-full md:flex-row md:justify-between md:px-12'>
					<div className='flex flex-col items-center gap-3 md:items-start '>
						<h1 className='text-xl font-bold text-veryDarkBlue dark:text-white md:text-2xl'>
							{company}
						</h1>
						<p className='text-darkGrey'>{`${company.toLowerCase()}.com`}</p>
					</div>
					<Button asChild variant='secondary' size='sm'>
						<Link prefetch={false} href={website}>
							Company Site
						</Link>
					</Button>
				</div>
			</section>
			<section className='mx-6 flex flex-col gap-10 rounded-md bg-white px-6 py-10 dark:bg-veryDarkBlue md:mx-10 md:p-12 lg:mx-[355px]'>
				<div className='flex flex-col gap-14 md:flex-row md:items-center md:justify-between '>
					<div className='flex flex-col gap-2 md:gap-3'>
						<ContractMetaData data={{ contract, postedAt }} />
						<h2 className='text-xl font-bold text-veryDarkBlue dark:text-white md:text-[28px]'>
							{position}
						</h2>
						<p className='text-sm font-bold text-violet'>{location}</p>
					</div>
					<Button asChild>
						<Link prefetch={false} href={apply} className='text-center'>
							Apply Now
						</Link>
					</Button>
				</div>
				<Description data={{ description }} />
				<Requirements data={{ requirements }} />
				<Role data={{ role }} />
			</section>
			<footer className='mt-16 flex justify-center rounded-md bg-white p-6 dark:bg-veryDarkBlue md:items-center md:justify-between md:px-10 lg:px-[355px]'>
				<div className='hidden flex-col gap-3 md:flex'>
					<h4 className='text-xl font-bold text-veryDarkBlue dark:text-white'>
						{position}
					</h4>
					<p className='text-darkGrey'>{company}</p>
				</div>
				<Button asChild>
					<Link
						prefetch={false}
						href={apply}
						className='w-full text-center md:w-auto'>
						Apply Now
					</Link>
				</Button>
			</footer>
		</div>
	)
}
export default JobDetails
