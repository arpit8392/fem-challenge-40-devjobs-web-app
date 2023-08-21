import ThemeSwitcher from '@/components/ThemeSwitcher'
import Logo from '@/public/assets/desktop/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='bg-violet bg-header-pattern bg-no-repeat px-6 pb-[72px] pt-8 md:bg-inherit md:px-10 md:pb-[90px] md:pt-12 lg:bg-cover lg:px-40'>
			<div className='flex items-center justify-between '>
				<Link href={'/'}>
					<Image src={Logo} alt='Dev Jobs Logo' />
				</Link>
				<ThemeSwitcher />
			</div>
		</header>
	)
}
export default Header
