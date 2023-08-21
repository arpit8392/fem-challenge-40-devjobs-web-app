'use client'

import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import MoonIcon from '@/public/assets/desktop/icon-moon.svg'
import SunIcon from '@/public/assets/desktop/icon-sun.svg'
import Image from 'next/image'

export default function ThemeSwitcher() {
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	const currentTheme = theme === 'system' ? systemTheme : theme

	const handleToggle = () => {
		if (currentTheme === 'dark') {
			setTheme('light')
		} else {
			setTheme('dark')
		}
	}

	return (
		<Switch.Group as='div' className='flex items-center gap-4'>
			<Switch.Label>
				<Image src={SunIcon} alt='Set Light Theme' />
			</Switch.Label>
			<Switch
				checked={
					currentTheme === 'dark' ||
					(currentTheme === 'system' &&
						window.matchMedia('(prefers-color-scheme: dark)').matches)
				}
				onChange={handleToggle}>
				{({ checked }) => (
					<button className='group relative inline-flex h-6 w-12 items-center rounded-full bg-white'>
						<span className='sr-only'>Enable Dark Mode</span>
						<span
							className={`${
								checked ? 'translate-x-7' : 'translate-x-2'
							} inline-block h-[14px] w-[14px] rounded-full bg-violet transition group-hover:bg-lightViolet`}
						/>
					</button>
				)}
			</Switch>
			<Switch.Label>
				<Image src={MoonIcon} alt='Set Dark Theme' />
			</Switch.Label>
		</Switch.Group>
	)
}
