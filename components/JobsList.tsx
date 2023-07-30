import Job from './Job'

type Props = {
	data: Job[]
}
const JobsList = ({ data }: Props) => {
	return (
		<section className='px-6 pb-8 pt-[72px] md:px-10 md:pb-14 md:pt-28 lg:px-40 lg:pt-36'>
			<ul className='grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-3 md:gap-y-16 lg:grid-cols-3 lg:gap-x-8'>
				{data.map((item) => (
					<li key={item.id}>
						<Job {...item} />
					</li>
				))}
			</ul>
		</section>
	)
}
export default JobsList
