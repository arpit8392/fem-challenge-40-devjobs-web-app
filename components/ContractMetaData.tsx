type Props = {
	data: {
		postedAt: string
		contract: string
	}
}
const ContractMetaData = ({ data: { postedAt, contract } }: Props) => {
	return (
		<p className='flex items-center gap-3 text-darkGrey'>
			{postedAt}
			<span className='h-1 w-1 rounded-full bg-darkGrey'></span>
			{contract}
		</p>
	)
}
export default ContractMetaData
