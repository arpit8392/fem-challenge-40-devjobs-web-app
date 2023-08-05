'use client'

import { useState } from 'react'
import Job from './Job'
import { Button } from './ui/button'

type Props = {
	data: Job[]
	size?: number
}
const JobsList = ({ data, size = 12 }: Props) => {
	const [visibleJobs, setVisibleJobs] = useState(data.slice(0, size))

	const handleLoadMore = () => {
		const currentVisibleItems = visibleJobs.length
		const newVisibleItems = data.slice(0, currentVisibleItems + size)
		setVisibleJobs(newVisibleItems)
	}

	return (
		<section className='px-6 pb-8 pt-[72px] md:px-10 md:pb-14 md:pt-28 lg:px-40 lg:pt-36'>
			<ul className='grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-3 md:gap-y-16 lg:grid-cols-3 lg:gap-x-8'>
				{visibleJobs.map((item) => (
					<li key={item.id}>
						<Job {...item} />
					</li>
				))}
			</ul>
			{visibleJobs.length < data.length && (
				<Button
					onClick={handleLoadMore}
					className='mx-auto my-8 flex items-center md:my-14'>
					Load More
				</Button>
			)}
		</section>
	)
}
export default JobsList
