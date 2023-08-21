'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import queryString from 'query-string'
import * as z from 'zod'

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/constants'
import { Filter, Search } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Separator } from '@/components/ui/separator'

import { Button } from '@/components/ui/button'
import LocationIcon from '@/public/assets/desktop/icon-location.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import RoleInputField from './RoleInputField'

const MobileForm = () => {
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
				className='flex items-center gap-6 rounded-md bg-white py-4 pl-6 pr-4 dark:bg-veryDarkBlue'>
				<FormField
					control={form.control}
					name='term'
					render={({ field }) => (
						<FormItem className='flex-1'>
							<FormControl>
								<Input
									placeholder='Filter by title, companies, expertise…'
									{...field}
									className='truncate'
								/>
							</FormControl>
						</FormItem>
					)}
				/>

				<Dialog>
					<DialogTrigger asChild>
						<button>
							<Filter className='h-5 w-5 text-darkGrey dark:text-white' />
						</button>
					</DialogTrigger>
					<DialogContent className='max-w-sm space-y-6 rounded-md bg-white px-0 dark:bg-veryDarkBlue'>
						<DialogHeader className='space-y-6'>
							<FormField
								control={form.control}
								name='location'
								render={({ field }) => (
									<FormItem className='w-full px-6'>
										<FormControl>
											<div className='flex items-center gap-4'>
												<Image src={LocationIcon} alt='Filter by Location' />
												<Input
													placeholder='Filter by location...'
													{...field}
													className='flex-1'
												/>
											</div>
										</FormControl>
									</FormItem>
								)}
							/>
							<Separator />
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
						</DialogHeader>
						<DialogFooter className='px-6'>
							<Button type='submit' onClick={form.handleSubmit(onSubmit)}>
								Search
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>

				<Button type='submit' variant='icon' size='icon'>
					<Search className='h-5 w-5 text-white' />
				</Button>
			</form>
		</Form>
	)
}
export default MobileForm
