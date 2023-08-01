import Header from '@/components/Header'
import JobDetails from '@/components/JobDetails'
import jobData from '@/data.json'

type Props = {
	params: {
		id: string
	}
}

// TODO: Add Error Handling in case of non-existent job is added

const fetchJobFromID = (id: string) => {
	const job = jobData.find((item) => item.id === Number(id))
	if (!job) return
	return job
}

const JobPage = ({ params: { id } }: Props) => {
	const job = fetchJobFromID(id)

	return (
		<main>
			<Header />
			<JobDetails data={job} />
		</main>
	)
}
export default JobPage
