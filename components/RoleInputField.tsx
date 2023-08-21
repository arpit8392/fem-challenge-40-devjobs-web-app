import { CheckedState } from '@radix-ui/react-checkbox'
import { Checkbox } from './ui/checkbox'
import { FormControl, FormItem, FormLabel } from './ui/form'

interface RoleInputProps {
	checked: CheckedState | undefined
	onCheckedChange: (checked: CheckedState) => void
}

const RoleInputField = ({ checked, onCheckedChange }: RoleInputProps) => {
	return (
		<FormItem className='flex gap-4 px-6'>
			<FormControl>
				<Checkbox
					checked={checked}
					onCheckedChange={onCheckedChange}
					aria-label='Full Time Only'
					role='button'
					className='h-6 w-6 shrink-0 rounded-[3px] border-none bg-veryDarkBlue/10 hover:bg-violet/25 focus-visible:ring-0 data-[state=checked]:bg-violet data-[state=checked]:text-white dark:bg-white/10 data-[state=checked]:dark:bg-violet data-[state=checked]:dark:text-white'
				/>
			</FormControl>
			<FormLabel className='font-bold text-veryDarkBlue dark:text-white'>
				Full Time Only
			</FormLabel>
		</FormItem>
	)
}
export default RoleInputField
