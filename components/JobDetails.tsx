import Link from 'next/link'
import CompanyLogo from './CompanyLogo'

// sticky top-[100vh] on container min-h-screen to stick the footer at the bottom

type Props = {
	data: Job | undefined
}
const JobDetails = ({ data }: Props) => {
	const {
		id,
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
		<div className='flex flex-col gap-6 px-6'>
			<section className='relative -mt-4 flex flex-col items-center rounded-md bg-white pb-8 pt-12 dark:bg-veryDarkBlue'>
				<div className='absolute -top-6'>
					<CompanyLogo
						logo={logo}
						company={company}
						logoBackground={logoBackground}
					/>
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
			<section className='bg-white px-6 py-10 dark:bg-veryDarkBlue'></section>
		</div>
	)
}
export default JobDetails
