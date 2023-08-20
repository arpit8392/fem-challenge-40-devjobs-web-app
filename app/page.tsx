import FilterForm from '@/components/FilterForm'
import Header from '@/components/Header'
import JobsList from '@/components/JobsList'
import jobsData from '@/data.json'

export default function Home() {
	return (
		<main>
			<div className='-mt-10'>
				<FilterForm />
			</div>
			<JobsList data={jobsData} />
		</main>
	)
}
