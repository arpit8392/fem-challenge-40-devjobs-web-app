import FilterForm from '@/components/FilterForm'
import Header from '@/components/Header'
import JobsList from '@/components/JobsList'
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
			<div className='-mt-10'>
				<FilterForm />
			</div>
			{jobs.length ? (
				<JobsList data={jobs} />
			) : (
				<p className='text-2xl font-bold text-center py-10'>
					No jobs found!
				</p>
			)}
		</main>
	)
}
