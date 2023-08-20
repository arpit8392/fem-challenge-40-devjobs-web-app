import Header from '@/components/Header'
import ThemeProvider from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import './globals.css'

const kumbh_sans = Kumbh_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'DevJobs Web App',
	description:
		'Frontend Mentor Challenge | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={kumbh_sans.className}>
				<ThemeProvider enableSystem={true} attribute='class'>
					<div className='min-h-screen bg-lightGrey transition-all duration-500 dark:bg-midnight'>
						<Header />
						{children}
						<Toaster />
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
