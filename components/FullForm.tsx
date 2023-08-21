'use client'

type Props = {}

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/constants'
import LocationIcon from '@/public/assets/desktop/icon-location.svg'
import { Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import { useForm } from 'react-hook-form'
import RoleInputField from './RoleInputField'
import { Separator } from './ui/separator'

const FullForm = () => {
	const router = useRouter()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			term: '',
			location: '',
			role: false,
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		const url = queryString.stringifyUrl(
			{
				url: '/jobs',
				query: {
					term: values.term,
					location: values.location,
					isFullTime: values.role ? values.role : null,
				},
			},
			{
				skipEmptyString: true,
				skipNull: true,
			}
		)

		form.reset()
		router.push(url)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='relative flex items-center justify-evenly rounded-md bg-white py-4 pl-6 pr-4 dark:bg-veryDarkBlue'>
				<FormField
					control={form.control}
					name='term'
					render={({ field }) => (
						<FormItem className='flex-1'>
							<FormControl>
								<div className='flex items-center gap-4'>
									<Search className='h-6 w-6 text-violet' />
									<Input
										placeholder='Filter by title, companies, expertise…'
										{...field}
										className='truncate'
									/>
								</div>
							</FormControl>
						</FormItem>
					)}
				/>

				<Separator
					orientation='vertical'
					className='absolute left-[30%] bg-darkGrey/20 lg:left-[38%]'
				/>

				<FormField
					control={form.control}
					name='location'
					render={({ field }) => (
						<FormItem className='flex-1'>
							<FormControl>
								<div className='flex items-center gap-4'>
									<Image src={LocationIcon} alt='Location Icon' />
									<Input placeholder='Filter by location...' {...field} />
								</div>
							</FormControl>
						</FormItem>
					)}
				/>

				<Separator
					orientation='vertical'
					className='absolute left-[60%] bg-darkGrey/20 lg:left-[76%]'
				/>

				<FormField
					control={form.control}
					name='role'
					render={({ field }) => (
						<RoleInputField
							checked={field.value}
							onCheckedChange={field.onChange}
						/>
					)}
				/>
				<Button type='submit'>Search</Button>
			</form>
		</Form>
	)
}
export default FullForm
