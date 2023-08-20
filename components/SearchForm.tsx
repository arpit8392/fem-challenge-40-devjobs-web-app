'use client'

type Props = {}

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Checkbox } from './ui/checkbox'

const formSchema = z.object({
	term: z.string().min(3, {
		message: 'Search Term must be at least 3 characters.',
	}),
	location: z.string().min(2, {
		message: 'Location must be at least 2 characters',
	}),
	role: z.boolean().default(false).optional(),
})

const SearchForm = (props: Props) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			term: '',
			location: '',
			role: false,
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex mx-6 items-center py-4'>
				<FormField
					control={form.control}
					name='term'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='sr-only'>
								Filter by title, companies, expertise
							</FormLabel>
							<FormControl>
								<Input
									placeholder='Filter by title, companies, expertise…'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='location'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='sr-only'>Filter by location</FormLabel>
							<FormControl>
								<Input placeholder='Filter by location…' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='role'
					render={({ field }) => (
						<FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<div className='space-y-1 leading-none'>
								<FormLabel>Full Time</FormLabel>
							</div>
						</FormItem>
					)}
				/>

				<Button type='submit'>Search</Button>
			</form>
		</Form>
	)
}
export default SearchForm
