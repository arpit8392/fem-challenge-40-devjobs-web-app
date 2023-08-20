import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getJobsByFilters = (data: Job[], filters: Filter) => {
	const { term, location, isFullTime } = filters
	let results = data

	if (term?.length) {
		results = filterByTerm(results, term)
	}

	if (location?.length) {
		results = filterByLocation(results, location)
	}

	if (isFullTime) {
		results = results.filter((item) => item.contract === 'Full Time')
	}

	return results
}

export const filterByTerm = (data: Job[], term: string) => {
	const result = data.filter((item) =>
		item.position.toLowerCase().includes(term.toLowerCase())
	)

	return result
}

export const filterByLocation = (data: Job[], location: string) => {
	const result = data.filter((item) =>
		item.location.toLowerCase().includes(location.toLowerCase())
	)

	return result
}
