type Props = {
	data: {
		requirements: Requirements
	}
}
const Requirements = ({
	data: {
		requirements: { content, items },
	},
}: Props) => {
	return (
		<div className='flex flex-col gap-8'>
			<div className='flex flex-col gap-7'>
				<h3 className='text-xl font-bold text-veryDarkBlue dark:text-white'>
					Requirements
				</h3>
				<p className='text-base/7 text-darkGrey'>{content}</p>
			</div>
			<ul className='flex list-disc flex-col gap-2 px-6 marker:text-violet'>
				{items.map((item, index) => (
					<li key={index} className='pl-8 text-base/7 text-darkGrey'>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Requirements
