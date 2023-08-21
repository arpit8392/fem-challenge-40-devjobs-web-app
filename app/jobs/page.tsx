import FullForm from '@/components/FullForm'
import JobsList from '@/components/JobsList'
import MobileForm from '@/components/MobileForm'
import jobsData from '@/data.json'
import { getJobsByFilters } from '@/lib/utils'

interface Props {
	searchParams: {
		term?: string
		location?: string
		isFullTime?: string
	}
}

export default function Jobs({ searchParams }: Props) {
	const filters = {
		term: searchParams?.term,
		location: searchParams?.location,
		isFullTime: searchParams?.isFullTime === 'true',
	}
	const jobs = getJobsByFilters(jobsData, filters)

	return (
		<main>
			<div className='mx-6 -mt-10 md:mx-10 lg:mx-40'>
				<div className='block md:hidden'>
					<MobileForm />
				</div>
				<div className='hidden md:block'>
					<FullForm />
				</div>
			</div>
			{jobs.length ? (
				<JobsList data={jobs} />
			) : (
				<p className='py-10 text-center text-2xl font-bold'>No jobs found!</p>
			)}
		</main>
	)
}
