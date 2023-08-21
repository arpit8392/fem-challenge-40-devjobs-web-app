import JobDetails from '@/components/JobDetails'
import jobData from '@/data.json'

type Props = {
	params: {
		id: string
	}
}

const fetchJobFromID = (id: string) => {
	const job = jobData.find((item) => item.id === Number(id))
	if (!job) return
	return job
}

const JobPage = ({ params: { id } }: Props) => {
	const job = fetchJobFromID(id)

	return (
		<main>
			<JobDetails data={job} />
		</main>
	)
}
export default JobPage
