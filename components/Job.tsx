import Image from 'next/image'
import Link from 'next/link'
import CompanyLogo from './CompanyLogo'
import ContractMetaData from './ContractMetaData'

const Job = ({
	id,
	company,
	logo,
	logoBackground,
	position,
	postedAt,
	contract,
	location,
}: Job) => {
	return (
		<article className='relative rounded-md bg-white pb-9 pl-8 pr-2 pt-12 dark:bg-veryDarkBlue'>
			<div className='absolute -top-6'>
				<CompanyLogo data={{ logo, company, logoBackground }} />
			</div>
			<Link href={`/job/${id}`} className='flex flex-col gap-11'>
				<div className='flex flex-col gap-3 md:gap-4'>
					<ContractMetaData data={{ postedAt, contract }} />
					<p className='text-xl font-bold text-veryDarkBlue dark:text-white'>
						{position}
					</p>
					<p className='mt-1 text-darkGrey md:mt-0'>{company}</p>
				</div>
				<p className='text-sm font-bold text-violet'>{location}</p>
			</Link>
		</article>
	)
}
export default Job
