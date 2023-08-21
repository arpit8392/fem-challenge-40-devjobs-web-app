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
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/constants'
import { Filter, Search } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'

import LocationIcon from '@/public/assets/desktop/icon-location.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { Button } from './ui/button'

const FilterForm = () => {
	const router = useRouter()
	const formRef = useRef(null)

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
					isFullTime: values.role,
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
				ref={formRef}
				className='mx-6 flex items-center gap-6 rounded-md bg-white py-4 pl-6 pr-4 dark:bg-veryDarkBlue'>
				<FormField
					control={form.control}
					name='term'
					render={({ field }) => (
						<FormItem className='flex-1'>
							<FormControl>
								<Input placeholder='Filter by title...' {...field} />
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
					<DialogContent className='max-w-sm space-y-6 rounded-md bg-white dark:bg-veryDarkBlue'>
						<DialogHeader className='space-y-6'>
							<FormField
								control={form.control}
								name='location'
								render={({ field }) => (
									<FormItem className='w-full'>
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
									<FormItem className='flex gap-4'>
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
												className='h-6 w-6 shrink-0 rounded-[3px] border-none bg-veryDarkBlue/10 hover:bg-violet/25 focus-visible:ring-0 data-[state=checked]:bg-violet data-[state=checked]:text-white dark:bg-white/10 data-[state=checked]:dark:bg-violet data-[state=checked]:dark:text-white'
											/>
										</FormControl>
										<FormLabel className='font-bold text-veryDarkBlue dark:text-white'>
											Full Time Only
										</FormLabel>
									</FormItem>
								)}
							/>
						</DialogHeader>
						<DialogFooter>
							<Button type='submit'>Search</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>

				<button
					type='submit'
					className='flex h-12 w-12 items-center justify-center rounded-lg bg-violet hover:bg-lightViolet'>
					<Search className='h-5 w-5 text-white' />
				</button>
			</form>
		</Form>
	)
}
export default FilterForm
