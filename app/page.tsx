import Header from '@/components/Header'
import JobsList from '@/components/JobsList'
import jobsData from '@/data.json'

export default function Home() {
	// console.log(jobsData)
	return (
		<main className='min-h-screen'>
			<Header />
			<JobsList data={jobsData} />
		</main>
	)
}
