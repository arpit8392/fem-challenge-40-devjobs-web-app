import './globals.css'
import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import ThemeProvider from '@/components/ThemeProvider'

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
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
