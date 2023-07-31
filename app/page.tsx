import Header from '@/components/Header'
import JobsList from '@/components/JobsList'
import jobsData from '@/data.json'

export default function Home() {
	// console.log(jobsData)
	return (
		<main>
			<Header />
			<JobsList data={jobsData} />
		</main>
	)
}
