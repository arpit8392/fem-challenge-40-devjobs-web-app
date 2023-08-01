type Props = {
	data: {
		role: Role
	}
}
const Role = ({
	data: {
		role: { content, items },
	},
}: Props) => {
	return (
		<div className='flex flex-col gap-8'>
			<div className='flex flex-col gap-7'>
				<h3 className='text-xl font-bold text-veryDarkBlue dark:text-white'>
					What You Will Do?
				</h3>
				<p className='text-base/7 text-darkGrey'>{content}</p>
			</div>
			<ol className='flex list-decimal flex-col gap-2 px-6 marker:text-violet'>
				{items.map((item, index) => (
					<li key={index} className='pl-7 text-base/7 text-darkGrey'>
						{item}
					</li>
				))}
			</ol>
		</div>
	)
}
export default Role
