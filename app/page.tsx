import FullForm from '@/components/FullForm'
import JobsList from '@/components/JobsList'
import MobileForm from '@/components/MobileForm'
import jobsData from '@/data.json'

export default function Home() {
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
			<JobsList data={jobsData} />
		</main>
	)
}
