type Props = {
	data: {
		description: string
	}
}
const Description = ({ data: { description } }: Props) => {
	return <p className='text-base/7 text-darkGrey'>{description}</p>
}
export default Description
