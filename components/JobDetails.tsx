import Link from 'next/link'
import CompanyLogo from './CompanyLogo'
import ContractMetaData from './ContractMetaData'
import Description from './Description'
import Requirements from './Requirements'
import Role from './Role'

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
		<div className='flex flex-col gap-6 '>
			<section className='relative mx-6 -mt-4 flex flex-col items-center rounded-md bg-white pb-8 pt-12 dark:bg-veryDarkBlue'>
				<div className='absolute -top-6'>
					<CompanyLogo data={{ logo, company, logoBackground }} />
				</div>
				<div className='flex flex-col items-center gap-6'>
					<div className='flex flex-col items-center gap-3'>
						<h1 className='text-xl font-bold text-veryDarkBlue dark:text-white'>
							{company}
						</h1>
						<p className='text-darkGrey'>{`${company.toLowerCase()}.com`}</p>
					</div>
					<Link
						prefetch={false}
						href={website}
						className='rounded-[5px] bg-violet/10 px-5 py-4 font-bold text-violet hover:bg-violet/30 hover:dark:bg-white/25 hover:dark:text-white'>
						Company Site
					</Link>
				</div>
			</section>
			<section className='mx-6 flex flex-col gap-10 rounded-md bg-white px-6 py-10 dark:bg-veryDarkBlue'>
				<div className='flex flex-col gap-14'>
					<div className='flex flex-col gap-2'>
						<ContractMetaData data={{ contract, postedAt }} />
						<h2 className='text-xl font-bold text-veryDarkBlue dark:text-white'>
							{position}
						</h2>
						<p className='text-sm font-bold text-violet'>{location}</p>
					</div>
					<Link
						prefetch={false}
						href={apply}
						className='rounded-[5px] bg-violet py-4 text-center font-bold text-white hover:bg-lightViolet'>
						Apply Now
					</Link>
				</div>
				<Description data={{ description }} />
				<Requirements data={{ requirements }} />
				<Role data={{ role }} />
			</section>
			<footer className='mt-16 flex justify-center rounded-md bg-white p-6 dark:bg-veryDarkBlue'>
				<Link
					prefetch={false}
					href={apply}
					className='w-full rounded-[5px] bg-violet py-4 text-center font-bold text-white hover:bg-lightViolet'>
					Apply Now
				</Link>
			</footer>
		</div>
	)
}
export default JobDetails
