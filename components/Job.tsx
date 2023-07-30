import Image from 'next/image'
import Link from 'next/link'

// TODO: Add conditional color in logoBackground from logoBackground
// bg-[hslValue] doesn't work!!!

const Job = ({
	company,
	logo,
	logoBackground,
	position,
	postedAt,
	contract,
	location,
	website,
	apply,
	description,
	requirements,
	role,
}: Job) => {
	return (
		<article className='relative rounded-md bg-white pb-9 pl-8 pr-2 pt-12 dark:bg-veryDarkBlue'>
			<div className='absolute -top-6'>
				<div className='relative h-[50px] w-[50px] overflow-hidden rounded-2xl bg-violet'>
					<Image
						src={logo}
						alt={company}
						fill
						className='absolute object-scale-down'
					/>
				</div>
			</div>
			<Link href={'#'} className='flex flex-col gap-11'>
				<div className='flex flex-col gap-3 md:gap-4'>
					<p className='flex items-center gap-3 text-darkGrey'>
						{postedAt}
						<span className='h-1 w-1 rounded-full bg-darkGrey'></span>
						{contract}
					</p>
					<p className='text-xl font-bold text-veryDarkBlue dark:text-white'>{position}</p>
					<p className='mt-1 text-darkGrey md:mt-0'>{company}</p>
				</div>
				<p className='text-sm font-bold text-violet'>{location}</p>
			</Link>
		</article>
	)
}
export default Job
